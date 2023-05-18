import React, { useEffect, useState } from 'react'
import { useNavigate} from 'react-router-dom'
import {BiDumbbell} from 'react-icons/bi'
import beginner from './personalizedPlan/plans/Beginner'
import intermediate from './personalizedPlan/plans/Intermediate'
import advanced from './personalizedPlan/plans/Advanced'
import strength from './personalizedPlan/goals/Strength'
import { db } from '../../Firebase/firebase'
import { updateDoc, doc } from 'firebase/firestore'
import './loading.css'

export default function Loading() {
    const [userData, setUserData] = useState(() => {
      const savedUserData = localStorage.getItem('userData');
      return savedUserData ? JSON.parse(savedUserData) : null
    });

    // goal_detail: goal
    const navigate = useNavigate();

    function addPlan(plan,goal) {
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
        }, 6000)

        return () => {
          clearTimeout(timeOut)
        }
    },[navigate])
    
    useEffect(() => {
      if (!userData.plan ||  userData.plan === '') {
        if (userData.personal_preference.experience_level === 'intermediate') {
          if (userData.information.goal === 'muscle_gain') {
            if (userData.personal_preference.workout_time === '2-3') {
              addPlan(intermediate.muscle_gain.two_three.workout)
            }else {
              addPlan(intermediate.muscle_gain.four_six.workout)
            }
          }else if (userData.information.goal === 'strength') {
            if (userData.personal_preference.workout_time === '2-3') {
              addPlan(intermediate.strength.two_three.workout, strength)
            }else {
              addPlan(intermediate.strength.four_six.workout,strength)
            }
          }else if (userData.information.goal === 'overall_fitness') {
            if (userData.personal_preference.workout_time === '2-3') {
              addPlan(intermediate.overall_fitness.two_three.workout)
            }else {
              addPlan(intermediate.overall_fitness.four_six.workout)
            }
          }else {
            if (userData.personal_preference.workout_time === '2-3') {
              addPlan(intermediate.weight_loss.two_three.workout)
            }else {
              addPlan(intermediate.weight_loss.four_six.workout)
            }
          }
        }else if (userData.personal_preference.experience_level === 'beginner') {
          if (userData.information.goal === 'muscle_gain') {
            if (userData.personal_preference.workout_time === '2-3') {
              addPlan(beginner.muscle_gain.two_three.workout)
            }else {
              addPlan(beginner.muscle_gain.four_six.workout)
            }
          }else if (userData.information.goal === 'strength') {
            if (userData.personal_preference.workout_time === '2-3') {
              addPlan(beginner.strength.two_three.workout,strength)
            }else {
              addPlan(beginner.strength.four_six.workout,strength)
            }
          }else if (userData.information.goal === 'overall_fitness') {
            if (userData.personal_preference.workout_time === '2-3') {
              addPlan(beginner.overall_fitness.two_three.workout)
            }else {
              addPlan(beginner.overall_fitness.four_six.workout)
            }
          }else {
            if (userData.personal_preference.workout_time === '2-3') {
              addPlan(beginner.weight_loss.two_three.workout)
            }else {
              addPlan(beginner.weight_loss.four_six.workout)
            }
          }
        }else {
          if (userData.information.goal === 'muscle_gain') {
            if (userData.personal_preference.workout_time === '2-3') {
              addPlan(advanced.muscle_gain.two_three.workout)
            }else {
              addPlan(advanced.muscle_gain.four_six.workout)
            }
          }else if (userData.information.goal === 'strength') {
            if (userData.personal_preference.workout_time === '2-3') {
              addPlan(advanced.strength.two_three.workout,strength)
            }else {
              addPlan(advanced.strength.four_six.workout,strength)
            }
          }else if (userData.information.goal === 'overall_fitness') {
            if (userData.personal_preference.workout_time === '2-3') {
              addPlan(advanced.overall_fitness.two_three.workout)
            }else {
              addPlan(advanced.overall_fitness.four_six.workout)
            }
          }else {
            if (userData.personal_preference.workout_time === '2-3') {
              addPlan(advanced.weight_loss.two_three.workout)
            }else {
              addPlan(advanced.weight_loss.four_six.workout)
            }
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
