import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'

const SignUp = () => {
  const navigate = useNavigate();

  const [formDB,setFormDB] = useState({
    name:"",
    gmail:"",
    password:""
  });

  const handleChange = (e)=>{
    setFormDB({
      ...formDB,
      [e.target.name]:e.target.value,
    });
  };

  const handleSubmit = (e)=>{
    e.preventDefault();

    navigate('/home');
  }

  return (
    <div className='container'>
      <form onSubmit={handleSubmit} className='box'>
        <h2>signup</h2>

        <input 
          type="text"
          name='name'
          placeholder='Enter your name'
          value={formDB.name}
          onChange={handleChange} 
        />

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

        <button type='submit'>SignUp</button>

        <p>
          Already have an account?
          <Link to='/'>Login</Link>
        </p>
      </form>
    </div>
  )
}

export default SignUp