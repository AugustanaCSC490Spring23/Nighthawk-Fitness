import React from 'react'
import './calendar.css'
//import Workout_calendar from './calendar-content/workout-calendar'
import Attempt_calendar from './calendar-content/attempt_calendar'

export default function Calendar() {
  return (
    <div>
      <div className="calendar_main">
        
        {/* <Workout_calendar /> */}
        <Attempt_calendar />
      </div>
    </div>
  )
}
