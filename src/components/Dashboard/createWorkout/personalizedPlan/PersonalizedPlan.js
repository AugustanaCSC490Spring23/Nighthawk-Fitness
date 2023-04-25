import React,  {useState} from 'react'
import './personalizedplan.css'
import { useNavigate } from 'react-router-dom';
import {MdKeyboardArrowLeft} from 'react-icons/md'

export default function PersonalizedPlan({userData}) {
  
  const schedule  =  userData.plan.schedule;  
  const [activeTab, setActiveTab] = useState(0);
  const [activeType, setActiveType] = useState(0);
  const navigate = useNavigate();
  function openTab(index) {
    // document.getElementById(index).classList.toggle('active-day')
    setActiveTab(index);
    
  }

  function openType(index) {
    setActiveType(index)
  }
  
  function goBack()  {
    navigate(-1)
  }

  return (
    <div className="container">
      <div className='personal-plan'>
        <div className="back-btn" onClick={goBack}>
            <MdKeyboardArrowLeft />
        </div>
        <div className="personal-plan-title">
          <h2>{userData.plan.name}</h2>
          <h3>Duration: <small>4 weeks</small></h3>
        </div>
        
        <div className="tabs">
        {
          schedule.map((item, index) => (
          <div>
            {typeof item === 'object'  ? 
            <div className={activeTab === index ? 'workout-day pressed' : 'workout-day'} onClick={() => openTab(index)}>
              <h3 className='week-day'>Day {item.session.day}</h3>
              <div className={activeTab === index ? 'tabs-content active-day' : 'tabs-content'} id={index}>
                <h4 className='type' onClick={() => openType(index+10)}>warm up</h4>
                <ul className={activeType === index+10 ? 'type-item active-type-item' : 'type-item'} id={index+10}>

                  
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

                <h4 className='type' onClick={() => openType(index+20)}>main workout</h4>  
                <ul className={activeType === index+20 ? 'type-item active-type-item' : 'type-item'} id={index+20}>
                  
                  
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

                <h4 className='type' onClick={() => openType(index+30)}>cool down  </h4>  
                <ul className={activeType === index+30 ? 'type-item last active-type-item' : 'type-item last'} id={index+30}>

                  
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
