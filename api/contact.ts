import type { VercelRequest, VercelResponse } from '@vercel/node';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string;
}

// Rate limiting storage (in production, use Redis or database)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

// Clean up old rate limit entries
const cleanupRateLimit = () => {
  const now = Date.now();
  for (const [key, value] of rateLimitMap.entries()) {
    if (now > value.resetTime) {
      rateLimitMap.delete(key);
    }
  }
};

// Check rate limit (max 3 submissions per hour per IP)
const checkRateLimit = (ip: string): boolean => {
  cleanupRateLimit();
  
  const now = Date.now();
  const hourInMs = 60 * 60 * 1000;
  const maxRequests = 3;
  
  const current = rateLimitMap.get(ip);
  
  if (!current) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + hourInMs });
    return true;
  }
  
  if (now > current.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + hourInMs });
    return true;
  }
  
  if (current.count >= maxRequests) {
    return false;
  }
  
  current.count++;
  return true;
};

// Validate email format
const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return emailRegex.test(email) && email.length <= 254;
};

// Sanitize input to prevent injection attacks
const sanitizeInput = (input: string): string => {
  return input
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/on\w+=/gi, '') // Remove event handlers
    .trim();
};

// No delivery provider is configured for this website handler. Fail closed:
// accepting a request without a durable destination would silently lose it.
// Provider integration must require an observed acceptance ID before returning success.
const sendEmail = async (_data: ContactFormData): Promise<boolean> => false;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ 
      error: 'Method not allowed',
      message: 'Only POST requests are accepted'
    });
  }
  
  try {
    // Get client IP for rate limiting
    const clientIP = req.headers['x-forwarded-for'] as string || 
                    req.headers['x-real-ip'] as string || 
                    req.connection?.remoteAddress || 
                    'unknown';
    
    // Check rate limit
    if (!checkRateLimit(clientIP)) {
      return res.status(429).json({
        error: 'Rate limit exceeded',
        message: 'Too many submissions. Please try again later.'
      });
    }
    
    // Validate request body
    const body = req.body;
    if (!body || typeof body !== 'object' || Array.isArray(body)) {
      return res.status(400).json({ error: 'Invalid request', message: 'A contact form object is required.' });
    }
    const { name, email, subject, message, timestamp } = body as ContactFormData;
    if (![name, email, subject, message].every(value => typeof value === 'string') ||
        (timestamp !== undefined && typeof timestamp !== 'string')) {
      return res.status(400).json({ error: 'Invalid fields', message: 'Contact fields must be text.' });
    }
    
    // Check required fields
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        error: 'Missing required fields',
        message: 'Name, email, subject, and message are required'
      });
    }
    
    // Validate field lengths
    if (name.length > 100 || email.length > 254 || subject.length > 200 || message.length > 2000) {
      return res.status(400).json({
        error: 'Field too long',
        message: 'One or more fields exceed maximum length'
      });
    }
    
    // Validate email format
    if (!isValidEmail(email)) {
      return res.status(400).json({
        error: 'Invalid email',
        message: 'Please provide a valid email address'
      });
    }
    
    // Sanitize inputs
    const sanitizedData: ContactFormData = {
      name: sanitizeInput(name),
      email: sanitizeInput(email),
      subject: sanitizeInput(subject),
      message: sanitizeInput(message),
      timestamp: timestamp || new Date().toISOString()
    };
    
    // Additional spam checks
    const spamKeywords = ['viagra', 'casino', 'lottery', 'winner', 'congratulations'];
    const messageText = `${sanitizedData.name} ${sanitizedData.subject} ${sanitizedData.message}`.toLowerCase();
    
    if (spamKeywords.some(keyword => messageText.includes(keyword))) {
      return res.status(400).json({
        error: 'Spam detected',
        message: 'Message appears to be spam'
      });
    }
    
    // Send email
    const emailSent = await sendEmail(sanitizedData);
    
    if (!emailSent) {
      return res.status(503).json({
        error: 'Contact service unavailable',
        message: 'Your message has not been sent. Please contact us directly.'
      });
    }
    
    // Success response
    return res.status(200).json({
      success: true,
      message: 'Message sent successfully'
    });
    
  } catch (error) {
    console.error('Contact form error:', error);
    
    return res.status(500).json({
      error: 'Internal server error',
      message: 'An unexpected error occurred. Please try again later.'
    });
  }
}