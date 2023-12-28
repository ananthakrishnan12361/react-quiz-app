import React, { useState } from 'react'
import QuizCard from './shared/QuizCard'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
export default function QuizTest({quizData,setTotalScore,setPosition,setQuizData}) {
  // State variables using the useState hook
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [show, setShow] = useState(false);
  // Function to handle option selection in a quiz questio
  const handleOptionSelect = (questionId, selectedOption) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionId]: selectedOption,
    });
  };

  // Function to calculate the total score based on selected answers
  const handleFinish =async () => {
    const score =await calculateScore();
    setTotalScore(score);
    setPosition('result')
  };

   // Function to handle finishing the quiz
  const calculateScore = () => {
    return quizData.reduce((score, question) => {
      const isCorrect = selectedAnswers[question.question] === question.correct_answer;
      return isCorrect ? score + 1 : score;
    }, 0);
  };

    // Function to handle canceling the quiz
const handleCancel=()=>{
  setTotalScore(0)
  setSelectedAnswers({})
  setQuizData([])
  setPosition('register')
}
 // Functions to handle Modal visibility
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

Explanation:

// State Variables:

// selectedAnswers: Keeps track of the user's selected answers for each quiz question.
// show: Manages the visibility of the cancel confirmation modal.
// Functions:

// handleOptionSelect: Updates the selectedAnswers state when a user selects an option for a quiz question.
// calculateScore: Calculates the total score based on the selected answers.
// handleFinish: Handles the process of finishing the quiz, calculating the score, and updating the position to 'result'.
// handleCancel: Handles the process of canceling the quiz, resetting state variables, and updating the position to 'register'.
// handleClose and handleShow: Functions to manage the visibility of the cancel confirmation modal.
// Rendering:

// Conditionally renders quiz questions and options if quizData is available.
// Displays an error message and a button to go back to the start if there is an issue with quiz data.
// Provides buttons for finishing the quiz and canceling the quiz.
// Modal:

// Utilizes the Bootstrap Modal component to confirm the cancellation of the quiz.

  return (
    <div  className='' style={{ overflowY: "auto", height: "75vh", scrollbarWidth: 'none !important',overflowX: 'hidden', }} >
      {
        quizData?
        <>
          {
            quizData?.map((question, index)=>{
                return<div className='row'>
                    <QuizCard 
                    key={index}
                    question={question.question}
                    options={[...question.incorrect_answers, question.correct_answer]}
                    onOptionSelect={selectedOption => handleOptionSelect(question.question, selectedOption)}
                     />
                </div>
            })
          }
          <div className='d-flex align-items-center justify-content-center pt-5' >
          <button className='btn btn-success' onClick={()=>handleFinish()}>Finish</button>&nbsp;&nbsp;&nbsp;&nbsp;
          <button className='btn btn-danger' onClick={()=>handleShow()}>Cancel</button>
         </div>
        </>
        :
        <>
        <div className='d-flex justify-content-center align-items-center'>
             <h3>Something went wrong!!</h3>
             <button className='btn btn-warning mt-3' onClick={()=>setPosition("register")}>Back Start</button>
        </div>
        </>
      }
      {/* Modal for confirming quiz cancellation */}
        <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Cancel Quiz</Modal.Title>
        </Modal.Header>
        <Modal.Body>Do you want to cancel quiz !</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={()=>handleCancel()}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
