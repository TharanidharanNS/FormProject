//import logo from './logo.svg';
import React, { useState } from 'react';
import {useFormik} from 'formik';
import './App.css';
import PopUp from './components/PopUp';
const validate = values =>{
  const errors = {}
  if(!values.firstname){
    errors.firstname = 'Required'
  }
  else if(values.firstname.length>12){
    errors.firstname = 'Must be less than 12'
  }
  if(!values.lastname){
    errors.lastname = 'Required'
  }
  else if(values.lastname.length>12){
    errors.lastname = 'Must be less than 12'
  }
  if(!values.email){
    errors.email = 'Required'
  }
  else if(!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(values.email)){
    errors.email = 'Invalid mail address'
  }
  if(!values.password){
    errors.password = 'Required'
  }
  else if(values.password.length<8){
    errors.password = 'Must be greater than 8'
  }
  else if(!/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(values.password)){
    errors.password = 'Password must contain alphabets,num and special char'
  }
  if(values.password!==values.confirmpassword){
    errors.confirmpassword = 'password must be same'
  }
  return errors;
}
function App() {
  const [show, setshow] = useState(false);
const Form = useFormik({
  initialValues : {
    firstname : '',
    lastname : '',
    email : '',
    password : '',
    confirmpassword : '',
  },
  validate,
  onSubmit : (values,{resetForm}) =>{
   if(show){
    setshow(false);
    resetForm({values:""});
   }
   else{
    setshow(true);
   }
  }
});

  return (
    <div>
      <div className='signup'>
        <h2>sign up here</h2>
        <form onSubmit={Form.handleSubmit}>
          <input type="text" placeholder="FirstName" name='firstname' onChange={Form.handleChange} onBlur={Form.handleBlur} value ={Form.values.firstname}/>
          {
           Form.touched.firstname&& Form.errors.firstname ? <p>{Form.errors.firstname}</p> : null
          }
          <input type="text" placeholder="LastName" name='lastname' onChange={Form.handleChange} onBlur={Form.handleBlur} value ={Form.values.lastname}/>
          {
           Form.touched.lastname&& Form.errors.lastname ? <p>{Form.errors.lastname}</p> : null
          }
          <input type="email" placeholder="E-mail" name='email' onChange={Form.handleChange} onBlur={Form.handleBlur} value ={Form.values.email}/>
          {
           Form.touched.email&& Form.errors.email ? <p>{Form.errors.email}</p> : null
          }
          <input type="password" placeholder="Password" name='password' onChange={Form.handleChange} onBlur={Form.handleBlur} value ={Form.values.password}/>
          {
           Form.touched.password&& Form.errors.password ? <p>{Form.errors.password}</p> : null
          }
          <input type="password" placeholder="Confirm Password" name='confirmpassword' onChange={Form.handleChange} onBlur={Form.handleBlur} value ={Form.values.confirmpassword}/>
          {
           Form.touched.confirmpassword&&  Form.errors.confirmpassword ? <p>{Form.errors.confirmpassword}</p> : null
          }
          <button type='submit'>Submit</button>

        </form>
      </div>
      <div className='message'>
        {
          show ? (<PopUp onClick = {Form.handleSubmit}/>) : null
        }
      </div>
    </div>
  );
}

export default App;
