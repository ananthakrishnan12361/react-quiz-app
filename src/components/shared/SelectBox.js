import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function FormFloatingSelect({id,lable,value,setState,dataList}) {
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