import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export default function QuizCard({ question, options, onOptionSelect }) {
    const [isHovered, setIsHovered] = useState(false);
//     Explanation:

// State Initialization:

// isHovered: A state variable to track whether the card is being hovered over.

// Functional Component:

// QuizCard is a functional component that takes props as its parameters (question, options, onOptionSelect).

// Card Styling:

// The component uses the Card component from react-bootstrap for styling.
// The appearance is adjusted based on whether the card is being hovered over or not.

// Mouse Events:

// The onMouseEnter and onMouseLeave events are used to handle changes in the isHovered state.

// Rendering:

// The component renders the question using dangerouslySetInnerHTML to handle HTML content.
// It maps through the options and renders radio buttons for each option.
// Each radio button triggers the onOptionSelect function when selected.

// Styling and Layout:

// Styling is applied to the card to provide a visual effect when hovered over.
// The layout is structured using Row and Col components from react-bootstrap.
// This component represents a card in a quiz, displaying a question and multiple options with radio buttons. It uses react-bootstrap for styling and layout. The dangerouslySetInnerHTML is used for rendering HTML content within the question and options. The onOptionSelect function is called when a user selects an option.
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

