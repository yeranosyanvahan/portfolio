import React from 'react';

class Contact extends React.Component {
  componentDidMount () {
      const script = document.createElement("script");
      script.src = "/map.js";
      script.async = true;
      document.body.appendChild(script);
  }
  render() {
    return     <main id='contact' className='content gapped'>
            <h1>Contact Form</h1>
            <h1>Contact Info</h1>
            <form style={{"grid-row":"2"}} className="contact" target="_self" action="https://formsubmit.co/formsubmit@saghatelyaninstitute.org" method="POST">
              <input type="hidden" name="_next" value="https://www.saghatelyaninstitute.org/thanks-for-contacting-us" />
              <input type="text" name="_bot" style={{"display":"none"}} />
              <input type="hidden" name="_captcha" value="false" />
              <label htmlFor="fullname">Full Name</label>
              <label htmlFor="email">Email Address</label>
              <input type="text" name="fullname" required="" />
              <input type="email" name="email" required="" />
              <label htmlFor="messaage" className="wide">Your message</label>
              <textarea name="message" className="wide" rows="10" required=""></textarea><button type="submit" className="wide">Submit</button>
            </form>
            <div id="contact_info">
              <div>Address:</div>
              <div>1401 Getapnya 16, Martuni, Armenia</div> <br/>
              <div>Telephone:</div>
              <div>+(374)98-941-610</div><br/>
              <div>E-mail:</div>
              <div><a className="link_decoration" href="mailto:vahan@yeranosyanvahan.com">vahan@yeranosyanvahan.com</a></div><br/>
            </div>

        <div id="mapid"></div>
        </main>
  }
}

export default Contact;
