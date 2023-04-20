import React from 'react'

export default function DailyCal({userData}) {
  return (
    <div className='dailyCal-card'>
        <div className="dailyCal-item cal">
            <div className="calories_content tabs">
                <h4>LOSE</h4>
                <h5>{Math.round((userData.dailyCal.lose_cal/100)*100)} cal</h5>
            </div>
            <div className="calories_content tabs">
                <h4>MAINTAIN</h4>
                <h5>{Math.round((userData.dailyCal.maintain_cal/100)*100)} cal</h5>
            </div>
            <div className="calories_content tabs">
                <h4>GAIN</h4>
                <h5>{Math.round((userData.dailyCal.gain_cal/100)*100)} cal</h5>
            </div>
        </div>
        <div className="dailyCal-item bmr tabs"></div>
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
  )
}
