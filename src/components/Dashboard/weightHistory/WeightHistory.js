import React from 'react'
import './weighthistory.css'
import {FaWeight} from 'react-icons/fa'


export default function WeightHistory({userData}) {
  return (
    <div className='weight-history'>
        <div className="history-item tabs">
            <div className="history-title">
                <FaWeight className='weight-icon'/>
                <small>4/14/2023</small>
            </div>
            <div className="history-content">
                <h3>{!userData.information ? 'No History': userData.information.weight[userData.information.weight.length - 1].w}</h3>
                <h4>Current Weight</h4>
            </div>
            
        </div>
        <div className="history-item tabs">
            <div className="history-title">
                <FaWeight className='weight-icon'/>
                <small>4/01/2023</small>
            </div>
            <div className="history-content">
                <h3>{!userData.information ? 'No History': userData.information.weight[userData.information.weight.length - 1].w}</h3>
                <h4>Previous Weight</h4>
            </div>
        </div>
    </div>
  )
}
