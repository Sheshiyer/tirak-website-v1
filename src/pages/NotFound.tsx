import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import SEO from "@/components/SEO";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <SEO
        title="Page Not Found - Tirak"
        description="The page you're looking for doesn't exist. Return to Tirak to discover authentic travel experiences with local companions."
      />
      <div className="text-center">
        <h1 className="text-responsive-lg font-bold font-inter text-contrast mb-4">404</h1>
        <p className="text-xl text-contrast-secondary mb-4">Oops! Page not found</p>
        <a href="/" className="text-primary hover:text-primary-hover underline transition-colors">
          Go back to home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
