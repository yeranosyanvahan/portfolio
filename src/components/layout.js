import React from 'react';
import Navigation from './navigation';
import Footer from './footer';
import '../styles/main.css'; // Assuming you're using CSS Modules or similar

const Layout = ({ children }) => (
  <>
    <Navigation />
    <main>{children}</main>
    <Footer />
  </>
);

export default Layout;
