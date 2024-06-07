import React from 'react';
import { useState } from 'react';
import './login.css'
import Logo from '../../img/logo.png'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  

const [values, setValues] = useState(
  {userEmail:"", passwd:""}
);

const navigate = useNavigate()

const handleSubmit = async (e)=> {
  e.preventDefault()
  try {
   const response = await axios.post(`http://${process.env.REACT_APP_URL}:${process.env.REACT_APP_PORT}/user/login`, values)
   if(response.data.auth = true){
    navigate('/')
   }
   else{
    alert("WRONG EMAIL OR PASSWORD")
   }
  
  } catch (error) {
    console.log(error)  
  }
}

  
  return (
    <div className="background">
      <div className='main-container'>
        
        <div className='left-box'>
      
        </div>

        <div className='login-box'>
          <div className='logo-container'>
            <h1>Reader Rating</h1>
            <img src={Logo} className='logo'/>
          </div>
          <div className="title-container">  
            <h2>Welcome</h2>
            <h3>Sign in to your account</h3>
          </div>
          
          <div className='container-form'>
            <Form type="form" className='form' onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" className="formControl" value={values.userEmail} onChange={(e) => setValues({...values,userEmail: e.target.value})} />
                  <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                  </Form.Text>
              </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" className="formControl"  value={values.passwd} onChange={(e) => setValues({...values,passwd: e.target.value})} />
                </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <div className='button-container'>
              <Button variant="outline-secondary" type="submit" className='buttonSubmit'>
                <img src="https://cdn-icons-png.flaticon.com/512/154/154346.png"/> 
              </Button>
              </div>
            </Form>
          </div>
        </div>

      </div>
    </div>
  );
}
export default Login

