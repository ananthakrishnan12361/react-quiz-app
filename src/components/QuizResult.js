import React from 'react'
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
export default function QuizResult({quizData,totalScore}) {
    const { width, height } = useWindowSize()

//     Explanation:

// Import Statements:

// useWindowSize and Confetti are imported from their respective packages.

// Functional Component:

// QuizResult is a functional component that takes props as its parameters (quizData and totalScore).
// Window Size Hook:

// The useWindowSize hook is used to get the width and height of the window.
// Confetti Component:

// The Confetti component is used to create a celebratory confetti effect on the screen when displaying quiz results.
// Rendering:

// The component returns a div with a scrollable style, limiting the maximum height.
// The Confetti component is rendered for a celebratory effect.
// The total score is displayed in the center.
// Quiz data is mapped through to display each question and its correct answer.
// dangerouslySetInnerHTML is used to handle HTML content within the questions and answers.
// Mapping Quiz Data:

// The quizData array is mapped, and for each element, a div is created to display the question and its correct answer.
// This component represents the result screen of the quiz, showing the total score, a celebratory confetti effect, and a list of questions with their correct answers. The use of dangerouslySetInnerHTML suggests that the questions and answers may contain HTML content.

  return (
    <div className='' style={{ overflowY: 'scroll', maxHeight: '75vh', overflowX:"hidden"}}>
      {/* Confetti component for a celebratory effect */}
<Confetti
      width={width}
      height={height}
      tweenDuration={10000}
    />
    <div  style={{alignItems:"center",justifyContent:"center"}}>
      {/* Displaying the total score */}
    <h1>{totalScore}/{quizData.length}</h1>
    </div>
{/* Mapping through quizData to display each question and correct answer */}
    {
        quizData?.map((e,index)=>{
            return <div className='row pt-2'>
            <div className='col-12 pt-2'>
               {/* Displaying the question using dangerouslySetInnerHTML to handle HTML content */}
            <h5 dangerouslySetInnerHTML={{ __html: `${index + 1}. ${e.question}` }} /> </div>
            <div className='col-12 pt-2'>&nbsp;&nbsp;&nbsp;
            {/* Displaying the correct answer using dangerouslySetInnerHTML to handle HTML content */}
            <b dangerouslySetInnerHTML={{ __html:e.correct_answer }}></b> </div>        
       </div>
        })
    }


    </div>
  )
}
