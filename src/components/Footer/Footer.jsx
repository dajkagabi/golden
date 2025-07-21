import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 py-8 px-4 md:px-20 border-t border-gray-200">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm">
        
        <p className="mb-4 md:mb-0 text-center md:text-left">
          &copy; 2025 Golden Dragon Restaurant. All rights reserved.
        </p>

       
        <div className="flex space-x-6">
          <a href="/privacy-policy" className="hover:text-gray-900 transition-colors duration-200">
            Privacy Policy
          </a>
          <a href="/terms-of-service" className="hover:text-gray-900 transition-colors duration-200">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;