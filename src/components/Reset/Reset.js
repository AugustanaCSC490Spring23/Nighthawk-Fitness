import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { auth } from "../Firebase/firebase";
import "./reset.css";
import Fitness from "../SignUp/fitness-logo.svg"
function Reset() {
    const {resetPassword}  =  useAuth()
    const [email, setEmail] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const [notice, setNotice] = useState(false);
    const [err, setErr] = useState('');

    const navigate = useNavigate();

    const handleReset = async () => {
        try {
            setErr('')
            setNotice(false)
            await resetPassword(email)
            setNotice(true)
            setTimeout(() => {
                navigate('/login')
            },4000)
        }catch {
            setErr('Failed to send reset link')
        }
        
    }

    

    useEffect(() => {
        if (loading) return;
        if (user) navigate("/dashboard");
    }, [user, loading]);

    return (
        <div>
            <div className="logo">
                <Link to="/"><img src={Fitness} alt="" /></Link>
            </div>
            <div className="container-card">
                <div className="container">
                    <div className="sign-up-container">
                        <div className="sign-up-content">
                            <h1>Password Reset</h1>
                            <div className="prompt">Dont' worry, happens to the best of us.</div>
                            <div className="notice-alert error" style={notice ? {display:"block"}: {display:"none"}}>An email has been sent</div>
                            <div className="error" style={err === '' ? {display: "none"} : {display: "block"}}>{err}</div>
                            <div className="sign-up-form">
                                <div>
                                    <span className="email" style={notice ? {display:"none"}: {display:"block"}}>Email</span>
                                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter your email' style={notice ? {display:"none"}: {display:"block"}}/>
                            
                                    <button onClick={handleReset} type='submit' style={notice ? {display:"none"}: {display:"block"}} >Send reset email</button>
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
    );
}
export default Reset;