import React from 'react';
import {Link} from 'react-router-dom';
function Nav()
{
  return  <nav>
      <div className="nav-links">
        <Link  to="/"><img style={
         {"position": "relative",
          "top": "-10%",
          "padding": "5px",
          "background": "#a4ffb2cc",
          "height": "48px",
          "borderRadius":"50%"}} src="Images/logo50.png" alt="logo" /></Link>
        <Link className="link_decoration" to="/about">About</Link>
        <Link className="link_decoration" to="/awards">Awards</Link>
        <Link className="link_decoration" to="/work">Work</Link>
        <Link className="link_decoration" to="/contact">Contact</Link>
        <Link className="link_decoration" to="/faq">FAQ</Link>
      </div>
  </nav>
}



export default Nav;
