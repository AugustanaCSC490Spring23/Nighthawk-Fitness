import React from 'react'
import './calories.css'
import RequestForm from './calories-content/requestForm'
import DailyCal from './calories-content/dailyCal'
export default function Calories({userData}) {
  return (
    <div>
        <div className="calories">
            <h3>Daily Calories</h3>
            {!userData.isFilled ? <RequestForm /> : <DailyCal userData={userData}/>}
            {/* <div className="calories_content">
              <div className="maintain">
                <h4>Maintain Weight</h4>
                <h5>{Math.round((userData.dailyCal.maintain_cal/100)*100)} calories</h5>
              </div>
              <div className="lose">
                <h4>Lose Weight</h4>
                <h5>{Math.round((userData.dailyCal.lose_cal/100)*100)} calories</h5>
              </div>
              <div className="gain">
                <h4>Gain Weight</h4>
                <h5>{Math.round((userData.dailyCal.gain_cal/100)*100)} calories</h5>
              </div>
            </div> */}
            
        </div>
    </div>
  )
}
