import React, {useEffect, useState} from 'react'
import './workoutMonth.css'
export default function WorkoutMonthData(props) {

    const[monthName, setMonthName] = useState("")

    function handleChange(event){
        setMonthName(event.target.value)
    }

    function monthNamer(){
        return <h1>{monthName}</h1>
    }
    

    return(<>
    <input onChange={handleChange} placeholder="Enter Month name"/>
        <button onClick={monthNamer}>Submit Name</button>
        </>)
}