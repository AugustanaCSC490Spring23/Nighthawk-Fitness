import React,  {useState} from 'react'
import './personalizedplan.css'
import { useNavigate } from 'react-router-dom';
import {MdKeyboardArrowLeft} from 'react-icons/md'
import {IoMdArrowDropup} from 'react-icons/io'
import {RiEditCircleFill} from 'react-icons/ri'
import { db } from '../../../Firebase/firebase';
import { updateDoc, doc } from "firebase/firestore";
import {BiReset} from 'react-icons/bi';


export default function PersonalizedPlan() {
  const [userData, setUserData] = useState(() => {
    const savedUserData = localStorage.getItem('userData');
    return savedUserData ? JSON.parse(savedUserData) : null
  });
  const schedule  =  userData.plan.schedule;  
  const [activeTab, setActiveTab] = useState(0);
  const [activeType, setActiveType] = useState(0);
  const navigate = useNavigate();
  const [isEdit, setIsEdit] = useState(false)

  const [activeExercise, setActiveExercise] = useState({})

  const [personal, setPersonal] = useState({
    goal: userData.information.goal,
    experience_level: userData.personal_preference.experience_level,
    workout_time: userData.personal_preference.workout_time
  })


  function openTab(index) {
    // document.getElementById(index).classList.toggle('active-day')
    setActiveTab(index);
    
  }

  function openType(index1, index2) {
    document.getElementById(index1).classList.toggle('active-type-item')
    document.getElementById(index2).classList.toggle('active-type-icon')
  }
  
  function goBack()  {
    navigate(-1)
  }

  function closeManage() {
    document.getElementById('manage-tab').classList.remove('active-manage')
  }

  function openManage() {
    document.getElementById('manage-tab').classList.add('active-manage')
  }

  async function startPlan() {
    
    const currentDoc = doc(db, 'users', userData.docID);
    const workoutDate = new Date().getTime();
    try {
      await updateDoc(currentDoc, {
        start_date: workoutDate
      })

      const updateData = {
          ...userData,
          start_date: workoutDate
      };

      setUserData(updateData);
      localStorage.setItem('userData', JSON.stringify(updateData))
    }catch(e) {
      console.log(e);
    }
      
  }

  function removePlan() {
    const currentDoc = doc(db, 'users', userData.docID);
    updateDoc(currentDoc, {
      start_date: '',
      week_plan: [],
      calendarPlanned: false
    })

    const updateData = {
        ...userData,
        start_date: '',
        week_plan: [],
        calendarPlanned: false
    };

    setUserData(updateData);
    localStorage.setItem('userData', JSON.stringify(updateData))
  }

  function openEdit() {
    setIsEdit(true)
  }

  function closeEdit() {
    setIsEdit(false)
  }

  async function changePlan() {
    
    const currentDoc = doc(db, 'users', userData.docID);
    try {
      await updateDoc(currentDoc, {
        ...userData,
        information: {
          ...userData.information,
          goal: personal.goal
        },
        personal_preference: {
          experience_level: personal.experience_level,
          workout_time: personal.workout_time
        },
        plan: '',
        start_date: ''
      })

      const updateData = {
          ...userData,
          information: {
            ...userData.information,
            goal: personal.goal
          },
          personal_preference: {
            experience_level: personal.experience_level,
            workout_time: personal.workout_time
          },
          plan:'',
          start_date: ''
      };

      setUserData(updateData);
      localStorage.setItem('userData', JSON.stringify(updateData))

      navigate('loading')
    }catch(e) {
      console.log(e);
    }
  }

  function closeExerciseDetail() {
    document.getElementById('exercise-detail-window').classList.remove('detail-active')
  }
  
  function exerciseDetail(item) {
    setActiveExercise(item)
    document.getElementById('exercise-detail-window').classList.add('detail-active')
    {/* console.log(item.session.warm_up[i]) */}
  }
  
  
  return (
    <div className="container">
      <div className="manage-plan-tab" id='manage-tab'>
        <div className="close" onClick={closeManage}>
          <div></div>
          <div></div>
        </div>
        {!isEdit ?
          <div className="manage-plan-content">
            <div className="manage-plan-item">
              <h3> <span className='item-title'>Experience Level</span> <span className='item-details'>{userData.personal_preference.experience_level}</span><RiEditCircleFill className='edit-icon'/></h3>
            </div>
            <div className="manage-plan-item">
              <h3> <span className='item-title'>Sessions per week</span> <span className='item-details'>{userData.personal_preference.workout_time}</span><RiEditCircleFill className='edit-icon'/></h3>
            </div>
            <div className="manage-plan-item">
              <h3> <span className='item-title'>Goal</span> <span className='item-details'>{userData.information.goal}</span><RiEditCircleFill className='edit-icon'/></h3>
            </div>
            <div className="manage-plan-item">
              <h3> <span className='item-title'>Duration</span> <span className='item-details'>4 weeks</span></h3>
            </div>
            <div className="manage-plan-btn">
              <button onClick={openEdit}>Edit</button>
            </div>
          </div>
          :
          <div className="manage-plan-content">
            <div className="manage-plan-item">
              <h3> <span className='item-title'>Experience Level</span> <span className='item-details'> 
              <select onChange={(e) => {
                setPersonal({
                      ...personal,
                      experience_level: e.target.value
                  });
                }}>
                  <option value={userData.personal_preference.experience_level} selected>{userData.personal_preference.experience_level}</option>
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advance">Advance</option>
                </select>
              </span></h3>
            </div>
            <div className="manage-plan-item">
              <h3> <span className='item-title'>Sessions per week</span> <span className='item-details'>
              <select onChange={(e) => {
                setPersonal({
                      ...personal,
                      workout_time: e.target.value
                  });
                }}>
                  <option value={userData.personal_preference.workout_time} selected>{userData.personal_preference.workout_time}</option>
                  <option value="2-3">2-3</option>
                  <option value="4-6">4-6</option>
                  
                </select>
              </span></h3>
            </div>
            <div className="manage-plan-item">
              <h3> <span className='item-title'>Goal</span> <span className='item-details'>
              <select onChange={(e) => {
                setPersonal({
                      ...personal,
                      goal: e.target.value
                  });
                }}>
                  <option value={userData.information.goal} selected>{userData.information.goal}</option>
                  <option value="weight_loss">Lose Weight</option>
                  <option value="strength">Strength</option>
                  <option value="muscle_gain">Gain Muscle</option>
                  <option value="overall_fitness">Overall Fitness</option>
                  
                </select>
              </span></h3>
            </div>
            <div className="manage-plan-item">
              <h3> <span className='item-title'>Duration</span> <span className='item-details'>4 weeks</span></h3>
            </div>
            <div className="manage-plan-btn">
              <button onClick={changePlan}>Save</button>
              <button onClick={closeEdit} className='cancel-btn'>Cancel</button>
            </div>
            
          </div>
        }
        
        
      </div>

      <div className="exercise-detail-tab" id='exercise-detail-window'>
        <div className="exercise-detail-content">
          <div className="close" onClick={closeExerciseDetail}>
            <div></div>
            <div></div>
          </div>
          <div className="exercise-img large">
            <img src={activeExercise.photoURL} alt="" />
          </div>
          <div className="exercise-instruction">
            <span>Instruction</span><small>{activeExercise.instruction}</small>
          </div>
        </div>
      </div>
      <div className='personal-plan'>
        <div className="back-btn" onClick={goBack}>
            <MdKeyboardArrowLeft />
        </div>
        <div className="personal-plan-title">
          <h2>{userData.plan.name}</h2>
          <div className="personal-plan-manage">
            
            <div className="manage-btn" onClick={openManage}>Manage Plan</div>
            {!userData.start_date ? <div className="start-btn" onClick={startPlan}>Start Plan</div> : 
            <div  className='start'> <div className="start-date">Started</div> <BiReset className='start-reset-icon' onClick={removePlan}/></div>}
          </div>
          
        </div>
        
        <div className="tabs">
        {
          schedule.map((item, index) => (
          <div>
            {typeof item === 'object'  ? 
            <div className='week-day-container'>
              <h3 className={activeTab === index ? 'week-day pressed' : 'week-day'} onClick={() => openTab(index)}>Day {item.session.day}</h3>
              <div className={activeTab === index ? 'tabs-content active-day' : 'tabs-content'} id={index}>
                <h4 className='type' onClick={() => openType(index+100*100, index+100*200)}>warm up <IoMdArrowDropup id={index+100*200} className='type-icon'/></h4>
                <ul className='type-item' id={index+100*100}>

                  
                  {
                    item.session.warm_up.map((w, i) => {

                      const instruction = w.instruction.substring(0,100)
                      

                      return (
                        <li className='exercise'> <div className="exercise-img"><img src={w.photoURL} alt="" /></div> 
                        <div className="exercise-details">
                          <div className="name">{w.name}</div>
                          <div className="rep-set">{w.Reps} reps | {w.Sets} set</div>
                        </div>
                        <div className="exercise-instruction">
                          <span>Instruction</span><small>{instruction} <small className='read-more' onClick={() => exerciseDetail(item.session.warm_up[i])}>...read more</small> </small>
                        </div> </li>
                      )
                    })
                  }
                </ul>

                <h4 className='type' onClick={() => openType(index+100*300, index+100*400)}>main workout <IoMdArrowDropup id={index+100*400} className='type-icon'/></h4>  
                <ul className='type-item' id={index+100*300}>
                  
                  
                  {
                    item.session.main_workout.map((w, i) => {

                      const instruction = w.instruction.substring(0,100)
                     
                      return (
                        <li className='exercise'> <div className="exercise-img"><img src={w.photoURL} alt="" /></div> 
                        <div className="exercise-details">
                          <div className="name">{w.name}</div>
                          <div className="rep-set">{w.Reps} reps | {w.Sets} set</div>
                        </div>
                        <div className="exercise-instruction">
                          <span>Instruction</span><small>{instruction}<small className='read-more' onClick={() => exerciseDetail(item.session.main_workout[i])}>...read more</small></small>
                        </div> </li>
                      )
                    })
                  }
                </ul>

                <h4 className='type' onClick={() => openType(index+100*500, index+100*600)}>cool down <IoMdArrowDropup id={index+100*600} className='type-icon'/></h4>  
                <ul className='type-item' id={index+100*500}>

                  
                  {
                    item.session.cool_down.map((w, i) => {

                      const instruction = w.instruction.substring(0,100)
                      
                      return (
                        <li className='exercise'> <div className="exercise-img"><img src={w.photoURL} alt="" /></div> 
                        <div className="exercise-details">
                          <div className="name">{w.name}</div>
                          <div className="rep-set">{w.Reps} reps | {w.Sets} set</div>
                        </div>
                        <div className="exercise-instruction">
                          <span>Instruction</span><small>{instruction}<small className='read-more' onClick={() => exerciseDetail(item.session.cool_down[i])}>...read more</small></small>
                        </div> </li>
                      )
                    })
                  }
                </ul>
              </div>
              
            </div>
            :
            <h3 className='rest'>{item}</h3> 
            }
            
          </div>
          ))
        }
        </div>  
      </div>
    </div>
    
  )
}
