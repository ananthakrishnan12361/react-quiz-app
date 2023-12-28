import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function FormFloatingInput({id,lable,value,setState,type,placeholder}) {
//   Import Statements:

// FloatingLabel: Imported from react-bootstrap, it provides a floating label for form controls.
// Form: Also imported from react-bootstrap, it is used to create form controls and structure.

// Functional Component:

// FormFloatingInput is a functional component that takes props as its parameters.

// Props:

// id: An optional prop for the control ID. If not provided, an empty string is used.
// label: An optional prop for the label text. If not provided, an empty string is used.
// value: The value for the input, typically controlled by state.
// setState: A function to update the state based on user input.
// type: The type of the input, defaulting to "text" if not provided.
// placeholder: The placeholder text for the input, defaulting to an empty string if not provided.

// FloatingLabel Component:

// The FloatingLabel component from react-bootstrap is used to create a floating label for the form control. It takes the controlId and label as props.

// Form.Control Component:

// The Form.Control component from react-bootstrap is used for the form input. It has various props such as type, placeholder, value, and onChange.
// The type prop determines the input type (defaulting to "text").
// The placeholder prop provides placeholder text for the input.
// The value prop is controlled by the value prop passed to the component.
// The onChange handler updates the state using the setState function provided as a prop.
// Rendering:

// The component returns the FloatingLabel component containing the Form.Control input.
  return (
    <>
      <FloatingLabel
        controlId={id?id:""}
        label={lable?lable:""}
        className="mb-3"
      >
        <Form.Control type={type?type:"text"} placeholder={placeholder?placeholder:""} value={value} onChange={(e)=>setState(e.target.value)}  />
      </FloatingLabel>
    </>
  );
}

export default FormFloatingInput;