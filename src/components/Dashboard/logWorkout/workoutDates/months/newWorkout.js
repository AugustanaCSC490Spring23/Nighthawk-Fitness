import "./newWorkout.css"
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { db } from "../../../../Firebase/firebase";
import { setDoc, addDoc, collection } from "../../../../Firebase/firebase";
import { async } from "@firebase/util";
import { doc, updateDoc } from "firebase/firestore";
import { getDocs } from "firebase/firestore";
import ParseWorkout from "./parseWorkout";
//import { useForm } from 'react-hook-form'

const NewWorkout = () => {

    const [userData, setUserData] = useState(() => {
        const savedUserData = localStorage.getItem('userData');
        return savedUserData ? JSON.parse(savedUserData) : null
    });

    const [workout, saveWorkout] = 
        useState([])

    function saveYourWorkouts(){
        console.log("Saving workout....")
      
    }

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
        workoutLogInfo: {
        workoutDate: "",
        workoutName: "",
        weight: "",
        reps: ""}
    })

    const handleChange = (event) =>{
        setWorkoutInfo({...workoutInfo, 
            workoutLogInfo: {...workoutInfo.workoutLogInfo, 
            [event.target.name]: event.target.value}})
    }

    const handleDate=()=>{
        setWorkoutInfo({...workoutInfo,
             workoutLogInfo: 
             {...workoutInfo.workoutLogInfo, workoutDate:startDate}})
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
                setUserData(workoutInfo)
                localStorage.setItem('userData', JSON.stringify(workoutInfo))
                const savedWorkout = <ParseWorkout key={workout.length} userData={userData}/>
                saveWorkout([...workout, savedWorkout])
                saveYourWorkouts()
            })
            console.log("Success")
        }
        catch (e) {
            console.error("Error adding document: ", e)
        }
        
        console.log("info added")
        console.log(workoutInfo)
        setWorkoutInfo({
            workoutLogInfo: {
            workoutDate: "",
            workoutName: "",
            weight: "",
            reps: ""}})
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
     value={workoutInfo.workoutLogInfo.workoutDate}
     dateFormat="yyyy/MM/dd" />
     <button onClick={handleDate}>Sumbit Date</button>
        <label>Workout</label>
        <input 
            type="text" 
            name="workoutName"
            value={workoutInfo.workoutLogInfo.workoutName}
            onChange={handleChange}
            placeholder="Bench Press"
            required>
        </input>
        <label>Weight</label>
        <input 
            type="number" 
            name="weight"
            value={workoutInfo.workoutLogInfo.weight}
            onChange={handleChange}
            placeholder="220"
            required>
        </input>
        <label>How many Rep</label>
        <input type="number" 
            name="reps"
            value={workoutInfo.workoutLogInfo.reps}
            onChange={handleChange}
            placeholder="8"
            required>
        </input>
        <button onClick={handleForm}>Create workout!</button>
    </form>
    </div>
    {workout.map((workout1) => workout1)}
    </>
}



export default NewWorkout