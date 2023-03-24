import React, {useEffect, useState} from 'react'

export default function WorkoutMonth(){
    
    const [workoutWeeks, setWorkoutWeek] =
        useState([])
    
    const [newWeek, setNewWeek] =
        useState(null)

    function createMonth(){
        handleClick()
    }

    const handleClick = () =>{
        setWorkoutWeek([...workoutWeeks, newWeek])
    }

    return <>
        <button onClick={createMonth()}>Add Month</button>
        {workoutWeeks.map((workoutWeek) => workoutWeek)}
    </>
}

