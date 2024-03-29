import React, {useEffect} from 'react'
import './user.css'
import { Avatar } from '@mui/material'
import {GiPerson} from 'react-icons/gi'
import {IoMdArrowDropright} from 'react-icons/io'
import {FiTarget} from 'react-icons/fi'
import {AiFillQuestionCircle} from 'react-icons/ai'
import {MdEmail} from 'react-icons/md'
import { Link } from 'react-router-dom'
import { db } from '../../Firebase/firebase';
import { updateDoc, doc } from "firebase/firestore";
export default function User({userData, setUserData}) {

  useEffect(() => {
    if ((!userData.nutrition && userData.dailyCal) || !userData.bmi) {
      const currentDoc = doc(db, 'users', userData.docID);
      updateDoc(currentDoc, {
        nutrition: {
            cal: {
              remaining: 0,
              consuming: 0
            },
            food_nutrition: {
              p: 0,
              c: 0,
              f: 0
            },
            food_array: {
              breakfast: [],
              lunch: [],
              dinner: [],
              snack: []
            },
            date: ''
        },
        bmi: [
          {
            score: (703  * userData.information.weight[userData.information.weight.length-1].w / 
            ((parseInt(userData.information.height.ft * 12) + parseInt(userData.information.height.inch))*(parseInt(userData.information.height.ft * 12) + parseInt(userData.information.height.inch)))),
            date: userData.information.weight[userData.information.weight.length-1].date
          }
        ],
        nutrition_history: [],
        goal_calories: 0
      })

      const updateData = {
        ...userData,
        nutrition: {
            cal: {
              remaining: 0,
              consuming: 0
            },
            food_nutrition: {
              p: 0,
              c: 0,
              f: 0
            },
            food_array: {
              breakfast: [],
              lunch: [],
              dinner: [],
              snack: []
            },
            date: ''
        },
        bmi: [
          {
            score: (703  * userData.information.weight[userData.information.weight.length-1].w / 
            ((parseInt(userData.information.height.ft * 12) + parseInt(userData.information.height.inch))*(parseInt(userData.information.height.ft * 12) + parseInt(userData.information.height.inch)))),
            date: userData.information.weight[userData.information.weight.length-1].date
          }
        ],
        nutrition_history: [],
        goal_calories: 0
      };

      setUserData(updateData);
      localStorage.setItem('userData', JSON.stringify(updateData))
    }
  }, [userData])
  
  return (
    
    <div className="user-container">
      <div className="user-avatar">
        <div className="user-img">
          <Avatar sx={{width: 150, height: 150}} src={userData.photoURL} />
        </div>
        <div className="user-name">
          {userData.name}
        </div>
      </div>
      <div className="user-info">
        <div className="user-data">
          <div className="title">Fitness Profile</div>
          <div className="user-link">
            <div className="link-item">
              <div className="underline body"></div>
              <div className="link-title">  
                <div className="link-icon body">
                  <GiPerson />
                </div>
                
                <h4>My Body</h4>
              </div>
              <Link to='mybody'>
                <div className="link-btn">
                  <IoMdArrowDropright className='link-to-item' />
                </div>
              </Link>
              
            </div>
            <div className="link-item">
              <div className="underline goal"></div>
              <div className="link-title">
                <div className="link-icon goal">
                  <FiTarget />
                </div>
                
                <h4>Goal</h4>
              </div>
              <Link to='goal'>
              <div className="link-btn">
                <IoMdArrowDropright className='link-to-item' />
              </div>
              </Link>

            </div>
            {/* <div className="link-item">
              <div className="underline setting"></div>
              <div className="link-title">
                <div className="link-icon setting">
                  <AiFillQuestionCircle />
                </div>
                
                <h4>Help</h4>
              </div>
              <Link to='help'>
                <div className="link-btn">
                  <IoMdArrowDropright className='link-to-item' />
                </div>
              </Link>
            </div> */}
          </div>
          
        </div>

        <div className="user-contact">
          <div className="title">Contact</div>
          <div className="user-link">
            <div className="link-item mail">
              <div className="underline email"></div>
              <div className="link-title">  
                <div className="link-icon body">
                  <MdEmail />
                </div>
                
                <h4>Email</h4>
              </div>

              <div className="email">
                {userData.email}
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
    
  )
}
