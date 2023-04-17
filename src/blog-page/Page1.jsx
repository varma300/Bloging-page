import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import { useContext, useRef } from "react";
import Context from "../context/CreateContext";
import { useNavigate, Link } from 'react-router-dom';
import Page2 from "./Page2";



function Input() {
      const inputRef = useRef([]) // take input from user

      const Data = useContext(Context) //context assigning to a variable
      const {value, setValue} = Data  // props values calling

      const Navigate = useNavigate();

      const handleSubmit = (event) =>{
        event.preventDefault();
        const values = inputRef.current.map(ref => ref.value);
        setValue(values);
        Navigate('Page2')
      }     //Submit function

  return (
    <div>
    <Form onSubmit={handleSubmit}>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1" >
          Title{" "}
        </InputGroup.Text>
        <Form.Control
          placeholder="Title"
          aria-label="Username"
          aria-describedby="basic-addon1"
          name="title"                    
         ref={el => inputRef.current[0] = el}
        />
      </InputGroup>

      <InputGroup>
        <InputGroup.Text>Content </InputGroup.Text>
        <Form.Control
          as="textarea"
          aria-label="With textarea"
          placeholder="Contenrt"
          name = 'content'            
          ref={el => inputRef.current[1] = el}
        />
        <Button 
        type="submit"
        variant="outline-success" 
        >
          Upload
        </Button>{" "}
      </InputGroup>
    </Form> 
    <Link to='page2'>Gallery</Link>
    </div>
  );
}

export default Input;
