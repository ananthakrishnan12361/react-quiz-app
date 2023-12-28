import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function FormFloatingSelect({id,lable,value,setState,dataList}) {

//   Explanation:

// Import Statements:

// FloatingLabel and Form are imported from react-bootstrap.
// Functional Component:

// FormFloatingSelect is a functional component that takes props as its parameters (id, label, value, setState, dataList).

// Props:

// id: An optional prop for the control ID.
// label: An optional prop for the label text.
// value: The value for the select input, typically controlled by state.
// setState: A function to update the state based on user selection.
// dataList: An array of objects representing the options for the select input. Each object should have a value and a label.

// FloatingLabel Component:

// The FloatingLabel component from react-bootstrap is used to create a floating label for the form control. It takes the controlId and label as props.

// Form.Select Component:

// The Form.Select component from react-bootstrap is used for the select input. It has various props such as aria-label, value, and onChange.
// The value prop is controlled by the value prop passed to the component.
// The onChange handler updates the state using the setState function provided as a prop.

// Option Rendering:

// The dataList array is mapped, and for each element, an <option> element is created with the value and label from the object.

// Rendering:

// The component returns the FloatingLabel component containing the Form.Select input.
  return (
    <FloatingLabel controlId="floatingSelect" className="mb-3" label={lable?lable:""}>
      <Form.Select aria-label="Floating label select example" value={value} onChange={(e)=>setState(e.target.value)}>
      {
        dataList?.map((e)=>{
          return  <option value={e.value}>{e.label}</option>
        })
      } 
      </Form.Select>
    </FloatingLabel>
  );
}

export default FormFloatingSelect;