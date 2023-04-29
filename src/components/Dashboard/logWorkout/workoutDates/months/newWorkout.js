import "./newWorkout.css"
import React, { useEffect, useState, useContext } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { db } from "../../../../Firebase/firebase";
import { setDoc, addDoc, collection } from "../../../../Firebase/firebase";
import { async } from "@firebase/util";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { getDocs } from "firebase/firestore";
import WorkoutLog from "../../workoutLog";
import StyledWorkout from "./oldStyleWorkout/styledWorkout";
import {MdAddCircle} from 'react-icons/md'
import { Button, Icon, IconButton } from '@mui/material';
//import { useForm } from 'react-hook-form'

const NewWorkout = ({returner, setUserData, userData}) => {

    const[workoutInfo, setWorkoutInfo] = useState({
        workoutLogInfo: {
            workoutDate: "",
            workoutName: "",
            weight: "",
            reps: "",}
    })

    const [arrayOfWorkouts, setArray] = useState([])

    const handleChange = (event) =>{
        setWorkoutInfo({...workoutInfo, 
            workoutLogInfo: {...workoutInfo.workoutLogInfo, 
            [event.target.name]: event.target.value}}) 
    }

    const handleDate = e =>{
        setWorkoutInfo({...workoutInfo,
             workoutLogInfo: 
             {...workoutInfo.workoutLogInfo,
                 workoutDate:startDate}})
    }

    const setObject = (workoutObj) => {
        const arrayOfWorkouts1 = [...arrayOfWorkouts, workoutObj]
        setArray(arrayOfWorkouts1)
        return arrayOfWorkouts1
    }

            {/*TODO: Currently local storage and firestore do not
    have their data in sync. To fix, update localstorage
based on a query to firestore to get the allWorkouts
        Local storage and appending to a list contained locally
    Local storage not updating/giving old entries*/}

    const handleForm = async (event)=>{
        event.preventDefault()
        let newDate = JSON.stringify(workoutInfo.workoutLogInfo.workoutDate)
        newDate = newDate.slice(1, 11)
        const workoutObj = {
            date: newDate,
            name: workoutInfo.workoutLogInfo.workoutName,
            weight: workoutInfo.workoutLogInfo.weight,
            reps: workoutInfo.workoutLogInfo.reps
        }
        const currentDoc = doc(db, 'users', userData.docID)
        setObject(workoutObj)
        try{
           const updatedWorkouts = [...userData.allWorkouts, workoutObj]
           await updateDoc(currentDoc, {
                allWorkouts: updatedWorkouts,
                filled:true
            })
                const allData = {
                    ...userData,
                    filled:true,
                    allWorkouts: updatedWorkouts
                }
                setUserData(allData)
                localStorage.setItem('userData', JSON.stringify(allData))
            }
        catch (e) {
            console.error("Error adding document: ", e)
        }
        setWorkoutInfo({
            workoutLogInfo: {
            workoutDate: "",
            workoutName: "",
            weight: "",
            reps: ""}})

    }
    
    const [startDate, setStartDate] = useState(new Date());

    return <> 
    <h1 id="add-text">Add a new Workout</h1>
    <div className="formWorkout">
    <form id="workoutForm" onSubmit={handleForm}>
    <label>Workout Date</label>
    <DatePicker selected={startDate}
     onChange={(date) => setStartDate(date)} 
     name="workoutDate" 
     value={workoutInfo.workoutLogInfo.workoutDate}
     dateFormat="yyyy/MM/dd" />
     <button onClick={handleDate}>Sumbit Date</button>
        <label>Workout</label>
        <input
            id="input1" 
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
        <label>How many Reps</label>
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
    <div className="workoutObj">
       </div>
    
    </>
}
export default NewWorkout