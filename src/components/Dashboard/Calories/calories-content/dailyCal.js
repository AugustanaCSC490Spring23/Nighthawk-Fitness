import React from 'react'

export default function DailyCal({userData}) {
  return (
    <div>
        <div className="calories_content">
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
        </div>
    </div>
  )
}
