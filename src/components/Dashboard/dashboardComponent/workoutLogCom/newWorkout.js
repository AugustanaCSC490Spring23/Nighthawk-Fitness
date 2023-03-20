import "./newWorkout.css"
import React, { useEffect, useState } from "react";
import { useForm } from 'react-hook-form'

const NewWorkout = () => {

    class Workouts{
        constructor(workoutName, workoutCount, weight,
            reps){
                this.workoutName = workoutName
                this.workoutCount = workoutCount
                this.weight = weight
                this.reps = reps
            }
    }
    const[workoutInfo, setWorkoutInfo] = useState({
        workoutName: "",
        weight: "",
        reps: "",
    })

    const handleChange = (event) =>{
        setWorkoutInfo({...workoutInfo, [event.target.name]: event.target.value})
    }

    const handleForm=()=>{
        setWorkoutInfo({workoutName: "",
        weight: "",
        reps: "",})
    }

    const handleSubmit = (event) =>{
        event.preventDefault()
        console.log(workoutInfo)
    }
    


    return <>
    <h1>Add a new Workout</h1>
    <div className="formWorkout">
    <form id="workoutForm" onSubmit={handleSubmit}>
        <label>Workout</label>
        <input 
            type="text" 
            name="workoutName"
            value={workoutInfo.workoutName}
            onChange={handleChange}
            placeholder="Bench Press"
            required>
        </input>
        <label>Weight</label>
        <input 
            type="number" 
            name="weight"
            value={workoutInfo.weight}
            onChange={handleChange}
            placeholder="220"
            required>
        </input>
        <label>How many Rep</label>
        <input type="number" 
            name="reps"
            value={workoutInfo.reps}
            onChange={handleChange}
            placeholder="8"
            required>
        </input>
        <button onClick={handleForm}>Create workout!</button>
    </form>
    </div>
    </>
}



export default NewWorkout