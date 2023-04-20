import "./newWorkout.css"
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { db } from "../../../../Firebase/firebase";
import { setDoc, addDoc, collection } from "../../../../Firebase/firebase";
import { async } from "@firebase/util";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { getDocs } from "firebase/firestore";
import ParseWorkout from "./parseWorkout";
//import { useForm } from 'react-hook-form'

const NewWorkout = () => {

    const myBlogs = ["https://catalins.tech", "https://exampleblog.com"];
localStorage.setItem('links', JSON.stringify(myBlogs));

    const [userData, setUserData] = useState(() => {
        const savedUserData = localStorage.getItem('userData');
        return savedUserData ? JSON.parse(savedUserData) : null
    });

    function saveYourWorkouts(){
        console.log("Saving workout....") 
    }

 {/*   class Workouts{
        constructor(workoutDate,workoutName, weight,
            reps){
                this.workoutDate = workoutDate
                this.workoutName = workoutName
                this.weight = weight
                this.reps = reps
            }

            toString(){
                return 'Workout Date: ' + this.workoutDate +
                ', Workout Name: ' + this.workoutName + 
                ', weight: ' + this.weight +
                ', reps: ' + this.reps
            }
    } */}
    
    
    const[workoutInfo, setWorkoutInfo] = useState({
        workoutLogInfo: {
            workoutDate: "",
            workoutName: "",
            weight: "",
            reps: ""}
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
        console.log(startDate)
    }

    const setObject = (workoutObj) => {
        const arrayOfWorkouts1 = [...arrayOfWorkouts, workoutObj]
        setArray(arrayOfWorkouts1)
        console.log(arrayOfWorkouts)
        console.log(arrayOfWorkouts1)
        return arrayOfWorkouts1
    }

    const handleForm = async (event)=>{
        event.preventDefault()
        const workoutObj = {
            date: workoutInfo.workoutLogInfo.workoutDate,
            name: workoutInfo.workoutLogInfo.workoutName,
            weight: workoutInfo.workoutLogInfo.weight,
            reps: workoutInfo.workoutLogInfo.reps
        }
        const currentDoc = doc(db, 'users', userData.docID)

        {/*TODO: Currently local storage and firestore do not
    have their data in sync. To fix, update localstorage
based on a query to firestore to get the allWorkouts

        Local storage and appending to a list contained locally
    
    Local storage not updating/giving old entries*/}

        try{
           await updateDoc(currentDoc, {
            allWorkouts: arrayUnion(workoutObj),
            filled:true
            }).then(docRef => {
                const localWorkoutObj = setObject(workoutObj)
                const allData = {
                    ...userData,
                    filled:true,
                    arrayOfWorkouts: [...arrayOfWorkouts, workoutObj]
                }
                setUserData(allData)
                localStorage.setItem('userData', JSON.stringify(allData))
            })
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

{/* const handleForm = async (event)=>{
    event.preventDefault()
    const workout = new Workouts(workoutInfo.workoutLogInfo.workoutDate, 
        workoutInfo.workoutLogInfo.workoutName,
        workoutInfo.workoutLogInfo.weight,
        workoutInfo.workoutLogInfo.reps)
    console.log(workout.toString())
    setWorkoutInfo({...workoutInfo,
        workoutLogInfo:
        {...workoutInfo.workoutLogInfo,
            workoutArray:workout}})
    const currentDoc = doc(db, 'users', userData.docID)
    try{
       await updateDoc(currentDoc, {
        filled:true,
            ...workoutInfo 
        }).then(docRef => {
            setUserData({...workoutInfo, filled:true})
            const allData = {
                ...userData,
                ...workoutInfo,
                filled:true
            }
            localStorage.setItem('userData', JSON.stringify(allData))
            const savedWorkout = <ParseWorkout key={workout.length} userData={userData}/>
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
}*/}

    const [startDate, setStartDate] = useState(new Date());

    return <>
    <h1>Add a new Workout</h1>
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
    {userData.filled && <ParseWorkout userData={userData}/>}
    {/*workout.map((workout1) => workout1)*/}
    </>
}



export default NewWorkout