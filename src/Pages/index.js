// src/pages/index.js
import * as React from "react"
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <div className='content'>

        <div className='text'>
          <h1 id="welcome-to-my-portfolio">Welcome to My Portfolio</h1>
          <p>Hello! I&#39;m Vahan Yeranosyan, a senior year Bachelor&#39;s student in Data Science, passionate about the intersection of technology, creativity, and problem-solving.</p>
        </div>

        <div className='text'>
          <h2 id="about-me">About Me</h2>
          <p>As a data scientist in the making, I&#39;ve dedicated my academic journey to understanding and innovating in the field of data science. My projects, ranging from forecasting light-matter interaction in liquid crystals to developing an <a href="https://github.com/yeranosyanvahan/micronet">Internet Protocol Suite from scratch</a>, showcase my ability to tackle complex challenges. </p>
        </div>

        <div className='text' style = {{ marginBottom: "4rem"}}>
          <h2 id="milestones">Explore my Milestones</h2>
          <p>As you navigate through my website, you will find detailed insights into my educational endeavors, such as the challenging projects I undertook during the <a href="/awards">FAST AI Bootcamp Program </a> and my significant achievement in winning <a href="/awards">the M1TQ Hackathon</a>. Continue exploring and have fun.</p>
        </div>

        <div className='text'>
          <div style = {{ marginBottom: "2rem"}}>If you are Interested in learning more or collaborating <a href="/contact">Get in touch</a>!</div>
          <div>Thank you for visiting my portfolio.</div>
        </div>
      </div>
    </Layout>
  );
}
