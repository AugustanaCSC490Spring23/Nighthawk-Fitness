import React, { useEffect, useRef, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate} from "react-router-dom";
import './profile.css'
import { auth, db } from "../Firebase/firebase";
import { updateDoc, doc } from "firebase/firestore";
import { useAuth } from "../contexts/AuthContext";
import  Form from './form/Form'

function Profile() {
    const [userData, setUserData] = useState(() => {
        const savedUserData = localStorage.getItem('userData');
        return savedUserData ? JSON.parse(savedUserData) : null
    });

    const {currentUser} = useAuth();
    const navigate = useNavigate();

  


    
    return (
        <div className="profile">
            {userData.isFilled ? (<div style={{color: 'red'}}>You have filled the form</div>) : <Form/>}
            
        </div>
            
    );
}
export default Profile;