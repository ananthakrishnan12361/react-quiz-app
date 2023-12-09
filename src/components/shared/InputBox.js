import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function FormFloatingInput({id,lable,value,setState,type,placeholder}) {
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