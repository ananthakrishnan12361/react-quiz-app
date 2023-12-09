import React, { useState } from 'react'
import FormFloatingInput from './shared/InputBox';
import FormFloatingSelect from './shared/SelectBox';
import { CategoryList, DifficultyList, TypeList } from '../const/SelectBoxData';
import SlideButton from './shared/SlideButton';
import { Toasters } from './shared/Tosters';

export default function QuizForm({url,setUrl,setTimerStatus,timerStatus,getQustions}) {
  const [numberOfQuestions, setNumberOfQuestions] = useState(10)
  const [category, setCategory] = useState("")
  const [difficulty, setDifficulty] = useState("")
  const [type, setType] = useState("")
  const onSubmit=()=>{
    if (!numberOfQuestions||numberOfQuestions==="0"||numberOfQuestions===0) {
      Toasters({ message: "Enter Number of Questions", type: "warning" });
      return
    }
    const apiUrl = `https://opentdb.com/api.php?amount=${numberOfQuestions}${category ? `&category=${category}` : ''}${difficulty ? `&difficulty=${difficulty}` : ''}${type ? `&type=${type}` : ''}`;

    setUrl(apiUrl)
    getQustions(apiUrl)
  }

  return (
    <div>
       <FormFloatingInput id={1} lable={"Number of Questions:"} value={numberOfQuestions} setState={setNumberOfQuestions} type={"number"}  />
       <FormFloatingSelect id={2} lable={"Select Category:"} value={category} setState={setCategory} dataList={CategoryList}   />
       <FormFloatingSelect id={3} lable={"Select Difficulty Level:"} value={difficulty} setState={setDifficulty} dataList={DifficultyList}   />
       <FormFloatingSelect id={4} lable={"Select Type Questions:"} value={type} setState={setType} dataList={TypeList}   />
       <SlideButton id={5} lable={"Do you need timer"} value={timerStatus} setValue={setTimerStatus} />
       <div className='d-flex align-items-center justify-content-center pt-5' > 
       <button className='btn btn-info' onClick={()=>onSubmit()}>Start Quiz </button>
       </div>
    </div>
  )
}
