import React, {useEffect, useState} from 'react'
import Nutrition from './Nutrition'
import GoalSetting from './GoalSetting'
import RequestForm from '../Calories/calories-content/requestForm'
import './nutrition.css'
export default function NutritionCheck() {
    const [userData, setUserData] = useState(() => {
        const savedUserData = localStorage.getItem('userData');
        return savedUserData ? JSON.parse(savedUserData) : null
      });

    function handleSave(newData) {
      setUserData(newData);
      localStorage.setItem('userData', JSON.stringify(newData))
    }

  return (
    <div>
        {!userData.isFilled ? (<div className='container nutrition-check'>
            <RequestForm />
        </div>) : 
        !userData.calories_goal_filled ? <GoalSetting onSave={handleSave}/> : <Nutrition onSave={handleSave}/>}
    </div>
  )
}
