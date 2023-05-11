import React, {useState, useEffect} from 'react'
import { db } from '../../Firebase/firebase';
import { updateDoc, doc } from "firebase/firestore";

export default function GoalSetting({onSave}) {

    const [caloriesGoal, setCaloriesGoal]  = useState(0)

    const [userData, setUserData] = useState(() => {
        const savedUserData = localStorage.getItem('userData');
        return savedUserData ? JSON.parse(savedUserData) : null
    });


    function saveGoal() {
        const currentDoc = doc(db, 'users', userData.docID);
        updateDoc(currentDoc, {
          
          nutrition: {
            ...userData.nutrition,
            cal: {
              ...userData.nutrition.cal,
              remaining: caloriesGoal
            }
          },
          calories_goal_filled: true,
          goal_calories: caloriesGoal
        })
        
        const updateData = {
          ...userData,
          nutrition: {
            ...userData.nutrition,
            cal: {
              ...userData.nutrition.cal,
              remaining: caloriesGoal
            }
          },
          calories_goal_filled: true,
          goal_calories: caloriesGoal
        };
        
        onSave(updateData)
        
    }

    

  return (
    <div className='container'>
        <div className="calories-option">     
            <h3>Calories</h3>
            <select onChange={(e) => {
            setCaloriesGoal(e.target.value);
            }}>
                <option value='' selected>Select an option</option>
                <option value={Math.round(userData.dailyCal.lose_cal*100/100)}>Lose Weight</option>
                <option value={Math.round(userData.dailyCal.maintain_cal*100/100)}>Maintain Weight</option>
                <option value={Math.round(userData.dailyCal.gain_cal*100/100)}>Gain Weight</option>
            </select>
        
            <button onClick={saveGoal}>Save</button>
        </div>
    </div>
  )
}
