import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate, Outlet} from "react-router-dom";
import "./dashboard.css";
import { auth,db } from "../Firebase/firebase";
import {query, collection, where, getDocs, doc, updateDoc} from 'firebase/firestore';
import NavBar from "./navBar/NavBar";
import { useAuth } from "../contexts/AuthContext";


function Dashboard() {

    const {currentUser} = useAuth();

    const [user, loading, error] = useAuthState(auth);
    
    const [userData, setUserData] = useState(() => {
        if (currentUser) {
            const savedUserData = localStorage.getItem('userData');
            return savedUserData ? JSON.parse(savedUserData) : null
        }
       
        return null;
    });


    const navigate = useNavigate();

    
    
    const fetchUserName = async () => {
        try {
            const q = query(collection(db, "users"), where("uid", "==", user?.uid));
            const doc = await getDocs(q);
            const data = doc.docs[0].data();
          
            setUserData(data);
            localStorage.setItem('userData', JSON.stringify(data));
        } catch (err) {
            console.error(err);
            alert("An error occured while fetching user data");
        }
    }


    useEffect(() => {
        if(loading) return;
        if (!user) {
            
            return navigate('/login');
        };
        
        

        if (userData ===  null || currentUser.uid !== userData.uid) {
         
            fetchUserName();
            
        }
        
    },[user, userData])

    useEffect(() => {
        
        localStorage.setItem('userData', JSON.stringify(userData))
        
        
    },[userData])

    function showNav() {
        document.getElementById('nav-bar').classList.remove('inactive')
        document.getElementById('nav-bar').classList.add('show')
    }

    

    return (
        <div className="dashboard">
            <div className="dashboard__container">
                <div className="dashboard-card">
                    <div className="dashboard-nav">
                        <NavBar />
                        
                    </div>
                    <div className="dashboard-content">
                        <div className="burger-dropdown" onClick={showNav}>
                            <div className="line1"></div>
                            <div className="line2"></div>
                            <div className="line3"></div>
                        </div>
                        <Outlet />
                    </div>
                </div>
                

            </div>
        </div>
    );
}
export default Dashboard;