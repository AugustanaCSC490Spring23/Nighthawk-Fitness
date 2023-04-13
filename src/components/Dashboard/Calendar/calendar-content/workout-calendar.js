import React from 'react'
import { useState } from 'react'

export default function Workout_calendar() {

    const workouts = ["Rest Day",
    "Chest and Triceps",
    "Back and Biceps",
    "Legs and Shoulders",
    "Rest Day",
    "Core and Cardio",
    "Full Body",];

    const days = ['Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'];
    
    const day = new Date();
    
    const dayOfWeek = day.getDay();

    const [workout, setWorkout] = useState(workouts[dayOfWeek]);
    const [date, setDate] = useState(days[dayOfWeek]);

    const [workout1, setWorkout1] = useState(workouts[dayOfWeek + 1]);
    const [date1, setDate1] = useState(days[dayOfWeek + 1]);

    const [workout2, setWorkout2] = useState(workouts[dayOfWeek + 2]);
    const [date2, setDate2] = useState(days[dayOfWeek + 2]);

    return (
        <div className='calendar_workouts'>
            <div className='day'>
                <h4>{date}</h4>
                <h5>{workout}</h5>
            </div>
            <div className='day'>
                <h4>{date1}</h4>
                <h5>{workout1}</h5>
            </div>
            <div className='day'>
                <h4>{date2}</h4>
                <h5>{workout2}</h5>
            </div>
            <div className='day'>
                <h4>{date2}</h4>
                <h5>{workout2}</h5>
            </div>
            <div className='day'>
                <h4>{date2}</h4>
                <h5>{workout2}</h5>
            </div>
        </div>
    );
}