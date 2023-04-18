import React, { useEffect, useState } from 'react'
import { useNavigate} from 'react-router-dom'
import {BiDumbbell} from 'react-icons/bi'
import beginner from './personalizedPlan/plans/Beginner'
import intermediate from './personalizedPlan/plans/Intermediate'
import { db } from '../../Firebase/firebase'
import { updateDoc, doc } from 'firebase/firestore'
import './loading.css'

export default function Loading() {
    const [userData, setUserData] = useState(() => {
      const savedUserData = localStorage.getItem('userData');
      return savedUserData ? JSON.parse(savedUserData) : null
    });

    const [planner, setPlanner] = useState({})
    const navigate = useNavigate();

    function addPlan(plan) {
        const currentDoc = doc(db, 'users', userData.docID);
        updateDoc(currentDoc, {
            plan: plan
        })

        const updateData = {
          ...userData,
          plan: plan
        };
        setUserData(updateData);
        localStorage.setItem('userData', JSON.stringify(updateData))
    }

    useEffect(() => {
        const timeOut = setTimeout(() => {
            navigate(-1)
        }, 20000)

        return () => {
          clearTimeout(timeOut)
        }
    },[navigate])
    
    useEffect(() => {
      if (!userData.plan) {
        if (userData.personal_preference.experience_level === 'intermediate') {
          if (userData.personal_preference.workout_time === '2-3') {
              addPlan(intermediate.muscle_gain.two_three.workout)
          }else {

          }
        }
      }
    }, [userData])

    
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
