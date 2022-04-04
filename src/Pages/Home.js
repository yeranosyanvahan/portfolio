import React from 'react';
import { HashLink } from 'react-router-hash-link';

function Home()
{
  return  <div className="content centered">

    <h1>  Hi I am Vahan Yeranosyan</h1>
    <h4 style={{"textAlign":"center"}}> I consider myself a Persistent, Perseverant [IT-CS-ML-AI] specialist-intellectual, <br/> that loves blowing computers, and people's minds.  </h4>
    <figure>
      <img id="main-image" style={{"height": "450px","padding":"2rem"}} src="Images/logo600.png" alt="logo" />
      <figcaption style={{"textAlign":"center"}}> Beautiful <HashLink to="/work#fractals">Fractals</HashLink></figcaption>
    </figure>
  </div>


}

export default Home;
