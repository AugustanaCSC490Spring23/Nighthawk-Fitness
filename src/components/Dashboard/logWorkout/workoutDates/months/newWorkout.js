import "./newWorkout.css"
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { db } from "../../../../Firebase/firebase";
import { setDoc, addDoc, collection } from "../../../../Firebase/firebase";
import { async } from "@firebase/util";
import { doc, updateDoc } from "firebase/firestore";
import { getDocs } from "firebase/firestore";
//import { useForm } from 'react-hook-form'

const NewWorkout = () => {

    const [userData, setUserData] = useState(() => {
        const savedUserData = localStorage.getItem('userData');
        return savedUserData ? JSON.parse(savedUserData) : null
    });

    class Workouts{
        constructor(workoutDate,workoutName, workoutCount, weight,
            reps){
                this.workoutDate = workoutDate
                this.workoutName = workoutName
                this.workoutCount = workoutCount
                this.weight = weight
                this.reps = reps
            }
    }
    

    const[workoutInfo, setWorkoutInfo] = useState({
        workoutDate: "",
        workoutName: "",
        weight: "",
        reps: "",
    })

    const handleChange = (event) =>{
        setWorkoutInfo({...workoutInfo, [event.target.name]: event.target.value})
    }

    const [workoutPageData, setWorkoutPageData] = useState(null)

    const handleDate=()=>{
        setWorkoutInfo({...workoutInfo, workoutDate:startDate})
        console.log(startDate)
    }
    
    

    const handleForm = async (event)=>{
        event.preventDefault()
        const currentDoc = doc(db, 'users', userData.docID);
        try{
           await updateDoc(currentDoc, {
                ...workoutInfo 
            }).then(docRef => {
                console.log(userData.docID)
            })
            console.log("Success")
        }
        catch (e) {
            console.error("Error adding document: ", e)
        }
        
        console.log("info added")
        console.log(workoutInfo)
        setWorkoutInfo({workoutDate: "",
        workoutName: "",
        weight: "",
        reps: "",})
    }

    const handleSubmit = (event) =>{
        event.preventDefault()
    }

    const [startDate, setStartDate] = useState(new Date());

    return <>
    <h1>Add a new Workout</h1>
    <div className="formWorkout">
    <form id="workoutForm" onSubmit={handleSubmit}>
    <label>Workout Date</label>
    <DatePicker selected={startDate}
     onChange={(date) => setStartDate(date)} 
     name="workoutDate" 
     value={workoutInfo.workoutDate}
     dateFormat="yyyy/MM/dd" />
     <button onClick={handleDate}>Sumbit Date</button>
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