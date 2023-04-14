import React, {useEffect, useState} from 'react'
import './workoutMonth.css'
export default function WorkoutMonthData(props) {

    const[monthName, setMonthName] = useState("")
    const[visibility, setVisibility]=useState(false)

    function handleChange(event){
        setMonthName(event.target.value)
    }

    function monthNamer(){
        setVisibility(true)
    }
    
    return(<>
    <input onChange={handleChange} placeholder="Enter Month name"/>
        <button onClick={monthNamer}>Submit Name</button>
        <h1>{props.name}</h1>
        </>)
}