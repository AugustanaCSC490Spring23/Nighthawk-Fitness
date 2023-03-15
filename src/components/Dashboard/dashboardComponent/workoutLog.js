import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Button, Icon, IconButton } from '@mui/material';
import './workoutLog.css'
function WorkoutLog() {
    return(
        <div className='log-container'>
        <IconButton id="add-btn" aria-label="Log a workout">
          <AddCircleOutlineIcon/>
        </IconButton>
        </div>
    )
}

export default WorkoutLog