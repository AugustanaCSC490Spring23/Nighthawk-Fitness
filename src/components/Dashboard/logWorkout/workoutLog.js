import {MdAddCircle} from 'react-icons/md'
import { Button, Icon, IconButton } from '@mui/material';
import NewWorkout from './workoutDates/months/newWorkout';
import React, { useEffect, useState } from "react";
import './workoutLog.css'
import WorkoutMonth from './workoutDates/months/workoutMonth';
import ParseWorkout from './workoutDates/months/parseWorkout';
// import WorkoutMonth from './logCalendar/workoutMonth';
// import WorkoutWeek from "./logCalendar/workoutWeek"
function WorkoutLog() {
  const [userData, setUserData] = useState(() => {
    const savedUserData = localStorage.getItem('userData');
    return savedUserData ? JSON.parse(savedUserData) : null
});
  const [added, addWorkout] = useState(false)
  
    return( <>
    <div className='workoutLog-ctn'>
    <div className='containerGreeting'>
      <div className='workoutLog-Greeting'>
      <div className="notebook"></div><h1 id="welcome">Welcome to your workout log</h1>
      <div className='month'>
      <IconButton id="add-btn" aria-label="Log a workout" 
        onClick={()=>addWorkout(!added)}>
          <MdAddCircle/>
        </IconButton>
        {added && <NewWorkout/>}
      </div>
      </div>
      </div>
    <div className="add-btns">
        
    </div>
        <div className='log-container'>
        <IconButton id="add-btn" aria-label="Log a workout" 
        onClick={()=>addWorkout(!added)}>
          <MdAddCircle/>
        </IconButton>
        {added && <WorkoutMonth />}
        </div>
        </div>
        </>
    )
}

export default WorkoutLog