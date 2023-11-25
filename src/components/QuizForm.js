import React from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import { useSpring, animated } from 'react-spring';

const QuizForm = () => {
  const shadowAnimation = useSpring({
    boxShadow: '0px 0px 15px 0px rgba(0,0,0,0.1)',
    from: { boxShadow: '0px 0px 0px 0px rgba(0,0,0,0)' },
  });

  return (
    <animated.div style={shadowAnimation}>
      <Card>
        <Card.Body>
          <Form>
            <Form.Group controlId="numberOfQuestions">
              <Form.Label>Number of Questions:</Form.Label>
              <Form.Control
                type="number"
                min="5"
                placeholder="Enter number of questions"
                required
              />
              <Form.Text className="text-muted">
                Please enter a number greater than or equal to 5.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="selectCategory">
              <Form.Label>Select Category:</Form.Label>
              <Form.Control as="select" required>
                <option value="any">Any Category</option>
                {/* Add all the category options here */}
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="selectDifficulty">
              <Form.Label>Select Difficulty:</Form.Label>
              <Form.Control as="select" required>
                <option value="any">Any Difficulty</option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="selectType">
              <Form.Label>Select Type:</Form.Label>
              <Form.Control as="select" required>
                <option value="any">Any Type</option>
                <option value="multiple">Multiple Choice</option>
                <option value="boolean">True / False</option>
              </Form.Control>
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </animated.div>
  );
};

export default QuizForm;
