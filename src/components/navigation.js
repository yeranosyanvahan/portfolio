import React from 'react';
import { Link } from 'gatsby';
import './navigation.css'; // Assuming you will create this CSS file for navigation-specific styles

const Navigation = () => (
  <nav>
    <div className="nav-wrapper">
      <div className="brand-logo">Vahan Yeranosyan</div>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/cv">CV</Link></li>
        <li><Link to="/certificates">Certificates</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </div>
  </nav>
);

export default Navigation;