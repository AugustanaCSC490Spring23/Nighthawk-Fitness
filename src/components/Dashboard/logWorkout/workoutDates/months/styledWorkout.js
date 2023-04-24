import "./styledWorkout.css"
import { useEffect, useState } from "react"
const StyledWorkout = ({date, name, reps, weight, setData}) => {

    function slicer(nameToSlice){
        return nameToSlice.slice(0, 10)
    }
 
    return (
        <div className="coolWorkoutThing">
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
