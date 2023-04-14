import React, {useState} from 'react'
import PersonalizedPlan from './personalizedPlan/PersonalizedPlan';
import ExtraInfo from './ExtraInfo';
import { useLocation } from 'react-router-dom';
export default function CreatePlan() {

    const [userData, setUserData] = useState(() => {
        const savedUserData = localStorage.getItem('userData');
        return savedUserData ? JSON.parse(savedUserData) : null
    });

   
    function handleSubmit(extraInfo)  {
    
        setUserData(extraInfo);
        localStorage.setItem('userData', JSON.stringify(extraInfo))
    }



  return (
    <div className='container'>
        {userData.isCreated ? <PersonalizedPlan userData={userData}/> : <ExtraInfo userData={userData} onSubmit={handleSubmit}/>}
    </div>
  )
}
