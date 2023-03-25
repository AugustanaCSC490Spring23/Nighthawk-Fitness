import React, { useState } from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import {MdOutlineEditNote} from 'react-icons/md'
import { Link } from 'react-router-dom';
import './workout.css'

export default function Workout() {

    // const [muscle, setMuscle] = useState('')
    // const [diff, setDiff] = useState('')
    // const [type, setType] = useState('')
    // const [workout, setWorkout] = useState([])
    // const [userData, setUserData] = useState(() => {
    //     const savedUserData = localStorage.getItem('userData');
    //     return savedUserData ? JSON.parse(savedUserData) : null
    // });
    // const option = {
    //     method: 'GET',
    //     headers: {
    //         'X-Api-Key': 'quw5qgnGXz67bh8bnu360w==4AT8OOXQ9T0ZqRPb'
    //     }
    // }

    // async function handleClick() {
    //     const fetchData = await fetch("https://api.api-ninjas.com/v1/exercises?muscle=" + muscle + "&difficulty=" + diff + "&type=" + type, option)
    //     const data = await fetchData.json()
    //     setWorkout(data)
    
    // }

    // console.log(workout);


    return (
        <div className='container'>
            <div className="title">workout</div>
            <div className="workout-card">
                <div className="workout-features">
                    <h3>Create a personalized workout plan tailored to your fitness goals and preferences.</h3>
                    <div className="btn">Create Plan</div>
                </div>
                <div className="workout-features">
                    <h3>Track your progress and log your completed workouts to stay on top of your fitness journey.</h3>
                    <div className="btn"><Link className='log-plan' to='log'>Log Plan</Link></div>
                </div>
            </div>
        </div>
  )
}
