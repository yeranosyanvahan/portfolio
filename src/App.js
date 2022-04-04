import React from 'react';

import Nav from './Nav.js'
import Footer from "./Footer.js"

import {About, Contact, FAQ, Work, Home}  from './Pages'
import Awards from './Awards.js'

import {BrowserRouter,  Routes,  Route} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
      <div id="background" style={{'backgroundImage': 'url("./Images/background.jpg")'}}></div>
        <Nav />
        <Routes>
          <Route path="work" element={<Work />} />
          <Route path="awards" element={<Awards />} />
          <Route path="contact" element={<Contact />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="about" element={<About />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>

  );
}

export default App;
