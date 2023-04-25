import "./styledWorkout.css"
import React, { useState } from "react";

const StyledWorkout = ({date, name, reps, weight}) => {

    const [workoutDate, setDate] = useState("")
    const [workoutArr, setArr] = useState([])

    function slicer(nameToSlice){
        var name1 = JSON.stringify(nameToSlice)
        var slicing = name1.slice(1, 11)
        return slicing
    }

    function checkDate(date1){
        if (workoutDate != date1){
        setDate(date1)
        }
    }

    return (
        <div className="coolWorkoutThing">
            {checkDate(date.slice(0, 10))}
                <h4>Date:</h4>
                <h5>{slicer(date)}</h5>
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
