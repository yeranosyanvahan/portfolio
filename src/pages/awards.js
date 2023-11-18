// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
// import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import CertificateWithTranslation from "../components/CertificateWithTranslation"

import React, { Component } from 'react';
import Layout from '../components/Layout'
import certinfo from '../data/info.json';
import '../styles/certificates.css';
import '../styles/award.css';
import PhotoAlbum from "react-photo-album";
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const photos = certinfo.map(cert => ({
  ...cert,
  src: `/certificates/small_${cert.file_name}`,
  width: cert['orientation'] === 'landscape' ? 1287 : 1000,
  height: cert['orientation'] === 'landscape' ? 1000 : 1462,
  srcSet: [
      {
          src: `/certificates/${cert.file_name}`,
          width: cert['orientation'] === 'landscape' ? 1287 : 1000,
          height: cert['orientation'] === 'landscape' ? 1000 : 1462
      },
      {
          src: `/certificates/small_${cert.file_name}`,
          width: cert['orientation'] === 'landscape' ? 500 : 389,
          height: cert['orientation'] === 'landscape' ? 389 : 500
      }
  ]
}));



export default class Awards extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        photoIndex: 0,
        isOpen: false,
      };
    }
    render(){
        const { isOpen, photoIndex } = this.state; // Destructure state variables

     
        return <Layout color="#c53030">
         <PhotoAlbum layout="rows" photos={photos} onClick={({ index }) => {this.setState({ isOpen: true, photoIndex:index })}} />
         <Lightbox
        slides={photos}
        open={isOpen}
        index={photoIndex}
        close={() => this.setState({isOpen: false})}
    
        // enable optional lightbox plugins
        plugins={[Fullscreen, Thumbnails, Zoom]}
          
      />
        </Layout>
        
    }
}