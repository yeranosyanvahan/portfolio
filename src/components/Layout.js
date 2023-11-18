import React from 'react';
import { Link } from 'gatsby';
import './Layout.css';

export default function Layout({ children }) {
  return (
    <>
      <header>
        <div>
        <Link to="/"><img src="/images/necklace_fractal.png" style={{filter: "blur(0.7px) contrast(2.5)"}} alt="Logo" height={"50px"}/></Link>
        </div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/awards">Awards</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        {children}
      </main>
      <footer>
        © {new Date().getFullYear()} Vahan Yeranosyan - All Rights Reserved
      </footer>
    </>
  );
}
