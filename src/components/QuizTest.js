import React, { useState } from 'react'
import QuizCard from './shared/QuizCard'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
export default function QuizTest({quizData,setTotalScore,setPosition,setQuizData}) {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [show, setShow] = useState(false);
  const handleOptionSelect = (questionId, selectedOption) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionId]: selectedOption,
    });
  };

  const handleFinish =async () => {
    const score =await calculateScore();
    setTotalScore(score);
    setPosition('result')
  };

  const calculateScore = () => {
    return quizData.reduce((score, question) => {
      const isCorrect = selectedAnswers[question.question] === question.correct_answer;
      return isCorrect ? score + 1 : score;
    }, 0);
  };
const handleCancel=()=>{
  setTotalScore(0)
  setSelectedAnswers({})
  setQuizData([])
  setPosition('register')
}
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
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
