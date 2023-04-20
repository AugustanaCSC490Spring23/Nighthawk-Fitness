import React from 'react'
import './calories.css'
import RequestForm from './calories-content/requestForm'
import DailyCal from './calories-content/dailyCal'
export default function Calories({userData}) {
  return (
    <div>
        <div className="calories">
            {/* <h3>Daily Calories</h3> */}
            {!userData.isFilled ? <RequestForm /> : <DailyCal userData={userData}/>}
            
            
        </div>
    </div>
  )
}
