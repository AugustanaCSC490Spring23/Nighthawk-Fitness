import React, {useState} from 'react'
import './nutritionhistory.css'
import {MdKeyboardArrowLeft} from 'react-icons/md'
import { useNavigate } from 'react-router-dom';
import {BsFillTrashFill} from 'react-icons/bs'
import { db } from '../../../Firebase/firebase';
import { updateDoc, doc } from "firebase/firestore";

export default function NutritionHistory() {
    const [userData, setUserData] = useState(() => {
        const savedUserData = localStorage.getItem('userData');
        return savedUserData ? JSON.parse(savedUserData) : null
    });

    const navigate = useNavigate();

    function goBack()  {
        navigate(-1)
    }


    function deleteHistory(index) {
        const updatedArray = userData.nutrition_history.filter((item, i) => {
            return index !== i
        })
        
        const currentDoc = doc(db, 'users', userData.docID);
        updateDoc(currentDoc, {
            nutrition_history: updatedArray
        })
    
        const updateData = {
            ...userData,
            nutrition_history: updatedArray
        };
    
        setUserData(updateData);
        localStorage.setItem('userData', JSON.stringify(updateData))
    }
  return (
    <div className='container'>
        <div className="nutrition-history-container">
            <div className="back-btn" onClick={goBack}>
                <MdKeyboardArrowLeft />
            </div>

            <div className="nutrition-history-content">
                <ul>
                    {userData.nutrition_history.map((item, index) => (
                        <div>
                            <li>
                                {item.date}
                                <BsFillTrashFill className='open-log-icon' onClick={() => deleteHistory(index)}/>
                            </li>
                            <div className="item-content">
                                <div className="item-detail">
                                    <div className="item-detail-holder">
                                        <h4>Consumed</h4>
                                        <small>{item.cal.consuming} kcal</small>
                                    </div>
                                    <div className="item-detail-holder">
                                        <h4>Remaining</h4>
                                        <small>{item.cal.remaining > 0 ? item.cal.remaining : 0} kcal</small>
                                    </div>
                                          
                                </div>
                                <div className="item-detail">
                                    <div className="item-detail-holder">
                                        <h4>Protein</h4>
                                        <small>{item.food_nutrition.p} g</small>
                                    </div>
                                    <div className="item-detail-holder">
                                        <h4>Carb</h4>
                                        <small>{item.food_nutrition.c} g</small>
                                    </div>
                                    <div className="item-detail-holder">
                                        <h4>Fat</h4>
                                        <small>{item.food_nutrition.f} g</small>
                                    </div>
      
                                </div>
                                
                            </div>
                        </div>
                
                    ))}
                </ul>
            </div>
        </div>

    </div>
  )
}
