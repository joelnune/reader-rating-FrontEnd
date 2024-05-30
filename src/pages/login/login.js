import React from 'react';
import { useNavigate } from "react-router-dom";
import './login.css'
import Person from '../../img/person.png'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
function Login() {
  
  let navigate = useNavigate(); 

  
  return (
    <div className="background">
      <div className='main-container'>
        
        <div className='left-box'>
          <img src={Person} className='image'/> 
        </div>
        <div className='login-box'>
          <div className="title-container"> 
            <h1>Welcome</h1>
            <h2>Sign in to your account</h2>
          </div>
          
          <div className='container-form'>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                  </Form.Text>
              </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="primary" type="submit">
              Submit
              </Button>
            </Form>
          </div>
        </div>

      </div>
    </div>
  );
}
export default Login

