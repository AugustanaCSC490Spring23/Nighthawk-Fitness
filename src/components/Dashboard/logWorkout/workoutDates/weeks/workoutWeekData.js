import React, {useEffect, useState} from 'react'
export default function WorkoutWeekData(){

    const [workoutWeekName, setWorkoutWeekName] =
    useState([])

    const [weekName, setWeekName] = useState("")

    function handleClick(){
        setWeekName(weekName)
    }

    function handleChange(event){
        setWeekName(event.target.value)
    }

    function addWeek(){
        const newWeek = <WorkoutWeekName name={weekName} key={workoutWeekName.length}/>
        setWorkoutWeekName([...workoutWeekName, newWeek])
    }

    return(<>
        <div>
        <input onChange={handleChange}/>
        <h1>Hi</h1>
        <button onClick={handleClick}>Submit Week Name</button>
        </div>
        </>
    )
}



