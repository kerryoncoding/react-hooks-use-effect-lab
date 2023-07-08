import React, { useState, useEffect } from "react";

function Question({ question, onAnswered }) {
  const [timeRemaining, setTimeRemaining] = useState(10);

  // add useEffect code
  useEffect(()=> {
    const timer = setTimeout(() => {
      if (timeRemaining === 1) {
        console.log("here")
        onAnswered(false)
        setTimeRemaining(10)

      } else {
       if (timeRemaining > 0) {
        setTimeRemaining(()=> timeRemaining-1)
      }}
    console.log(timeRemaining)  
   }, 1000);
   
   return () => clearTimeout(timer);  
   
  }, [timeRemaining])
  
  

  function handleAnswer(isCorrect) {
    setTimeRemaining(10);
    onAnswered(isCorrect);
  }

  const { id, prompt, answers, correctIndex } = question;

  return (
    <>
      <h1>Question {id}</h1>
      <h3>{prompt}</h3>
      {answers.map((answer, index) => {
        const isCorrect = index === correctIndex;
        return (
          <button key={answer} onClick={() => handleAnswer(isCorrect)}>
            {answer}
          </button>
        );
      })}
      <h5>{timeRemaining} seconds remaining</h5>
    </>
  );
}

export default Question;
