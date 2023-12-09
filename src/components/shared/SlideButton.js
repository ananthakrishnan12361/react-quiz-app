import Form from 'react-bootstrap/Form';

function SlideButton({id,label,value,setValue,disabled}) {
  return (
    <Form>
      <Form.Check // prettier-ignore
      className='mb-3'
        type="switch"
        id={id?id:""}
        label={label?label:""}
        disabled={disabled?disabled:false}
        value={value}
        onChange={(e)=>setValue(!value)}
      />
    </Form>
  );
}

export default SlideButton;