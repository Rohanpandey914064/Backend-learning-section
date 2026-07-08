import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    const [formDB,setFormDB] = useState({
        email:"",
        password:"",
    });

    const handleChange = (e)=>{
      setFormDB({
        ...formDB,
        [e.target.name]: e.target.value,
      });
    }

    const handleSubmit = (e)=>{
      e.preventDefault();

      console.log("all ok my brother");
      navigate('/home');
    }
    
  return (
    <div className='container'>
      <form onSubmit={handleSubmit} className='box'>
        <h2>login</h2>
        <input 
          type="gmail" 
          name='gmail'
          placeholder='Enter Email'
          value={formDB.email}
          onChange={handleChange}
        />


        <input 
          type="password" 
          name='password'
          placeholder='Enter password'
          value={formDB.password}
          onChange={handleChange}
        />

        <button type='submit'>Login</button>

        <p>
          Don't have an account?
          <Link to='/signup'>Signup</Link>
        </p>
      </form>
    </div>
  )
}

export default Login