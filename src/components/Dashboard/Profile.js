import React, { useEffect, useRef, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate} from "react-router-dom";
import './profile.css';
import { useAuth } from "../contexts/AuthContext";
import  Form from './form/Form'
import User from "./user/User";

function Profile() {
    const [userData, setUserData] = useState(() => {
        const savedUserData = localStorage.getItem('userData');
        return savedUserData ? JSON.parse(savedUserData) : null
    });

    const {currentUser} = useAuth();
    const navigate = useNavigate();

    function handleSubmit(formData)  {
        const updateData = {
            ...userData,
            isFilled:true,
            info: formData
        };

        setUserData(updateData);
        localStorage.setItem('userData', JSON.stringify(updateData))
    }


    
    return (
        <div className="profile">
            {userData.isFilled ? <User userData={userData}/> : <Form onSubmit={handleSubmit}/>}
            
        </div>
            
    );
}
export default Profile;