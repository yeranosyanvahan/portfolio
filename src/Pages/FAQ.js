import React from 'react';
import {useState} from 'react';
import $ from 'jquery';

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
  <div className="question" onClick={onclick}><span>{question}</span> <i class="fa fa-chevron-right" aria-hidden="true" /> </div>
  <div className="answer" >{answer}</div>
</div>
  )}
function FAQ()
{
  const [select, Setselect] = useState(false)
  return(
    <div class="content">
     <div className="faq">
     <QA>
       <question>How many certificates do you have?</question>
       <answer>
        <p>Forthy Five</p>
       </answer>
     </QA>
     <QA>
       <question>What is your long-term goals?</question>
       <answer>
        <p> My long-term goal is to be part of something greater than me.</p>
       </answer>
     </QA>
     <QA>
       <question>What is your specialization?</question>
       <answer>
        <p>I specialize in 3 fields: Engineering, Information Technology and Computer Science</p>
        <p>As a Computer Scientist I have been involved in AI and did a bunch of Projects. </p>
        <p>As a IT specialist manage and self-hosted services for people.</p>
        <p>As an Engineer I watch Youtube Videos</p>
       </answer>
     </QA>
     </div>
    </div>
  )

}


export default FAQ;
