import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import './workout-calendar.css'
import { getDate, months } from './dates'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import { db } from '../../../Firebase/firebase';
import { updateDoc, doc } from "firebase/firestore";

export default function Attempt_calendar() {
    const [userData, setUserData] = useState(() => {
        const savedUserData = localStorage.getItem('userData');
        return savedUserData ? JSON.parse(savedUserData) : null
    });
    // console.log(getDate());
    const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    const currentDate = dayjs();
    const [today, setToday] = useState(currentDate);
    const [selectDate, setSelectDate] = useState(currentDate);


   useEffect(() => {
    const currentDoc = doc(db, 'users', userData.docID);
    const workout = []
    if (userData.start_date  && !userData.calendarPlanned) {
        for (let i = 0; i < 7; i++) {
            let day =  new Date(userData.start_date)
            day.setDate(day.getDate()+i)
                
            const workoutDay = {
                date: day.toDateString(),
                workout: userData.plan.schedule[i]  
            }
    
            workout.push(workoutDay)
        }

        
        updateDoc(currentDoc, {
            week_plan: workout,
            calendarPlanned: true
        })

        const updateData = {
            ...userData,
            week_plan: workout,
            calendarPlanned: true
        };

        setUserData(updateData);
        localStorage.setItem('userData', JSON.stringify(updateData))
    }
   }, [userData.start_date])
    

    return(
        <div className="main-container">
            <div className="contain">
                <div>
                <div className="calendar-date">
                    <h1 className="current-date">{months[today.month()]}, {today.year()}</h1>
                    <div className="toggles">
                        <FaAngleLeft className="arrow" onClick={() => {setToday(today.month(today.month() - 1));}}/>
                        <h1 className="today" onClick={() => {setToday(currentDate);}}>Today</h1>
                        <FaAngleRight className="arrow" onClick={() => {setToday(today.month(today.month() + 1));}}/>
                    </div>
                </div>
                <div className="days-box">
                    {days.map((day, index) => {
                        return <h1 key={index} className="days">{day}</h1>;
                    })}
                </div>
                <div className="calendar-container">
                    {getDate(today.month(), today.year()).map(({date, currentMonth, today}, index) => {
                        const calendarArray = []
                        calendarArray.push((currentMonth ? "" : "currentMonthFalse"), (today ? "todayTrue" : ""), (selectDate.toDate().toDateString() === date.toDate().toDateString() ? "selectDateTrue" : ""), ("calendar-day"))
                        return(
                            <div key={index} className="calendar-box">
                                <h1 className={calendarArray.join(" ")} onClick={()=>{setSelectDate(date)}}>
                                    {date.date()}
                                </h1>
                            </div>
                        );
                    })}
                </div>
                </div>
            </div>
            
            <div className="schedule">
                <div className="line line_mobile"></div>
                <h1>{selectDate.toDate().toDateString()}</h1>
                {/* <p>{typeof(workout[index].workout) === 'object' ? workout[index].workout.session.day : workout[index].workout}</p> */}
                {userData.week_plan ? 
                    <div>{userData.week_plan.find(w => w.date === selectDate.toDate().toDateString()) ?
                    typeof(userData.week_plan[userData.week_plan.findIndex(w => w.date === selectDate.toDate().toDateString())].workout)  === 'object' ? 
                        <div className="calendar-plan-display">
                            <ul>
                                <h4>Warm Up</h4>
                                {userData.week_plan[userData.week_plan.findIndex(w => w.date === selectDate.toDate().toDateString())].workout.session.warm_up.map((item) => (
                                        <li>{item.name}</li>
                                    ))   
                                }
                                <h4>Main Workout</h4>
                                {userData.week_plan[userData.week_plan.findIndex(w => w.date === selectDate.toDate().toDateString())].workout.session.main_workout.map((item) => (
                                        <li>{item.name}</li>
                                    ))   
                                }
                                <h4>Cool Down</h4>
                                {userData.week_plan[userData.week_plan.findIndex(w => w.date === selectDate.toDate().toDateString())].workout.session.cool_down.map((item) => (
                                        <li>{item.name}</li>
                                    ))   
                                }
                            </ul>
                            
                        </div>
                    
                    :
                    userData.week_plan[userData.week_plan.findIndex(w => w.date === selectDate.toDate().toDateString())].workout 
                    : 
                    'No Workouts Today'}
                </div>
                :
                'No Workouts Today'
                }
                
            </div>
        </div>
    );
}
