import React from "react"


function Joke(props) {

          return (
              <div>
                  <h3 style={{color:"grey"}}>Question:{props.question}</h3>
                  <h3>Answer:{props.answer}</h3>
                  <p>Paragraph: {props.para}</p>
              </div>

          )
}


export default Joke;
