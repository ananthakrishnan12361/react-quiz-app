import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
export default function QuizCard({question,correct_answer,incorrect_answers,type,setTotalScore,totalScore}) {
    const [isHovered, setIsHovered] = useState(false);
  return (
    <div className='pt-2 pb-2'>
              <Card
        style={{
            minHeight: "10vh",
            minWidth: "45vw",
          boxShadow: isHovered ? '0px 0px 20px rgba(0, 0, 0, 0.3)' : '0px 0px 10px rgba(0, 0, 0, 0.2)',
          transition: 'box-shadow 0.3s ease-in-out',

        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
          <Card.Body style={{}}>

          </Card.Body>
      </Card>
    </div>
  )
}

