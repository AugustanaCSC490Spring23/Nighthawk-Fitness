import React from 'react'
import './calendar.css'
import Workout_calendar from './calendar-content/workout-calendar'
//import Old_calendar from './calendar-content/old-calendar'

export default function Calendar() {
  return (
    <div>
      <div className="calendar_main">
        <Workout_calendar />
        { /* <Old_calendar /> */ }
      </div>
    </div>
  )
}
