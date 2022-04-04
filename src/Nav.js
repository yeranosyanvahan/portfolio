import React from 'react';
import {Link} from 'react-router-dom';


//  <Link to="/"><img style={{"position": "relative", "top": "-10%","height": "120%"}} src="Logo_small.svg" alt="logo" /></Link> 
function Nav()
{
  return  <nav>
      <div className="nav-home">
      </div>
      <div className="nav-links">
        <Link to="/about">About</Link>
        <Link to="/awards">Awards</Link>
        <Link to="/work">Work</Link>
        <Link to="/contact">Contact</Link>
      </div>
  </nav>
}



export default Nav;
