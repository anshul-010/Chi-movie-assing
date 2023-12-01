import React, { useContext, useState } from 'react'
import SignUp from './SignUp'
import "../styles/Login.css";




const Login = () => {
    const [isLogin,setIsLogin] = useState(true)
    

    function handleSubmit(e){
        e.preventDefault()
        
    }

  return (
    <div  >
       {isLogin?<div className='formPage'>
        <form onSubmit={handleSubmit} className='form' >
            <h1>Log in</h1>
            <input type="email" placeholder='email'  name='email'  />
            <br />
            <input type="password" placeholder='password'  name='password'  />
            <br />
            <input type="submit" className='submit' value="log in" />
        </form>
       </div>:<SignUp/>}
        <br />
        <button className='bottom-btn' onClick={()=>setIsLogin(!isLogin)} >{isLogin?"Register here":"I have a account."}</button>
    </div>
  )
}

export default Login