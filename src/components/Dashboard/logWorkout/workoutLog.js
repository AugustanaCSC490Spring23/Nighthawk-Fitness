import {MdAddCircle} from 'react-icons/md'
import { Button, Icon, IconButton } from '@mui/material';
import NewWorkout from './workoutDates/months/newWorkout';
import React, { useEffect, useState } from "react";
import './workoutLog.css'
import WorkoutMonth from './workoutDates/months/workoutMonth';
// import WorkoutMonth from './logCalendar/workoutMonth';
// import WorkoutWeek from "./logCalendar/workoutWeek"
function WorkoutLog() {
  const [added, addWorkout] = useState(false)
    return( <>
    <div className='workoutLog-ctn'>
    <div className='containerGreeting'>
      <div className='workoutLog-Greeting'>
      <div className="notebook"></div><h1 id="welcome">Welcome to your workout log</h1>
      <div className='month'>
      <WorkoutMonth />
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
        {added && <NewWorkout/>}
        </div>
        </div>
        </>
    )
}

export default WorkoutLog