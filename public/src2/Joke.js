import React from "react"

function Joke(props) {
    return (
      <div>
        <h3 style={{color:"red"}}>Question: {props.question}</h3>
        <h3>Answer: {props.answer}</h3>
        <p style={{display: props.para ? "block" : "none"}}> Paragraph {props.para}</p>
      </div>
    )
};


export default Joke;
