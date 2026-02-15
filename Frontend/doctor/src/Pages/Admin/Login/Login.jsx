import React from 'react'
import { useForm } from 'react-hook-form'
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css'
const Login = () => {
  const navigate=useNavigate();
 
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting }
  } = useForm();
    const Mysubmit=async(data)=>{
      await new Promise((resolve, reject) => {
        setTimeout(async() => {
          try {
            const response=await axios.post('/api/login',data);
            console.log(response.data);
            resolve("Success")
            navigate('/')
          } catch (error) {
            console.log(error.response.data.message);
            
          }
        }, 3000);
      })
      reset();
    }
  return (
    <div className='login'>
    <h4>Login</h4>
    <form onSubmit={handleSubmit(Mysubmit)}>
      <label>Email</label>
      <input type="email" placeholder='Email'{...register('Email')} />
      <label>Password</label>
      <input type='password' placeholder='Password' {...register('Password')} />
      <input type="submit" value={isSubmitting?"Loging....":"Login"} />
    </form>
     <NavLink to='/signup'>Create Account</NavLink>
    </div>
  )
}

export default Login
