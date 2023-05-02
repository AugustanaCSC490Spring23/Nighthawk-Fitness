import React from 'react'
import './dailyCal.css'
import { width } from '@mui/system'

export default function DailyCal({userData}) {
    const total = Math.round((userData.dailyCal.maintain_cal/100)*100)
    const remainPerc = Math.round((userData.nutrition.cal.remaining/total)*100);
    const consumedPerc = Math.round((userData.nutrition.cal.consuming/total)*100);
    
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
                    <small>{userData.nutrition.cal.remaining}</small>
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
