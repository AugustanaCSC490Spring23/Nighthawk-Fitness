import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate} from "react-router-dom";
import './profile.css'
import { auth, db } from "../Firebase/firebase";
import { updateDoc, doc } from "firebase/firestore";
import { useAuth } from "../contexts/AuthContext";


function Profile() {


    const {currentUser} = useAuth();
    const [userData, setUserData] = useState(() => {
        const savedUserData = localStorage.getItem('userData');
        return savedUserData ? JSON.parse(savedUserData) : null
    }); 
    // const [user, loading, error] = useAuthState(auth);
    

    
    const navigate = useNavigate();

    async function handleClick() {
        try {
            const currentDoc = doc(db, 'users', userData.docID);
            await updateDoc(currentDoc, {
                isFilled: true
            })
            const updateUserData = {
                ...userData,
                isFilled:true
            };

            setUserData(updateUserData);
            localStorage.setItem('userData', JSON.stringify(updateUserData))
        }catch(e) {
            console.log(e);
        }
    }

  

    
    

    
    return (
        <div className="profile">
        <div className="profile__container">
            <h1 style={userData?.isFilled ? {color: 'red'}:{color: 'black'}}>Profile</h1>
            <div className="name">
                <h3>Name</h3>
                {userData ? userData.name : ''}
            </div>
            <div className="email">
                <h3>Email</h3>
                {currentUser.email}
            </div>
            <button onClick={handleClick}>click</button>
            
        </div>
        </div>
    );
}
export default Profile;