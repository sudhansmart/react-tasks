import React from 'react';

const Footer = () => {
  return (
    
    <footer className="footer">
      <div className="container text-center" style={{height:'20px'}}>
        <p>&copy; {new Date().getFullYear()} Designed by Sudhan. All Rights Reserved.
          Connect with us on{' '}
          <a
            href="https://www.linkedin.com/in/harihara-sudhan-333712186"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
