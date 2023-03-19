import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Button, Icon, IconButton } from '@mui/material';
import NewWorkout from './newWorkout';
import React, { useEffect, useState } from "react";
import './workoutLog.css'
function WorkoutLog() {
  const [added, addWorkout] = useState(false)
    return(
        <div className='log-container'>
        <IconButton id="add-btn" aria-label="Log a workout" 
        onClick={()=>addWorkout(!added)}>
          <AddCircleOutlineIcon/>
        </IconButton>
        {added && <NewWorkout/>}
        </div>
    )
}

export default WorkoutLog