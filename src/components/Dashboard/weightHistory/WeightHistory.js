import React from 'react'
import './weighthistory.css'
import {FaWeight} from 'react-icons/fa'


export default function WeightHistory() {
  return (
    <div className='weight-history'>
        <div className="history-item tabs">
            <div className="history-title">
                <FaWeight className='weight-icon'/>
                <small>4/14/2023</small>
            </div>
            <div className="history-content">
                <h3>170 lbs</h3>
                <h4>Current Weight</h4>
            </div>
            
        </div>
        <div className="history-item tabs">
            <div className="history-title">
                <FaWeight className='weight-icon'/>
                <small>4/01/2023</small>
            </div>
            <div className="history-content">
                <h3>160 lbs</h3>
                <h4>Previous Weight</h4>
            </div>
        </div>
    </div>
  )
}
