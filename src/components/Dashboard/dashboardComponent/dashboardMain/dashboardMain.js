import "./dashboardMain.css"
import React, { useEffect, useState } from "react";

function DashboardMain(){

    const [height,setHeight]=useState(0)
    const [weight,setWeight]=useState(0)
    const [bmi, setBMI]=useState(0)

    function setWeightFun(val){
        setWeight(val.target.value)
    }

    function setHeightFun(val){
        setHeight(val.target.value)
    }

    function calcBMI() {
        setBMI((weight / (height*height) * 703))
    }

    return(
        <div className="dashboard">
                    <div className="dashboard-container">
                    <div className="graph">Graph with user data</div>
                    <div className="inspirational">You can do it!</div>
                    <div className="inspirational">
                        <h1>BMI calculator</h1>
                        <input type="text" style={{color: "white"}} placeholder="Enter your height in Inches" onChange={setHeightFun}></input>
                        <input type="text" style={{color: "white"}} placeholder="Enter your weight in Inches" onChange={setWeightFun}></input>
                        <button onClick={calcBMI}>Submit</button>
                        <h3>BMI: {bmi}</h3>
                    </div>
                    </div>   
                </div>
    )
}

export default DashboardMain