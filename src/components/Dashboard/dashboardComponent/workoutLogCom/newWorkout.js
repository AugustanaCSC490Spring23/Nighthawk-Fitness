import "./newWorkout.css"
import React, { useEffect, useState } from "react";

const NewWorkout = () => {
    const[workoutInfo, setWorkoutInfo] = useState({
        workoutName: "",
        weight: 0,
        reps: 0,
    })

    const handleChange = (event) =>{
        setWorkoutInfo({...workoutInfo, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) =>{
        event.preventDefault()
        console.log(workoutInfo)
    }

    return <>
    <h1>Add a new Workout</h1>
    <div className="formWorkout">
    <form onSubmit={handleSubmit}>
        <label>Workout</label>
        <input 
            type="text" 
            name="workoutName"
            value={workoutInfo.workoutName}
            onChange={handleChange}
            required>
        </input>
        <label>Weight</label>
        <input 
            type="text" 
            name="weight"
            value={workoutInfo.weight}
            onChange={handleChange}
            required>
        </input>
        <label>How many Rep</label>
        <input type="text" 
        name="reps"
        value={workoutInfo.reps}
        onChange={handleChange}
        required>
        </input>
        <button>Create workout!</button>
    </form>
    </div>
    </>
}

class Workouts{
    constructor(workoutName, workoutCount, weight,
        reps){
            this.workoutName = workoutName
            this.workoutCount = workoutCount
            this.weight = weight
            this.reps = reps
        }
}

export default NewWorkout