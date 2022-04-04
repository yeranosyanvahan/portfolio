import React from 'react';
import $ from 'jquery';
import {Link} from 'react-router-dom';

function QA({children}){
  let [question,answer]=children.map((sample)=>{return sample.props.children})

  let open = false;
  function onclick({currentTarget:question}){
    let answer=$(question).parent().find('.answer')
    let arrow = $(question).find('i')
    console.log(arrow)
    if(open) {answer.slideUp(); arrow.css({'transform' : 'rotate(0deg)'});}
    else     {answer.slideDown(); arrow.css({'transform' : 'rotate(90deg)'});}

    open=!open
  }
  return(
<div className="qa">
  <div className="question" onClick={onclick}><span>{question}</span> <i className="fa fa-chevron-right" aria-hidden="true" /> </div>
  <div className="answer" >{answer}</div>
</div>
  )}
function FAQ()
{
  return(
    <div className="content responsive">
    <main className="faq">
      <QA>
        <question>What does IT-CS-ML-AI mean?</question>
        <answer>
         <p>Information Technologies---Computer Science---Machine Learning---Artificial Inteligence</p>
        </answer>
      </QA>
     <QA>
       <question>How many certificates do you have?</question>
       <answer>
        <p>Forthy Five, but that's most likely change in less than a year.</p>
       </answer>
     </QA>
     <QA>
       <question>Can I have a look at Minesweeper AI?</question>
       <answer>
        <p> I have't make any official releases, however you can <Link className="link_decoration" to="/contact"> contact me </Link> and request to play around it.</p>
       </answer>
     </QA>
     <QA>
       <question>Are fractals really generated on a computer?</question>
       <answer>
        <p>5000 fractals were generated on a computer (most of those fractals were a black screen and a circle, or a triangle), so the fractals you see are handpicked by me.</p>
       </answer>
     </QA>
     <QA>
       <question>What is your favourite subject?</question>
       <answer>
        <p>I studied Physics and Engineering almost at the same time as I study IT-CS-ML-AI. Knowledge that I got from physics really help me understand computers and nature better. So, generally, I love Physics more. </p>
       </answer>
     </QA>
     <QA>
       <question>How long does it take to complete your projects?</question>
       <answer>
         <p>Even If my schedule is busy, I find time to dedicate to my projects. So, considering busy schedule it takes 1-2 months.</p>
       </answer>
     </QA>
     <QA>
       <question>How many domains do you manage/have you ever managed?</question>
       <answer>
         <p><a className="link_decoration" href="https://www.miom.am">miom.am</a> .... yeranosyanvahan.com .... <a className="link_decoration" href="https://www.saghatelyaninstitute.org">saghatelyaninstitute.org</a></p>
         <p>And almost all of their subdomains(some of those are for administration, so I won't show it here)</p>

         <p>By the way SaghatelyanInstitute is a working non-governmental organization founded by me and <a className="link_decoration" href="https://www.saghatelyaninstitute.org/about-the-founder-chief-executive-officer-ceo">Nver Saghayelyan</a></p>
       </answer>
     </QA>

   </main>
    </div>
  )

}


export default FAQ;
