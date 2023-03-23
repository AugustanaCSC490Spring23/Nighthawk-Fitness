import React from 'react'
import './calendar.css'
import Workout_calendar from './calendar-content/workout-calendar'

export default function Calendar() {
  return (
    <div>
      <div className="calendar_main">
        <h3>Calendar</h3>
        <Workout_calendar />
      </div>
    </div>
  )
}
