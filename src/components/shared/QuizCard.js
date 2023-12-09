import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export default function QuizCard({ question, options, onOptionSelect }) {
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
          <div>
          <h3 dangerouslySetInnerHTML={{ __html: question }} />
          <Row className="mb-3 mt-3">
              {options.map((option, index) => (
                <Col key={index} md={6} className="mb-3 mt-3 form-check ps-5">
                  <label className="form-check-label">
                    <input
                    className='form-check-input'
                      type="radio"
                      name={question}
                      value={option}
                      onChange={() => onOptionSelect(question, option)}
                    />&nbsp;&nbsp;
                    <span dangerouslySetInnerHTML={{ __html: option }}></span>
                  </label>
                </Col>
              ))}
            </Row>
  </div>

          </Card.Body>
      </Card>
    </div>
  )
}

