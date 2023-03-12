import React, {useState, useEffect} from 'react'
import './SignUp.css'
import { Link, useNavigate } from "react-router-dom";
import Logo from './logo-google.png'
import { auth } from "../Firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useAuth } from '../contexts/AuthContext';
import Fitness from './logo-fitness.svg'
export default function SignUp() {

    const {signup, signInWithGoogle}  = useAuth();
    const [load, setLoad] =  useState(false)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [err, setErr] = useState('');

    const [user, loading, error] = useAuthState(auth);
    const [valid, setValid] = useState(true)
    const navigate=useNavigate();

    function containsLetters(str) {
        return /[a-zA-Z]/.test(str)
    }
    function containsNumber(str) {
        return /[0-9]/.test(str)
    }

    function containsSym(str) {
        return  /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(str)
    }
    const register = async () => {
        if (!name) alert("Please enter name");
        if (!containsNumber(password) || !containsLetters(password) || !containsSym(password) || password.length < 8){
            setValid(false)
            return setErr('Password is too weak or invalid')   
        }

        try {
            setLoad(true)
            await signup(name, email, password)

        }catch(e) {
            alert(e)
        }
        setLoad(false)
        
    };
    useEffect(() => {
        if (loading) return;
        if (user) setTimeout(function() {
            navigate("/dashboard", {replace:true});
        },800)
    }, [user, loading]);
  return (
    
    <div className='wrapper'>
        
        <div className="container-card">
            
            <div className="container left sign-up">
                
            </div>
            <div className="container right">
                <div className="logo">
                    <Link to="/"><img src={Fitness} alt="" /></Link>
                </div>
                <div className="sign-up-container">
                    <div className="sign-up-content">
                        <h1>Sign Up</h1>
                        <div className="error" style={err === '' ? {display: "none"} : {display: "block"}}>{err}</div>
                        <div className="sign-up-form">
                            <div>
                                <span className="email">Full Name</span>
                                <input required type="text" placeholder='Enter your name' value={name} onChange={(e)=> setName(e.target.value)}/>
                                <span className="email">Email</span>
                                <input required type="email" placeholder='Enter your email' value={email} onChange={(e)=> setEmail(e.target.value)}/>
                                <span className="password">Password</span>
                                <input required pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}$" type="password" placeholder='Enter your password' value={password} onChange={(e)=> setPassword(e.target.value)}/>
                                <div className="password-validation" style={valid === true ? {display: "none"} : {display: "block"}}>
                                    <div className="Letter"style={containsLetters(password) ? {color: "green"} : {color: "red"}}>Must contain at least one letter</div>
                                    <div className="Number"style={containsNumber(password) ? {color: "green"} : {color: "red"}}>Must contain at least one number</div>
                                    <div className="Special"style={containsSym(password) ? {color: "green"} : {color: "red"}}>Must contain at least one special character</div>
                                    <div className="Length"style={password.length >= 8 ? {color: "green"} : {color: "red"}}>Minimum length of 8 characters</div>
                                </div>
                                <button disabled={load} type='submit' onClick={register}>Sign Up</button>
                            </div>
                            <div className="or">
                                <small>or</small>
                            </div>
                            <div className="btn" onClick={signInWithGoogle}>
                                <div className="google-logo">
                                    <img src={Logo} alt="" />
                                </div>
                                <span>Sign up with Google</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="log-in">
                    <span>Already have an account? <span><Link className='to-log-in' to='/login'>Login</Link></span> </span>
                </div>
            </div>
        </div>
        
    </div>
  )
}
