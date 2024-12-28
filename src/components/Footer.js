import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-light text-center text-lg-start">
        <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          <a href="https://discord.gg/XCngeXWusK" rel="noopener noreferrer" target="_blank" className="text-dark me-4">
            <FontAwesomeIcon icon={faDiscord} />
          </a>
          <a href="https://www.linkedin.com/company/usmoberkeley/" rel="noopener noreferrer" target="_blank" className="text-dark me-4">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://www.instagram.com/ucb_usmo/" rel="noopener noreferrer" target="_blank" className="text-dark me-4">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>

        <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
          © Undergraduate Street Medicine Outreach, 2024. All rights reserved.
        </div>
    </footer>
  );
};

export default Footer;