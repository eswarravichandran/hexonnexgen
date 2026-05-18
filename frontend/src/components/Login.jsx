import React from 'react'
import '../styles/Login.css'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
        <div className='login'>
            <div className='login-card'>
                <div>
                    <h2>Please login to access</h2>
                    <div className='login-form'>
                        <div>
                            <label>Email</label>
                            <input type='email' placeholder='Enter Email' required/>
                        </div>
                        <div>
                            <label>Password</label>
                            <input type='password' placeholder='Enter Password' required/>
                        </div>
                        <div>
                            <button type='submit'>Login</button>
                            <Link to='/'>Forgot password? Click here</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Login