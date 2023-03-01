
import './LogIn.css'
import Logo from './logo-google.png'
import React, { useEffect, useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { auth } from "../Firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useAuth } from '../contexts/AuthContext';
import  Fitness from '../SignUp/fitness-logo.svg'
export default function LogIn() {

    const {login, signInWithGoogle}  =  useAuth();  
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const [err, setErr] = useState('')
    const navigate = useNavigate();


    async function handleLogIn() {
        try {
            setErr('')
            await login(email, password)
            
        }catch {
            setErr('Your email or password is incorrect')
            
        }
    }

    useEffect(() => {
        if (loading) {
          // maybe trigger a loading screen
          return;
        }
        if (user) setTimeout(function() {
            navigate("/dashboard");
        },400) 
    }, [user, loading]);
    
    return (
        
        <div className='wrapper'>
            <div className="logo">
                <Link to="/"><img src={Fitness} alt="" /></Link>
            </div>
            <div className="container-card">
                <div className="container">
                    <div className="sign-up-container">
                        <div className="sign-up-content">
                            <h1>Welcome Back</h1>
                            <div className="error" style={err === '' ? {display: "none"} : {display: "block"}} >{err}</div>
                            <div className="sign-up-form">
                                <div>
                                    <span className="email">Email</span>
                                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter your email' />
                                    <span className="email">Password</span>
                                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter your password' />
                                    <button onClick={handleLogIn} type='submit'>Login</button>
                                </div>
                                <div className="forget-password">
                                    <span><Link className='forget' to='/reset'>forgot password?</Link></span> 
                                </div>
                                <div className="btn" onClick={signInWithGoogle}>
                                    <div className="google-logo">
                                        <img src={Logo} alt="" />
                                    </div>
                                    <span>Login with Google</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="log-in">
                        <span>Don't have an account? <span><Link className='to-sign-up' to='/signup'>Create now</Link></span> </span>
                    </div>
                </div>
                {/* <div className="container right"></div> */}
            </div>
            
        </div>
    )
}
