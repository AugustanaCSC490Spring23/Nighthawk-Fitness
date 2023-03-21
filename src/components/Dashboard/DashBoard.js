import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate, NavLink, Outlet} from "react-router-dom";
import "./dashboard.css";
import { auth } from "../Firebase/firebase";
import NavBar from "./navBar/NavBar";


function Dashboard() {


    const [user, loading, error] = useAuthState(auth);

    const [name, setName] = useState('');
 
    const navigate = useNavigate();
    
    const[sidebar,setSidebar] = useState(true)
    

    useEffect(() => {
        if (loading) return;

        if (!user) return navigate("/login");
        // fetchUserName();
    }, [user, loading]);

    

    return (
            <div>
        <div className="dashboard">
                <div className="dash-skeleton">
                    <div className="dashboard-nav">
                    <div className={sidebar ? "dashboard-card-active" : 'dashboard-card-deactive'}>
                    <NavBar 
                    sidebar={sidebar}
                    setSidebar={setSidebar}/>  
                    <Outlet /> 
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}
export default Dashboard;