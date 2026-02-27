import React, { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import AdaptiveLogo from './AdaptiveLogo';
import tirakLogo from '@/assets/logos/tirak-logo.png';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Explore', href: '#explore' },
  { label: 'Stories', href: '#companion-stories' },
  { label: 'For Guides', href: '#for-guides' },
  { label: 'Contact', href: '/contact' },
];

const linkClass =
  'magnetic text-contrast hover:text-primary font-medium transition-colors focus-ring relative after:content-[\'\'] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleHashClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
      e.preventDefault();
      const id = hash.replace('#', '');

      if (location.pathname === '/') {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigate('/');
        // Wait for homepage to mount, then scroll
        setTimeout(() => {
          document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      }
    },
    [location.pathname, navigate],
  );

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'py-4' : 'py-6'
      }`}
    >
      <nav className="container mx-auto px-6">
        <div className={`glass-nav flex items-center justify-between transition-all duration-300 ${
          isScrolled ? 'py-3' : 'py-4'
        }`}>
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <AdaptiveLogo
              size="md"
              variant="contrast"
              className="transition-transform duration-300 hover:scale-105 hover:rotate-3"
            />
            <img
              src={tirakLogo}
              alt="Tirak logo"
              className="h-8 sm:h-9 w-auto select-none"
              draggable={false}
            />
          </div>

          {/* Navigation Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) =>
              item.href.startsWith('#') ? (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleHashClick(e, item.href)}
                  className={linkClass}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  to={item.href}
                  className={linkClass}
                >
                  {item.label}
                </Link>
              ),
            )}
          </div>

          {/* Download App Button */}
          <Link to="/download" className="inline-flex">
            <Button 
              className="btn-primary animate-pulse-glow focus-ring will-change-transform hardware-accelerated"
            >
              Download the App
            </Button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
