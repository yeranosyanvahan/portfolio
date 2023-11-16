import React from 'react';
import './footer.css'; // Assuming you will create this CSS file for footer-specific styles

const Footer = () => (
  <footer>
    <div className="footer-content">
      © {new Date().getFullYear()} Vahan Yeranosyan - All Rights Reserved
    </div>
  </footer>
);

export default Footer;