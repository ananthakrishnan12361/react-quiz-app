import React, { useState } from 'react'
import FormFloatingInput from './shared/InputBox';
import FormFloatingSelect from './shared/SelectBox';
import { CategoryList, DifficultyList, TypeList } from '../const/SelectBoxData';
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

//   Explanation:

// Import Statements:

// FormFloatingInput and FormFloatingSelect are imported from other components.
// CategoryList, DifficultyList, and TypeList are imported from a constants file.
// Toasters is imported from a shared component for displaying toasts.

// Functional Component:

// QuizForm is a functional component that takes props as its parameters (url, setUrl, setTimerStatus, timerStatus, getQustions).

// State Initialization:

// State variables are initialized using the useState hook for the number of questions, category, difficulty, and type.

// Form Elements:

// FormFloatingInput and FormFloatingSelect components are used to create input fields for the number of questions, category, difficulty, and type.
// Each input field is controlled by its corresponding state variable.

// OnSubmit Function:

// The onSubmit function is triggered when the "Start Quiz" button is clicked.
// It performs validation for the number of questions and constructs the API URL based on user selections.
// The API URL is then set using the setUrl function, and the getQustions function is called with the API URL.

// Rendering:

// The component returns a set of form elements for user input, and a button to start the quiz.

  return (
    <div>
      {/* Input for Number of Questions */}
       <FormFloatingInput id={1} lable={"Number of Questions:"} value={numberOfQuestions} setState={setNumberOfQuestions} type={"number"}  />

       {/* Select input for Category */}
       <FormFloatingSelect id={2} lable={"Select Category:"} value={category} setState={setCategory} dataList={CategoryList}   />

       {/* Select input for Difficulty Level */}
       <FormFloatingSelect id={3} lable={"Select Difficulty Level:"} value={difficulty} setState={setDifficulty} dataList={DifficultyList}   />

       {/* Select input for Type of Questions */}
       <FormFloatingSelect id={4} lable={"Select Type Questions:"} value={type} setState={setType} dataList={TypeList}   />

       {/* Button to start the quiz */}
       <div className='d-flex align-items-center justify-content-center pt-5' > 
       <button className='btn btn-info' onClick={()=>onSubmit()}>Start Quiz </button>
       </div>
    </div>
  )
}
