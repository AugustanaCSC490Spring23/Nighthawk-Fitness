import React, {useEffect, useState} from 'react'

import NewWorkout from './newWorkout'
export default function WorkoutMonth(){
    
    const [workouts, setWorkout] =
        useState([])
    
  /*  const [newWeek, setNewWeek] =
        useState(null) */

    function createMonth(){
        const newWorkout = <NewWorkout key={workouts.length}/>
        setWorkout([...workouts, newWorkout])
    }

    return (
        <div>
        <button onClick={createMonth}>Add Workout</button>
        {workouts.map((workout) => workout)}
        </div>
    )
}

