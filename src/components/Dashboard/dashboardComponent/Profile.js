import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate} from "react-router-dom";
import './profile.css'
import { auth, db } from "../../Firebase/firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import { useAuth } from "../../contexts/AuthContext";

function Profile() {


    const {currentUser} = useAuth();

    const [user, loading, error] = useAuthState(auth);
    const [name, setName] = useState('');

    const navigate = useNavigate();


    console.log(currentUser);
    console.log("Hi")

    return (
        <div className="profile">
        <div className="profile__container">
            <h1>Profile</h1>
            <div className="name">
                <h3>Name</h3>
                {currentUser.displayName}
            </div>
            <div className="email">
                <h3>Email</h3>
                {currentUser.email}
            </div>
            
            
        </div>
        </div>
    );
}
export default Profile;