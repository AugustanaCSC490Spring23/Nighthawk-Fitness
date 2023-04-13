import "./dashboardmain.css"
import React, { useEffect, useState } from "react";
import BmiCal from "../BMI/BmiCal";
import Calories from "../Calories/Calories";
import Calendar from "../Calendar/Calendar";


function DashboardMain(){

    const [userData, setUserData] = useState(() => {
        const savedUserData = localStorage.getItem('userData');
        return savedUserData ? JSON.parse(savedUserData) : null
    });

    return(
        <div className=" container">
            <div className="title">dashboard</div>
            <div className="dashboard-main-container">
                <div className="dashboard-main-item">
                    <div className="dashboard-main-first">
                        <div className="graph tabs">graph</div>
                        <div className="bmi-calories">
                            <div className="bmi-cal tabs">
                                
                                <BmiCal/>
                                
                            </div>
                            <div className="calories-req tabs">
                                <Calories userData={userData} />
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="dashboard-main-item">
                    <div className="dashboard-main-second">
                        <div className="current-plan tabs">plan</div>
                        <div className="calendar tabs"><Calendar/></div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default  DashboardMain;  