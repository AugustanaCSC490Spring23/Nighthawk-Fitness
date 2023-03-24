import React, {useEffect, useState} from 'react'
import WorkoutMonthData from './workoutMonthData'

export default function WorkoutMonth(){
    
    const [workoutWeeks, setWorkoutWeek] =
        useState([])
    
  /*  const [newWeek, setNewWeek] =
        useState(null) */

    function createMonth(){
        const newWeek = <WorkoutMonthData key={workoutWeeks.length}/>
        setWorkoutWeek([...workoutWeeks, newWeek])
    }

    return (
        <div>
        <button onClick={createMonth}>Add Month</button>
        {workoutWeeks.map((workoutWeek) => workoutWeek)}
        </div>
    )
}

