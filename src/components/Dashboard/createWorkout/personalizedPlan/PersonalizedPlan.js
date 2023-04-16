import React,  {useState} from 'react'
import './personalizedplan.css'

export default function PersonalizedPlan({userData}) {
  
  const schedule  =  userData.plan.schedule;  
  const [activeTab, setActiveTab] = useState(0);
  function openTab(index) {
    // document.getElementById(index).classList.toggle('active-day')
    setActiveTab(index);
    
  }


  return (
    <div className="container">
      <div className='personal-plan'>
        <div className="personal-plan-title">
          <h2>{userData.plan.name}</h2>
          <h3>Duration</h3>
        </div>
        
        <div className="tabs">
        {
          schedule.map((item, index) => (
          <div>
            {typeof item === 'object'  ? 
            <div className={activeTab === index ? 'workout-day pressed' : 'workout-day'} onClick={() => openTab(index)}>
              <h3 className='week-day'>Day {item.session.day}</h3>
              <div className={activeTab === index ? 'tabs-content active-day' : 'tabs-content'} id={index}>
                <h4 className='type' onClick={() => openTab(index+10)}>warm up ({item.session.day})</h4>
                <ul className='type-item' id={index+10}>

                  
                  {
                    item.session.warm_up.map((w) => (
                      <li className='exercise'>{w}</li>
                    ))
                  }
                </ul>

                <h4 className='type' onClick={() => openTab(index+20)}>main workout</h4>  
                <ul className='type-item' id={index+20}>
                  
                  
                  {
                    item.session.main_workout.map((w) => (
                      <li className='exercise'>{w}</li>
                    ))
                  }
                </ul>

                <h4 className='type' onClick={() => openTab(index+30)}>cool down  </h4>  
                <ul className='type-item last' id={index+30}>

                  
                  {
                    item.session.cool_down.map((w) => (
                      <li className='exercise'>{w}</li> 
                    ))
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
