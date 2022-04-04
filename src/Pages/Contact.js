import React from 'react';
import { useEffect } from 'react';



class Contact extends React.Component {
  componentDidMount () {
      const script = document.createElement("script");
      script.src = "/map.js";
      script.async = true;
      document.body.appendChild(script);
  }
  render() {
    return     <div className='content centered gapped'>
          <div style={{"display":"flex", "gap":"4rem"}}>
            <form className="contact" target="_self" action="https://formsubmit.co/formsubmit@saghatelyaninstitute.org" method="POST">
              <h2 className="wide">Contact Form</h2>
              <input type="hidden" name="_next" value="https://www.saghatelyaninstitute.org/thanks-for-contacting-us" />
              <input type="text" name="_bot" style={{"display":"none"}} />
              <input type="hidden" name="_captcha" value="false" />
              <label for="fullname">Full Name</label>
              <label for="email">Email Address</label>
              <input type="text" name="fullname" required="" />
              <input type="email" name="email" required="" />
              <label for="messaage" class="wide">Your message</label>
              <textarea name="message" class="wide" rows="10" required=""></textarea><button type="submit" class="wide">Submit</button>
            </form>

            <div>
              <h1>Contact Info</h1>
              <div style={{"margin-top":"4rem"}}>Address</div>
              <div>1401 Getapnya 16, Martuni, Armenia</div>
              <div style={{"margin-top":"3rem"}}>Telephone</div>
              <div>+(374)98-941-610</div>
            </div>
          </div>

        <div id="mapid"  style={{"position": "relative","height": "700px","width": "1200px"}} ></div>
        </div>
  }
}

export default Contact;
