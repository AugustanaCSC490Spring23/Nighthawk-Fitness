import "./dashboardmain.css"
import React, { useEffect, useState } from "react";
import BmiCal from "../BMI/BmiCal";
import Calories from "../Calories/Calories";
import Calendar from "../Calendar/Calendar";
import Graph from "../Graph/Graph";
import WeightHistory from "../weightHistory/WeightHistory";

import { CircularProgress } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles';

import UnlockPlan from "../Unlock/UnlockPlan";
import RequestForm from "../Calories/calories-content/requestForm";

function DashboardMain(){

    const [userData, setUserData] = useState(() => {
        const savedUserData = localStorage.getItem('userData');
        return savedUserData ? JSON.parse(savedUserData) : null
    });

    const theme = createTheme({
        palette: {
          primary: {
            // Purple and green play nicely together.
            main: '#a4fba6',
          },
          secondary: {
            // This is green.A700 as hex.
            main: '#11cb5f',
          },
        },
      });

    return(
        <div className=" container">
            <div className="title">dashboard</div>
            <div className="dashboard-main-container">
                <div className="dashboard-main-item">
                    <div className="dashboard-main-first">
                        <div className="graph">
                            {!userData.isFilled ? <RequestForm/> : <Graph/>}
                        </div>
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
                        <div className="current-plan tabs">
                            <div className="current-title">
                                <h3>Current Plan</h3>
                            </div>
                                
                            {!userData.isCreated ? <UnlockPlan/> : 
                            <div className="current-content">
                                <h4>{userData.plan.name}</h4>
                                <small>Duration: 4 weeks</small>
                                <ThemeProvider theme={theme}>
                                    <CircularProgress className="progress-circle" color='primary' size='12rem' thickness={7} variant="determinate" value='90'/>
                                </ThemeProvider>
                            </div>
                            }
                                
                        </div>
                        <div>
                            <WeightHistory userData={userData}/>
                        </div>
                        <div className="calendar tabs"><Calendar/></div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default  DashboardMain;  