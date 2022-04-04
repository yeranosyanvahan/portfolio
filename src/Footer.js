import React from 'react';
import {Link} from 'react-router-dom';

function Footer(){return(
<footer >
  <div id="footer-content">
    YERANOSYAN VAHAN © 2021
    <div style={{"display":"flex","gap":"0.5ch"}}>
      If you have any suggestion and requests you can
      <Link className="link_decoration" to="/contact">
        contact me here.
      </Link>
    </div>
  </div>


</footer>

)}

export default Footer;
