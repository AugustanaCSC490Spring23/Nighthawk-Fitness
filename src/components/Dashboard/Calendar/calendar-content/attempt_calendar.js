import React from "react";
import dayjs from "dayjs";
import './att.css'
import cn from "./cn.js"
import { useState } from 'react'
import { getDate, months } from './dates'
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'

export default function Attempt_calendar() {
    console.log(getDate());
    const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    const currentDate = dayjs();
    const [today, setToday] = useState(currentDate);
    const [selectDate, setSelectDate] = useState(currentDate);

    return(
        <div className="main-container">
            <div className="contain">
                <div>
                <div className="calendar-date">
                    <h1 className="current-date">{months[today.month()]}, {today.year()}</h1>
                    <div className="toggles">
                        <GrFormPrevious className="arrow" onClick={() => {setToday(today.month(today.month() - 1));}}/>
                        <h1 className="today" onClick={() => {setToday(currentDate);}}>Today</h1>
                        <GrFormNext className="arrow" onClick={() => {setToday(today.month(today.month() + 1));}}/>
                    </div>
                </div>
                <div className="days-box">
                    {days.map((day, index) => {
                        return <h1 key={index} className="days">{day}</h1>;
                    })}
                </div>
                <div className="calendar-container">
                    {getDate(today.month(), today.year()).map(({date, currentMonth, today}, index) => {
                        return(
                            <div key={index} className="calendar-box">
                                <h1 
                                onClick={()=>{setSelectDate(date)}}> {date.date()} </h1>
                            </div>
                        );
                    })}
                </div>
                </div>
            </div>
            <div className="schedule">
                <h1>Schedule for {selectDate.toDate().toDateString()}</h1>
                <p>No workout for today.</p>
            </div>
        </div>
    );
}