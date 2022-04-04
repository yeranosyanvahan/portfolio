import React from 'react';
import info from "./Info.json"
import {useState,useEffect} from 'react';

function Info({props:{date,name,certificate,grant,description,color}}){
return(
  <div className="info" style={{"color":color}}>
    <div id="date">       {date}        </div>
    <div id="name">       {name}        </div>
    <div id="certificate">{certificate} </div>
    <div id="grant">      {grant}       </div>
    <div id="description">{description} </div>
  </div>
)}

function Achievements() {
  document.title = "🥇 AWARDS 🥇"
  let Images=[...Array(33).keys()].map((ind) =>
    <img className={ind > 10 ? "tall" : "wide" }
      id={`${ind+1}`}
      key={`${ind+1}`}
      src={`./Images/Certificates/Image (${ind+1}).jpg`}
      alt=""
      onClick={({target})=>{Setselect(target['id'])}}
      />)
  let [select,Setselect]=useState(false)
  return (
    <>

      {
        select !== false
         ?   <div className="zoom" onClick={()=>{Setselect(false)}}>
               {Images[select-1] }
               <Info props={info[select]} />
             </div>
         : ""
      }

    <div className="content">
      <div className="achievements">
        {Images}
      </div>
    </div>
    </>

  );
}

export default Achievements;
