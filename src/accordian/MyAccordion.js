import React, { useState } from "react";
import "./accordion.css";
export const MyAccordion = ({ question, answer }) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="mainContainer">
        <div className="questions">
          <p onClick={()=>{setShow(!show)}}>{show===true? "–" : "+" }</p>
          <h1>{question}</h1>
        </div>
        
        {show === true ? <p className="answers">{answer}</p> : false} 
      </div>
      
    </>
  );
};
