import React, { useEffect, useState } from 'react'
import './dailyCal.css'
import { width } from '@mui/system'

export default function DailyCal({userData}) {

    const [remain, setRemain] = useState(userData.nutrition.cal.remaining)
    
    const total = userData.goal_calories
    
    let remainPerc = Math.round((userData.nutrition.cal.remaining/total)*100)
    if (remainPerc < 0) {
        remainPerc  = 0
    }
    let consumedPerc = 100-remainPerc;

    if (total === 0) {
        remainPerc = 0
        consumedPerc = 0
    }
    
    useEffect(() => {
        if (remain < 0) {
            setRemain(0)
        }else {
            setRemain(userData.nutrition.cal.remaining)
        }
    },[userData.nutrition.cal.remaining])

 
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
        <div className="dailyCal-item remain-consumed tabs">
            <div className="remain-consumed-container">
                <div className="remain-consumed-header">
                    <h4>Remaining</h4>
                    <small>{remain}</small>
                </div>
                <div className="bar">
                    <div className="remain-progress" style={{width: remainPerc + '%'}}></div>
                </div>
            </div>

            <div className="remain-consumed-container">
                <div className="remain-consumed-header">
                    <h4>Consumed</h4>
                    <small>{userData.nutrition.cal.consuming}</small>
                </div>
                <div className="bar">
                    <div className="remain-progress" style={{width:consumedPerc + '%'}}></div>
                </div>
            </div>
            
            
        </div>
        
        
    </div>
  )
}
