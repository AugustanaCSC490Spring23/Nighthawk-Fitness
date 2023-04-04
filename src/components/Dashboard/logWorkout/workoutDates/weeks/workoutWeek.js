import WorkoutWeekData from "./workoutWeekData"
import "./workoutweek.css"
import React, {useEffect, useState} from 'react'
export default function WorkoutWeek(props){

    const [workoutWeekData, setWorkoutWeekData] =
    useState([])

    function createWeek(){
        const newWeekData = <WorkoutWeekData key={workoutWeekData.length}/>
        setWorkoutWeekData([...workoutWeekData, newWeekData])
    }

    return( <>
    <div><button onClick={createWeek}>Add week</button>
    <h1>{props.name}</h1> 
    <div className="weekContainer">
    {workoutWeekData.map((workoutWeekD) => workoutWeekD)}
    </div>
    </div>
    </>
    )
}