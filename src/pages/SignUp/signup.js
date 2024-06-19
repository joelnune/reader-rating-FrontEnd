import React from 'react';
import { useState } from 'react';
import './signup.css'
import Background from '../../img/signup-background.jpeg'
import Logo from '../../img/logo.png'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  
const [values, setValues] = useState(
  {userEmail:"",userName:"", passwd:""}
);

const navigate = useNavigate()

const handleSubmit = async (e)=> {
  e.preventDefault()
  
  try {
   const response = await axios.post(`http://${process.env.REACT_APP_URL}:${process.env.REACT_APP_PORT}/user/signup`, values)
   if(response.data.auth = true){
    localStorage.setItem('token', JSON.stringify(response.data.token))
    navigate('/login')
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
        
        <div className='left-box-signup'>
      
        </div>

        <div className='login-box'>
          <div className='logo-container'>
            <h1>Reader Rating</h1>
            <img src={Logo} className='logo'/>
          </div>
          <div className="title-container">  
          <h2>Create your account</h2>
            
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
              <Form.Group className="mb-3" controlId=''>
                  <Form.Label>Username</Form.Label>
                  <Form.Control type="text" placeholder="Enter your username" className="formControl" value={values.userName} onChange={(e) => setValues({...values,userName: e.target.value})} />
    
              </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" className="formControl"  value={values.passwd} onChange={(e) => setValues({...values,passwd: e.target.value})} />
                  <Form.Text id="passwordHelpBlock" muted>
                  Your password must be 8-20 characters long, contain letters and numbers.
                  </Form.Text>
  
                </Form.Group>
              
              <div className='button-container'>
              <Button variant="outline-secondary" type="submit" className='buttonSubmit'>
                <img src="https://cdn-icons-png.flaticon.com/512/154/154346.png"/> 
              </Button>
              </div>
            </Form>
          </div>
          <div className='login'> 
          <p onClick={ ()=>navigate('/login')} > Already have an account? <ins> Sign In </ins></p>
          </div>
        </div>

      </div>
    </div>
  );
}
export default SignUp

