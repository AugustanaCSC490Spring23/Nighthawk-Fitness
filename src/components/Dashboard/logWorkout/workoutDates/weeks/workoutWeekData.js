import React, {useEffect, useState} from 'react'
import WorkoutWeekName from './workoutWeekName'
export default function WorkoutWeekData(){

    const [workoutWeekName, setWorkoutWeekName] =
    useState([])

    const [weekName, setWeekName] = useState("")

    function handleClick(){
        setWeekName(weekName)
        console.log("week1")
        const newWeek = <WorkoutWeekName name={weekName} key={workoutWeekName.length}/>
        setWorkoutWeekName([...workoutWeekName, newWeek])
    }

    function handleChange(event){
        setWeekName(event.target.value)
    }

    return(<>
        <div>
        <input onChange={handleChange}/>
        <h1>Hi</h1>
        <button onClick={handleClick}>Submit Week Name</button>
        {workoutWeekName.map((workoutWeekN) => workoutWeekN)}
        </div>
        </>
    )
}



