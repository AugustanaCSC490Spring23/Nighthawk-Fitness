import React, { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import {BiDumbbell} from 'react-icons/bi'
import './loading.css'

export default function Loading() {
    const navigate = useNavigate();

    useEffect(() => {
        const timeOut = setTimeout(() => {
            navigate(-1)
        }, 20000)

        return () => {
          clearTimeout(timeOut)
        }
    },[navigate])


    console.log(navigate);
  return (
    <div className="container">
      <div className="loading-container">
        <h3>Your plan is in progress <BiDumbbell className='loading-icon'/></h3>
        <div className="loading-bar">
          <div className="loading-progress"></div>
        </div>
      </div>
      
    </div>
    
  )
}
