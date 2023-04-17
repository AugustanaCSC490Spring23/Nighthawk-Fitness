import React, { useState } from 'react'

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
    
    const day1 = day.getDay();
    let day2 = day.getDay() + 1;
    let day3 = day.getDay() + 2;
    
    if(day2 == 6) {
        day3 = day3 - 7;
    }else if(day2 >= 7) {
        day2 = day2 - 7;
        day3 = day3 - 7;
    }

    const [workout, setWorkout] = useState(workouts[day1]);
    const [date, setDate] = useState(days[day1]);

    const [workout1, setWorkout1] = useState(workouts[day2]);
    const [date1, setDate1] = useState(days[day2]);

    const [workout2, setWorkout2] = useState(workouts[day3]);
    const [date2, setDate2] = useState(days[day3]);

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