import React from 'react';
import Layout from '../components/layout.js';
import "../styles/contact.css"

export default class Contact extends React.Component {
  render() {
    return (
        <Layout><div className='content centered gapped'>
            <div style={{"display":"flex", "gap":"4rem"}}>
              <form className="contact" target="_self" action="https://formsubmit.co/formsubmit@saghatelyaninstitute.org" method="POST">
                <h2 className="wide">Contact Form</h2>
                <input type="hidden" name="_next" value="https://www.yeranosyanvahan.com/contact" />
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
                <div style={{"margin-top":"4rem"}}>City of Residence:</div>
                <div>Martuni, Armenia</div>
                <div style={{"margin-top":"3rem"}}>Email:</div>
                <div>vahan@yeranosyanvahan.com</div>
                <div style={{"margin-top":"3rem"}}>Links:</div>
                <a href="https://github.com/yeranosyanvahan/">GitHub</a>

                <a style={{"margin-left":"0.5rem"}} href="https://www.linkedin.com/in/vahan-yeranosyan-712728204/">Linkedin</a>
              </div>
            </div>
          </div>
        </Layout>
  )}
}