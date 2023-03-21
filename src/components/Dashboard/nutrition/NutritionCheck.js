import React, {useState} from 'react'
import Nutrition from './Nutrition'
import RequestForm from '../Calories/calories-content/requestForm'
import './nutrition.css'
export default function NutritionCheck() {
    const [userData, setUserData] = useState(() => {
        const savedUserData = localStorage.getItem('userData');
        return savedUserData ? JSON.parse(savedUserData) : null
      });




  return (
    <div>
        {!userData.isFilled ? (<div className='container nutrition-check'>
            <RequestForm />
        </div>) : <Nutrition userData={userData} />}
    </div>
  )
}
