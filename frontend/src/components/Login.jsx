import React, { useState } from 'react'
import '../styles/Login.css'
import { Link } from 'react-router-dom'

const Login = () => {

    const [showTab, setShowTab] = useState(false);

    
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
                                <h4 onClick={() => setShowTab(!showTab)}>Forgot password? Click here</h4>
                            </div>
                            { showTab && (
                                <>
                                <div>
                                    <label>Please enter valid email</label>
                                    <input type='email' placeholder='Enter Email' required/>
                                </div>
                                <div>
                                    <button type='submit'>Send Reset Link</button>
                                </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login