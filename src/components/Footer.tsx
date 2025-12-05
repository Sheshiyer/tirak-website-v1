import { Link } from 'react-router-dom';
import AdaptiveLogo from './AdaptiveLogo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-card border-t border-border">
      <div className="absolute inset-0 glass-light"></div>
      
      <div className="relative container mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <AdaptiveLogo 
                size="md" 
                variant="contrast"
                className="transition-transform duration-300 hover:scale-105"
              />
              <span className="text-2xl font-bold font-inter text-contrast">
                Tirak
              </span>
            </div>
            <p className="text-contrast-secondary text-sm leading-relaxed max-w-md">
              Connect with verified local companions in Thailand. Discover authentic experiences, 
              explore hidden gems, and create unforgettable memories with trusted local guides.
            </p>
            <div className="flex space-x-4 mt-6">
              {/* Social Media Links */}
              {import.meta.env.VITE_FACEBOOK_ENABLED !== 'false' && (
                <a 
                  href="https://www.facebook.com/profile.php?id=61584212227083" 
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 hover:scale-110 transform"
                  aria-label="Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span className="sr-only">Facebook</span>
                </a>
              )}
              <a 
                href="https://www.instagram.com/tirak.app" 
                className="text-muted-foreground hover:text-primary transition-colors duration-200 hover:scale-110 transform"
                aria-label="Instagram @tirak.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm0 2a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H7zm5 3a5 5 0 110 10 5 5 0 010-10zm6.5-1.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3z" />
                </svg>
                <span className="sr-only">Instagram handle @tirak.app</span>
              </a>
              <a 
                href="https://www.tiktok.com/@tirak.app" 
                className="text-muted-foreground hover:text-primary transition-colors duration-200 hover:scale-110 transform"
                aria-label="TikTok @tirak.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M15.5 3c.7 1.9 2.1 3.4 4 3.9v3.1c-1.7-.2-3.3-.9-4.6-2v6.3c0 3.7-2.5 6.7-6.2 6.7-3.3 0-5.7-2.7-5.7-5.9 0-3.1 2.3-5.6 5.3-5.9v3.2c-1.2.2-2.1 1.2-2.1 2.5 0 1.5 1.2 2.7 2.7 2.7 1.9 0 3.1-1.5 3.1-3.4V3h2.5z" />
                </svg>
                <span className="sr-only">TikTok handle @tirak.app</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-contrast mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/" 
                  className="text-contrast-secondary hover:text-primary transition-colors duration-200 text-sm hover:translate-x-1 transform inline-block"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/tirak" 
                  className="text-contrast-secondary hover:text-primary transition-colors duration-200 text-sm hover:translate-x-1 transform inline-block"
                >
                  Find Companions
                </Link>
              </li>
              <li>
                <Link 
                  to="/bangkok" 
                  className="text-contrast-secondary hover:text-primary transition-colors duration-200 text-sm hover:translate-x-1 transform inline-block"
                >
                  Bangkok Guides
                </Link>
              </li>
              <li>
                <Link 
                  to="/chiang-mai" 
                  className="text-contrast-secondary hover:text-primary transition-colors duration-200 text-sm hover:translate-x-1 transform inline-block"
                >
                  Chiang Mai Guides
                </Link>
              </li>
              <li>
                <Link 
                  to="/download" 
                  className="text-contrast-secondary hover:text-primary transition-colors duration-200 text-sm hover:translate-x-1 transform inline-block"
                >
                  Download App
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-contrast-secondary hover:text-primary transition-colors duration-200 text-sm hover:translate-x-1 transform inline-block"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Support */}
          <div>
            <h3 className="text-lg font-semibold text-contrast mb-4">
              Legal & Support
            </h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/privacy" 
                  className="text-contrast-secondary hover:text-primary transition-colors duration-200 text-sm hover:translate-x-1 transform inline-block"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link 
                  to="/terms" 
                  className="text-contrast-secondary hover:text-primary transition-colors duration-200 text-sm hover:translate-x-1 transform inline-block"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <a 
                  href="mailto:support@tirak.com" 
                  className="text-contrast-secondary hover:text-primary transition-colors duration-200 text-sm hover:translate-x-1 transform inline-block"
                >
                  Support
                </a>
              </li>
              <li>
                <Link 
                  to="/data-deletion" 
                  className="text-contrast-secondary hover:text-primary transition-colors duration-200 text-sm hover:translate-x-1 transform inline-block"
                >
                  Data Deletion
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-contrast-secondary text-sm">
              © {currentYear} Tirak. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link 
                to="/privacy" 
                className="text-contrast-secondary hover:text-primary transition-colors duration-200"
              >
                Privacy
              </Link>
              <Link 
                to="/terms" 
                className="text-contrast-secondary hover:text-primary transition-colors duration-200"
              >
                Terms
              </Link>
              <Link 
                to="/contact" 
                className="text-contrast-secondary hover:text-primary transition-colors duration-200"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
