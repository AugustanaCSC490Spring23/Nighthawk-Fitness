import React, {useEffect, useState} from 'react'
import './workoutLog.css'
import {MdCancel} from 'react-icons/md'
import {IoMdArrowDropdown} from  'react-icons/io'
import { db } from '../../Firebase/firebase';
import { updateDoc, doc } from "firebase/firestore";
import {IoIosArrowDropupCircle} from  'react-icons/io'
import {MdKeyboardArrowLeft} from 'react-icons/md'
import {GiCancel} from 'react-icons/gi'
import {BsFillTrashFill} from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';
export default function WorkoutLog() {
  const [userData, setUserData] = useState(() => {
    const savedUserData = localStorage.getItem('userData');
    return savedUserData ? JSON.parse(savedUserData) : null
  });

  const navigate = useNavigate();

  const [workout, setWorkout] = useState({
    name: '',
    date:'',
    item: []
  })

  const [exercise, setExercise] = useState({
    name: '',
    rep: '',
    set: ''
  })

  const [isCreate, setIsCreate] = useState(false)
  const [isAdd, setIsAdd]  = useState(false)

  useEffect(() => {
    if(!userData.workout_log) {
      const currentDoc = doc(db, 'users', userData.docID);
      updateDoc(currentDoc, {
        workout_log: []
      })

      const updateData = {
        ...userData,
        workout_log: []
      };
  
      setUserData(updateData);
      localStorage.setItem('userData', JSON.stringify(updateData))
    }
  }, [userData])

  function createWorkout() {
    setIsCreate(true) 
  }

  function deleteDay() {
    setIsCreate(false)
    setIsAdd(false)
  }

  function addWorkout() {
    setIsAdd(true)
  }

  function closeAdd()  {
    setIsAdd(false)
  }

  function logEx() {
    setWorkout({
      ...workout,
      item:[
        ...workout.item, exercise
      ]
    })
    
  }

  function deleteItem(id) {
    const updateItemArray = workout.item.filter((item, index) => {
      return index !== id
    })

    setWorkout({
      ...workout,
      item: updateItemArray
      
    })
  }

  function saveSplit() {
    const currentDoc = doc(db, 'users', userData.docID);
    updateDoc(currentDoc, {
      workout_log: [...userData.workout_log, workout]
    })

    const updateData = {
      ...userData,
      workout_log: [...userData.workout_log, workout]
    };

    setUserData(updateData);
    localStorage.setItem('userData', JSON.stringify(updateData))
  }

  function openItem(id1, id2) {
    
    document.getElementById(id1).classList.toggle('active-log-item')
    document.getElementById(id2).classList.toggle('active-log-icon')
    
  }

  function goBack()  {
    navigate(-1)
  }

  function deleteLogItem(index) {
    const updatedArray = userData.workout_log.filter((item, i) => {
      return index !== i
    })

    const currentDoc = doc(db, 'users', userData.docID);
    updateDoc(currentDoc, {
      workout_log: updatedArray
    })

    const updateData = {
      ...userData,
      workout_log: updatedArray
    };

    setUserData(updateData);
    localStorage.setItem('userData', JSON.stringify(updateData))
  }

  return (
    <div className='container'>
      <div className="workout-log-container">
        <div className="workout-log-card">
          <div className="workout-log-item left">
            <div className="back-btn" onClick={goBack}>
                <MdKeyboardArrowLeft />
            </div>
            {userData.workout_log ?
              <ul className='day-log'> 
                {userData.workout_log.map((item, index) => (
                  <li>
                    <div className="day-title" >
                      <span>{item.name}</span>
                      <span>{item.date}</span>
                      <IoIosArrowDropupCircle className='open-log-icon' id={index+100} onClick={() => openItem(index,index+100)}/>
                      <BsFillTrashFill className='open-log-icon' onClick={() => deleteLogItem(index)}/>
                    </div>
                    
                    <ul id={index} className='item-log'>
                      {item.item.map((exercise) => (
                        <li>
                          <span className='name'>{exercise.name}</span>
                          <span className='set'>{exercise.set} set(s)</span>
                          <span className='rep'>{exercise.rep} rep(s)</span>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
              :
              <div className="no-item">
                <h3>No Item</h3>
              </div>
            }
            
          </div>
          <div className="workout-log-item right">
            <div className="workout-insert">
  
              <div className="workout-insert-content">
                
                <div className="workout-date">
                  <h3>Date</h3>
                  <input type="date" id="datepicker" name="datepicker" onChange={(e)  => {
                    setWorkout({...workout, date: e.target.value})
                  }}/>
                </div>
              
                <div className="workout-name">
                  <h3>Workout Name</h3>
                  <input type="text" onChange={(e)  => {
                    setWorkout({...workout, name: e.target.value})
                  }}/>
                </div>
                <div className="create-workout-btn">
                  {isCreate ? !isAdd ? <span onClick={addWorkout}>Add exercise</span> : <GiCancel className='open-log-icon' onClick={closeAdd}/> : <span onClick={createWorkout}>Create</span>} 
                </div>
                {isAdd ? 
                  <div className="workout-details">
                    <div className="workout-details-item">
                      <h3>Exercise</h3>
                      <input type="text" onChange={(e) => {
                        setExercise({...exercise, name: e.target.value})
                      }}/>
                    </div>
                    <div className="workout-details-item">
                      <h3>Set</h3>
                      <input type="text" onChange={(e) => {
                        setExercise({...exercise, set: e.target.value})
                      }}/>
                    </div>
                    <div className="workout-details-item">
                      <h3>Rep</h3>
                      <input type="text" onChange={(e) => {
                        setExercise({...exercise, rep: e.target.value})
                      }}/>
                    </div>
                    <div className="create-workout-btn">
                      <span onClick={logEx}>Add</span> 
                    </div>
                  </div>
                  :
                  <div></div>
                }
                
              </div>
            </div>
            <div className="workout-display">
              {isCreate ? 
              <div className="workout-display-content">
                <div className="workout-display-title">
                  <h3>{workout.name} </h3>
                  <small>{workout.date}</small>
                  <BsFillTrashFill className='open-log-icon' onClick={deleteDay}/>
                </div>
                <div className="workout-display-item">
                  <ul className='item-holder'>
                    {workout.item.map((item, index) => (
                      <li id={index}>
                        <span className='name'>{item.name}</span>
                        <span className='set'>{item.set} set(s)</span>
                        <span className='rep'>{item.rep} rep(s)</span>
                        <MdCancel onClick={() => deleteItem(index)}  className='deleteItem'/>
                      </li>
                    ))}
                  </ul>
                  {workout.item.length > 3 && <IoMdArrowDropdown className='down-icon'/>}
                  <div className="save-btn" onClick={saveSplit}>Save</div>
                </div>
              </div>
              : 
              <div className="no-item">
                <h3>No Item</h3>
              </div> }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
