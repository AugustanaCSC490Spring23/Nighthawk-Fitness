import React, { useState } from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import './workout.css'

export default function Workout() {

    const [muscle, setMuscle] = useState('')
    const [diff, setDiff] = useState('')
    const [type, setType] = useState('')
    const [workout, setWorkout] = useState([])
    const [userData, setUserData] = useState(() => {
        const savedUserData = localStorage.getItem('userData');
        return savedUserData ? JSON.parse(savedUserData) : null
    });
    const option = {
        method: 'GET',
        headers: {
            'X-Api-Key': 'quw5qgnGXz67bh8bnu360w==4AT8OOXQ9T0ZqRPb'
        }
    }

    async function handleClick() {
        const fetchData = await fetch("https://api.api-ninjas.com/v1/exercises?muscle=" + muscle + "&difficulty=" + diff + "&type=" + type, option)
        const data = await fetchData.json()
        setWorkout(data)
    
    }

    console.log(workout);


    return (
        <div>
            <div className="container">
                <div className="workout-container">
                    <div className="workout-content">
                        <h1>{userData.name}</h1>
                        <h2>WORKOUTS</h2>
                        {/* <div className="muscle">Muscle</div>
                        <input className='workout-input' onChange={e => setMuscle(e.target.value)} type="text" />
                        <div className="difficulty">Difficulty</div>
                        <input className='workout-input' onChange={e => setDiff(e.target.value)} type="text" />
                        <div className="type">Type</div>
                        <input className='workout-input' onChange={e => setType(e.target.value)} type="text" /> */}
                        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                            <InputLabel className='muscle' id="demo-simple-select-standard-label">Muscle</InputLabel>
                            <Select
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select"
                                onChange={e => setMuscle(e.target.value)}
                            >
                                <MenuItem value={"abdonminals"} >abdonminals</MenuItem>
                                <MenuItem value={"abductors"}>abductors</MenuItem>
                                <MenuItem value={"adductors"}>adductors</MenuItem>
                                <MenuItem value={"biceps"}>biceps</MenuItem>
                                <MenuItem value={"calves"}>calves</MenuItem>
                                <MenuItem value={"chest"}>chest</MenuItem>
                                <MenuItem value={"forearms"}>forearms</MenuItem>
                                <MenuItem value={"glutes"}>glutes</MenuItem>
                                <MenuItem value={"hamstrings"}>hamstrings</MenuItem>
                                <MenuItem value={"traps"}>traps</MenuItem>
                                <MenuItem value={"quadriceps"}>quadriceps</MenuItem>
                                <MenuItem value={"lower_back"}>lower_back</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                            <InputLabel className='muscle' id="demo-simple-select-standard-label">Difficulty</InputLabel>
                            <Select
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select"
                                onChange={e => setDiff(e.target.value)}
                            >
                                <MenuItem value={"beginner"} >Beginner</MenuItem>
                                <MenuItem value={"intermediate"}>Intermediate</MenuItem>
                                <MenuItem value={"expert"}>Expert</MenuItem>
            
                            </Select>
                        </FormControl>
                        <button onClick={handleClick} className='find-workout'>Find Workouts</button>
                    </div>
                    <div className="workout-list">
                
                        {workout.map(item =>
                            <ul>
                                <li className='workout-name'>{item.name}</li>
                                <li className='instruction'>{item.equipment}</li>
                            </ul>
                        )}

                    </div>
                </div>
            </div>
            
            
        </div>
  )
}
