import "./styledWorkout.css"
import React, { useState } from "react";

const StyledWorkout = ({date, name, reps, weight}) => {

    const [workoutDate, setDate] = useState("")
    const [workoutArr, setArr] = useState([])

    return (
        <div className="coolWorkoutThing">
        
                <h4>Date:</h4>
                <h5>{date}</h5>
                <h4>Workout:</h4>
                <h5>{name}</h5>
                <h4>Reps:</h4>
                <h5>{reps}</h5>
                <h4>Weight:</h4>
                <h5>{weight}</h5>
            </div>
    )
}

export default StyledWorkout
