import React, { useEffect, useRef, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate} from "react-router-dom";
import {db } from "../Firebase/firebase";
import {doc, updateDoc} from 'firebase/firestore';
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
    
        setUserData(formData);
        localStorage.setItem('userData', JSON.stringify(formData))
    }

    async function fetchCalories() {
        try {
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '3bc8b2aff1mshe263971d1b8ac5bp112b3djsn7d5749482f80',
                    'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
                }
            };
            const response = await fetch(`https://fitness-calculator.p.rapidapi.com/dailycalorie?age=${userData.information.age}&gender=male&height=${userData.information.height*30.48}&weight=${userData.information.weight/2.205}&activitylevel=${userData.information.activity_level}`, options)
            const data = await response.json();
            console.log(data.data.goals['maintain weight']);
            const currentDoc = doc(db, 'users', userData.docID);
            
            await updateDoc(currentDoc, {
                dailyCal: {
                    BMR: data.data.BMR,
                    maintain_cal: data.data.goals['maintain weight'],
                    lose_cal: data.data.goals['Weight loss'].calory,
                    gain_cal: data.data.goals['Weight gain'].calory
                }
                
            })

            const updateData = {
                ...userData,
                dailyCal: {
                    BMR: data.data.BMR,
                    maintain_cal: data.data.goals['maintain weight'],
                    lose_cal: data.data.goals['Weight loss'].calory,
                    gain_cal: data.data.goals['Weight gain'].calory
                }
            };
            setUserData(updateData);
            localStorage.setItem('userData', JSON.stringify(updateData));
             
        }catch(e) {
            console.log(e);
        }
    }

    useEffect(() => {
        if(userData.isFilled && !userData.dailyCal)  {
            fetchCalories();
        }
        
    },[userData.isFilled, userData.dailyCal])


    
    return (
        <div className="container">
            {userData.isFilled ? <User userData={userData}/> : <Form onSubmit={handleSubmit}/>}
            
        </div>
            
    );
}
export default Profile;