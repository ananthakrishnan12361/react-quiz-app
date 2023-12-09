import React, { useState } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import QuizForm from '../components/QuizForm'
import Card from 'react-bootstrap/Card';
import { Toasters } from '../components/shared/Tosters';
import axios from 'axios';
import QuizTest from '../components/QuizTest';
import QuizResult from '../components/QuizResult';
export default function HomePage() {
  const [isHovered, setIsHovered] = useState(false);
  const [url, setUrl] = useState("")
  const [loading, setLoading] = useState(false)
  const [quizData, setQuizData] = useState([])
  const [totalScore, setTotalScore] = useState(0)
  const [position, setPosition] = useState("register")
  const getQustions=async (apiUrl)=>{
    console.log(apiUrl)
    setUrl(apiUrl)
    setLoading(true)
    try {
         const respons=await axios.get(apiUrl) 
         console.log(respons.data.results)    
         setQuizData(respons.data.results)
         setPosition("test")
         setLoading(false)
    } catch (error) {
      Toasters({ message: "Something went wrong try again after some time", type: "error" });
      setLoading(false)
    }
  }
  
  return (
    <div className='d-flex align-items-center justify-content-center' style={{ paddingTop: "30px" }}>
      <Card
        style={{
          height: '90vh',
          width: "100%",
          boxShadow: isHovered ? '0px 0px 20px rgba(0, 0, 0, 0.3)' : '0px 0px 10px rgba(0, 0, 0, 0.2)',
          transition: 'box-shadow 0.3s ease-in-out',

        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Card.Body>
        <div className='d-flex justify-content-center pb-3' ><h1>TriviaPulse</h1></div>
          {
            loading?
            <>
            <div className='d-flex justify-content-center align-items-center ' style={{height:"90%"}} >
            <span className="loader"></span>
            </div>

            </>
            :
            <>
            {
              position==="test"?
              <>
              <QuizTest quizData={quizData} setTotalScore={setTotalScore} totalScore={totalScore} setPosition={setPosition} setQuizData={setQuizData}/>
              </>
              :
              position==="result"?
              <>
              <QuizResult quizData={quizData} totalScore={totalScore}/>
              </>
              :
              <>
              <QuizForm setUrl={setUrl} url={url} getQustions={getQustions}   />
              </>
            }

            </>
          }
        </Card.Body>
      </Card>
    </div>
  )
}
