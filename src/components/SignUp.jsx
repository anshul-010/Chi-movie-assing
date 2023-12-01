import React, { useState } from 'react'
import "../styles/Login.css";


const SignUp = () => {
    

  return (
    <div className='formPage'>
        <form className='form' >
            <h1>Sign up</h1>
            <input type="email" placeholder='email'   name='email'  />
            <br />
            <input type="number" placeholder='mobile no.'  name='mobile_no'  />
            <br />
            <input type="password" placeholder='password'  name='password'  />
            <br />
            <input type="submit" className='submit'value="Sign up"/>
        </form>
    </div>
  )
}

export default SignUp