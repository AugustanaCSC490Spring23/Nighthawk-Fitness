import {MdAddCircle} from 'react-icons/md'
import { Button, Icon, IconButton } from '@mui/material';
import NewWorkout from './newWorkout';
import React, { useEffect, useState } from "react";
import './workoutLog.css'
// import WorkoutMonth from './logCalendar/workoutMonth';
// import WorkoutWeek from "./logCalendar/workoutWeek"
function WorkoutLog() {
  const [added, addWorkout] = useState(false)
    return( <>
    <div className='workoutLog-ctn'>
    <div className="add-btns">
      <button>Add Week</button>
       <button>Add Month</button>
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