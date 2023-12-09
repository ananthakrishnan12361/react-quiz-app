import React from 'react'
import QuizCard from './shared/QuizCard'

export default function QuizTest({quizData,setTotalScore,totalScore,setPosition}) {

  return (
    <div  className='' style={{ overflowY: "auto", height: "75vh", scrollbarWidth: 'none !important',overflowX: 'hidden', }} >
      {
        quizData?
        <>
          {
            quizData?.map((e,index)=>{
                return<div className='row'>
                    <QuizCard key={index+"QuizCardKey"}  id={index+"QuizCard"}  />
                </div>
            })
          }
          <button className='btn btn-success'>Finish</button>
        </>
        :
        <>
        <div className='d-flex justify-content-center align-items-center'>
             <h3>Something went wrong!!</h3>
             <button className='btn btn-warning mt-3' onClick={()=>setPosition("register")}>Back Start</button>
        </div>
        </>
      }
    </div>
  )
}
