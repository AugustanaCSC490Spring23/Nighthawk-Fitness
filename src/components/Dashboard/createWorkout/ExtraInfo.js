import React, { useEffect, useState } from 'react'
import './extrainfo.css'
import {BsArrowLeft} from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';
import { db } from '../../Firebase/firebase';
import { updateDoc, doc } from "firebase/firestore";
import Loading from './loading';

export default function ExtraInfo({userData, onSubmit}) {

  const navigate = useNavigate();

  const [extraInfo, setExtraInfo] = useState({
    experience_level: '',
    workout_time: ''
  })

  function goBack() {
    navigate(-1);
  }

  async function createPlan() {
    try {
      
      const currentDoc = doc(db, 'users', userData.docID);
      await updateDoc(currentDoc, {
          isCreated: true,
          personal_preference: extraInfo
      })

      const updateData = {
        ...userData,
        isCreated:true,
        personal_preference: extraInfo
    };

      onSubmit(updateData)
      navigate('loading')
    }catch(e) {
      console.log(e);
    }
  }


  return (
    <div className='container'>
        <div className="extra-info">
          <BsArrowLeft className='extra-icon' onClick={goBack}/>
          <div className="extra-info-title">
            <h2>Hello {userData.name}</h2>
            <h3>Just a few more things before we create your plan</h3>
          </div>
          <div className="extra-info-question">
            <div className="question-item">
              <div className="question-item-title">
                <h4>How long have you been consistently working out ?</h4>
              </div>
              <div className="question-item-answer">
                <label>
                  <input type="radio" name='level' onChange={(e) => {
                    setExtraInfo({...extraInfo, experience_level: 'beginner'})
                  }} />
                  <div>Less than 6 months</div>
                </label>
                <label>
                  <input type="radio" name='level' onChange={(e) => {
                    setExtraInfo({...extraInfo, experience_level: 'intermediate'})
                  }} />
                  <div>6-12 months</div>
                </label>
                <label>
                  <input type="radio" name='level' onChange={(e) => {
                    setExtraInfo({...extraInfo, experience_level: 'advanced'})
                  }} />
                  <div>More than 12 months</div>
                </label>
              </div>
            </div>

            <div className="question-item">
              <div className="question-item-title">
                <h4>How many days can you spend working out ?</h4>
              </div>
              <div className="question-item-answer">
                <label>
                  <input type="radio" name='time' onChange={(e) => {
                    setExtraInfo({...extraInfo, workout_time: '2-3'})
                  }} />
                  <div>2-3 days per week</div>
                </label>
                <label>
                  <input type="radio" name='time' onChange={(e) => {
                    setExtraInfo({...extraInfo, workout_time: '4-6'})
                  }} />
                  <div>4-6 days per week</div>
                </label>
              </div>
            </div>
          </div>
          <div className="plan-btn">
            <span>Ready, Set</span>
            <button onClick={createPlan}>Plan</button>
          </div>
             
        </div>
        
        
    </div>
  )
}
