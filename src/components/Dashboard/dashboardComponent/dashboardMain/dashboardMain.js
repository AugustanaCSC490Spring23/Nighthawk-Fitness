import "./dashboardMain.css"
import React, { useEffect, useState } from "react";

function DashboardMain(){
    return(
        <div className="dashboard">
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
    )
}

export default DashboardMain