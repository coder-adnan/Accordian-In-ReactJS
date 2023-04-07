import React, { useState } from 'react';
import "./accordion.css";
import questions from './api';
import { MyAccordion } from './MyAccordion';
export const Accordion = () => {
    const [data , setData] = useState(questions);
    return (
    <>   
    <section>
        {
            data.map((currentElement)=>{
                const {id} = currentElement;
                return <MyAccordion key={id} {...currentElement}/>

            })
        }
        </section>
    </>
  )
}
