import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate, NavLink, Outlet} from "react-router-dom";
import "./dashboard.css";
import { auth } from "../Firebase/firebase";
import NavBar from "./navBar/NavBar";


function Dashboard() {


    const [user, loading, error] = useAuthState(auth);

    const [name, setName] = useState('');

    const[sidebar,activeSideBar] = useState(true)
 
    const navigate = useNavigate();
    
    

    useEffect(() => {
        if (loading) return;

        if (!user) return navigate("/login");
        // fetchUserName();
    }, [user, loading]);

    

    return (
        <div className="dashboard">
                <div className={sidebar ? "dashboard-card-active" : 'dashboard-card-deactive'}>
                    <div className="dashboard-nav">
                        <NavBar />
                        <Outlet />
                    </div>
                    <div className="dashboard-container">
                    <div className="graph">Graph with user data</div>
                    <div className="inspirational">You can do it!</div>
                    <div className="inspirational">
                        <h1>BMI calculator</h1>
                        <input type="text" style={{color: "white"}} placeholder="Enter your height in Inches"></input>
                        <input type="text" style={{color: "white"}} placeholder="Enter your weight in Inches"></input>
                        <h3>BMI</h3>
                    </div>
                    </div>
                </div>
        
        </div>
    );
}
export default Dashboard;