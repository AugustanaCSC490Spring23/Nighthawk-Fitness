import React,  {useState} from 'react'
import './personalizedplan.css'
import { useNavigate } from 'react-router-dom';
import {MdKeyboardArrowLeft} from 'react-icons/md'
import {IoMdArrowDropup} from 'react-icons/io'
import {RiEditCircleFill} from 'react-icons/ri'

export default function PersonalizedPlan({userData}) {
  
  const schedule  =  userData.plan.schedule;  
  const [activeTab, setActiveTab] = useState(0);
  const [activeType, setActiveType] = useState(0);
  const navigate = useNavigate();
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

  return (
    <div className="container">
      <div className="manage-plan-tab" id='manage-tab'>
        <div className="close" onClick={closeManage}>
          <div></div>
          <div></div>
        </div>
        <div className="manage-plan-content">
          <div className="manage-plan-item">
            <h3> <span className='item-title'>Experience Level</span> <span className='item-details'>{userData.personal_preference.experience_level}</span><RiEditCircleFill className='edit-icon'/></h3>
          </div>
          <div className="manage-plan-item">
            <h3> <span className='item-title'>Sessions per week</span> <span className='item-details'>{userData.personal_preference.workout_time}</span><RiEditCircleFill className='edit-icon'/></h3>
          </div>
          <div className="manage-plan-item">
            <h3> <span className='item-title'>Duration</span> <span className='item-details'>4 weeks</span></h3>
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
          </div>
          
        </div>
        
        <div className="tabs">
        {
          schedule.map((item, index) => (
          <div>
            {typeof item === 'object'  ? 
            <div className={activeTab === index ? 'workout-day pressed' : 'workout-day'} onClick={() => openTab(index)}>
              <h3 className='week-day'>Day {item.session.day}</h3>
              <div className={activeTab === index ? 'tabs-content active-day' : 'tabs-content'} id={index}>
                <h4 className='type' onClick={() => openType(index+10, index+11)}>warm up <IoMdArrowDropup id={index+11} className='type-icon'/></h4>
                <ul className='type-item' id={index+10}>

                  
                  {
                    item.session.warm_up.map((w) => {

                      const instruction = w.instruction.substring(0,100)  + '... read more'
                      return (
                        <li className='exercise'> <div className="exercise-img"><img src={w.photoURL} alt="" /></div> 
                        <div className="exercise-details">
                          <div className="name">{w.name}</div>
                          <div className="rep-set">2 reps | 1 set</div>
                        </div>
                        <div className="exercise-instruction">
                          <span>Instruction</span><small>{instruction}</small>
                        </div> </li>
                      )
                    })
                  }
                </ul>

                <h4 className='type' onClick={() => openType(index+20, index+21)}>main workout <IoMdArrowDropup id={index+21} className='type-icon'/></h4>  
                <ul className='type-item' id={index+20}>
                  
                  
                  {
                    item.session.main_workout.map((w) => {

                      const instruction = w.instruction.substring(0,100)  + '... read more'
                      return (
                        <li className='exercise'> <div className="exercise-img"><img src={w.photoURL} alt="" /></div> 
                        <div className="exercise-details">
                          <div className="name">{w.name}</div>
                          <div className="rep-set">2 reps | 1 set</div>
                        </div>
                        <div className="exercise-instruction">
                          <span>Instruction</span><small>{instruction}</small>
                        </div> </li>
                      )
                    })
                  }
                </ul>

                <h4 className='type' onClick={() => openType(index+30, index+31)}>cool down <IoMdArrowDropup id={index+31} className='type-icon'/></h4>  
                <ul className='type-item' id={index+30}>

                  
                  {
                    item.session.cool_down.map((w) => {

                      const instruction = w.instruction.substring(0,100)  + '... read more'
                      return (
                        <li className='exercise'> <div className="exercise-img"><img src={w.photoURL} alt="" /></div> 
                        <div className="exercise-details">
                          <div className="name">{w.name}</div>
                          <div className="rep-set">2 reps | 1 set</div>
                        </div>
                        <div className="exercise-instruction">
                          <span>Instruction</span><small>{instruction}</small>
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
