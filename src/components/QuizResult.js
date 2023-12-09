import React from 'react'
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
export default function QuizResult({quizData,totalScore}) {
    const { width, height } = useWindowSize()
  return (
    <div className='' style={{ overflowY: 'scroll', maxHeight: '75vh', overflowX:"hidden"}}>
<Confetti
      width={width}
      height={height}
      tweenDuration={10000}
    />
    <div  style={{alignItems:"center",justifyContent:"center"}}>
    <h1>{totalScore}/{quizData.length}</h1>
    </div>

    {
        quizData?.map((e,index)=>{
            return <div className='row pt-2'>
            <div className='col-12 pt-2'>
            <h5 dangerouslySetInnerHTML={{ __html: `${index + 1}. ${e.question}` }} /> </div>
            <div className='col-12 pt-2'>&nbsp;&nbsp;&nbsp;<b dangerouslySetInnerHTML={{ __html:e.correct_answer }}></b> </div>        
       </div>
        })
    }


    </div>
  )
}
