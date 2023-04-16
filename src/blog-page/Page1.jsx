import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import { useContext, useRef, useState } from "react";
import Context from "../context/CreateContext";
import { useNavigate } from "react-router-dom";

function Input() {
  const [input, getInput] = useState( {
    title: '',
    content : ''
  })          // use state used for taking input from uset

  const [click , setClick] = useState('')
  

  const change = (e) => {
    const titleValue = e.target.name
    const contentValue = e.target.value
    getInput({...input, [titleValue]:contentValue})
  }   // onChange function

  console.log(input); // input consolling
  
  const handleClick = () => {
    setClick(input)
  }
  
  console.log(click); // input consolling
  return (
    <div>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1" >
          Title{" "}
        </InputGroup.Text>
        <Form.Control
          placeholder="Title"
          aria-label="Username"
          aria-describedby="basic-addon1"
          name="title"                    //for onchange
          value={input.title}             //for onchange
          onChange={change}
        />
      </InputGroup>

      <InputGroup>
        <InputGroup.Text>Content </InputGroup.Text>
        <Form.Control
          as="textarea"
          aria-label="With textarea"
          placeholder="Contenrt"
          name = 'content'            //for onchange
          value={input.content}       //for onchange
          onChange={change}
        />
        <Button 
        variant="outline-success" 
        onAbort={handleClick}
        >
          Upload
        </Button>{" "}
      </InputGroup>
    </div>
  );
}

export default Input;
