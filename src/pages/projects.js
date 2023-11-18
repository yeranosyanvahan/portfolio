import Layout from '../components/Layout';
import '../styles/projects.css'
import img from '../data/project_img.json';
import React, { Component } from 'react';


// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
// import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import PhotoAlbum from "react-photo-album";
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";



import certinfo from '../data/info.json';
const photos = certinfo.map(cert => ({
    ...cert,
    src: `/certificates/${cert['file_name']}`,
    width: cert['orientation'] === 'landscape' ? 1287 : 1000,
    height: cert['orientation'] === 'landscape' ? 1000 : 1462,
    imageProps: { style: "class: ", className: "hello" }
}));

export default class Projects extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }
  openLightbox(index) {
    this.setState({
      photoIndex: index,
      isOpen: true
    });
  }

  render(){
    const { isOpen, photoIndex } = this.state; // Destructure state variables
  return <Layout>
    <div className='content'>
      <div id="minesweeper" className="text">
          <h2>PERFECT MINESWEEPER AI (VISUALIZATION)</h2>
          <p>In the classic game of Minesweeper, players often encounter scenarios where intuitive decisions are insufficient, necessitating calculated guesses to prevail. Recognizing this, I embarked on a project to eliminate guesswork through the development of an AI-driven Minesweeper visualization tool. This AI leverages probabilistic analysis to identify the likelihood of bombs in each tile, guiding decisions with precision.</p>
          <p>The visualization showcased here represents the AI's analytical prowess. Through a color-coded map, it reveals the bomb probability for each square - green indicating low risk and red signaling high danger. This tool is the epitome of a Perfect Minesweeper AI, transforming each move from a guess to an informed decision.</p>
          <div>
          <img style={{"maxWidth":"100%","margin":"auto","display":"block"}} src="./Images/Minesweeper/Minesweeper.png" alt="Perfect Minesweeper AI"/>
          </div>
          <p>In the examples above, you witness scenarios where guessing is usually unavoidable. The AI's probability map provides a strategic advantage, enabling the player to make the most informed choice possible. This project not only highlights my technical capabilities but also my dedication to enhancing user experience in gaming through intelligent design. </p>
      </div>
      <div id="fractals" className="text">
          <h2>FRACTALS</h2>
          <p>The intersection of technology and creativity often yields breathtaking results, as exemplified in my exploration of fractal generation. This project delves into the question: Can computers emulate creativity? The fractals displayed here are a testament to the artistic capabilities of algorithmic processes, each one a unique fusion of mathematics and aesthetics.</p>
          <div className="gallery">

            <div className="text">Exorcise the demon from a planet</div>
            <img src="./Images/Fractals/blue/2_small.png" onClick = {() => {this.openLightbox(3)}}/>
            <img src="./Images/Fractals/blue/3_small.png" onClick = {() => {this.openLightbox(4)}}/>
            <img src="./Images/Fractals/blue/4_small.png" onClick = {() => {this.openLightbox(5)}}/>

            <div className="text">Spaceship Fractals</div>
            <img src="./Images/Fractals/yellow/1_small.png" onClick = {() => {this.openLightbox(6)}}/>
            <img src="./Images/Fractals/yellow/2_small.png" onClick = {() => {this.openLightbox(7)}}/>
            <img src="./Images/Fractals/yellow/3_small.png" onClick = {() => {this.openLightbox(8)}}/>

            <div className="text">Green Fractals</div>
            <img src="./Images/Fractals/green/1_small.png" onClick = {() => {this.openLightbox(9)}}/>
            <img src="./Images/Fractals/green/2_small.png" onClick = {() => {this.openLightbox(10)}}/>
            <img src="./Images/Fractals/green/3_small.png" onClick = {() => {this.openLightbox(11)}}/>
            <img src="./Images/Fractals/green/4_small.png" onClick = {() => {this.openLightbox(12)}}/>
            <img src="./Images/Fractals/green/5_small.png" onClick = {() => {this.openLightbox(13)}}/>
            <img src="./Images/Fractals/green/6_small.png" onClick = {() => {this.openLightbox(14)}}/>

            <div className="text">Black and White Fractals</div>
            <img src="./Images/Fractals/black_white/1_small.png" onClick = {() => {this.openLightbox(15)}}/>
            <img src="./Images/Fractals/black_white/2_small.png" onClick = {() => {this.openLightbox(16)}}/>
            <img src="./Images/Fractals/black_white/3_small.png" onClick = {() => {this.openLightbox(17)}}/>

            <div className="text">Other Fractals</div>
            <img src="./Images/Fractals/other/1_small.png" onClick = {() => {this.openLightbox(18)}}/>
            <img src="./Images/Fractals/other/2_small.png" onClick = {() => {this.openLightbox(19)}}/>
            <img src="./Images/Fractals/other/3_small.png" onClick = {() => {this.openLightbox(20)}}/>

          </div>          
          <Lightbox
            slides={img}
            open={isOpen}
            index={photoIndex}
            close={() => this.setState({isOpen: false})}      
            plugins={[Fullscreen, Thumbnails, Zoom]}                      
          />
          <p>All picture you see are generated by myself and my computer</p>
      </div>
    </div>


  </Layout>;
}
}