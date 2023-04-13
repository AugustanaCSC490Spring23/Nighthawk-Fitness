import React,  {useState} from 'react'
import './personalizedplan.css'

export default function PersonalizedPlan({userData}) {
  
  const schedule  =  userData.plan.schedule;  

  function openTab(index) {
    document.getElementById(index).classList.toggle('active-day')
    
  }
  
  // console.log(plan);
  return (
    <div className="container">
      <div className='personal-plan'>
        <h2>{userData.plan.name}</h2>
        {
          schedule.map((item, index) => (
          <div>
            {typeof item === 'object'  ? 
            <div className='workout-day' id={index}>
              <h3 className='week-day' onClick={() => openTab(index)}>Day {item.session.day}</h3>

              <h4 className='type' onClick={() => openTab(index+10)}>warm up ({item.session.warm_up.length})</h4>
              <ul className='type-item' id={index+10}>

                
                {
                  item.session.warm_up.map((w) => (
                    <li className='exercise'>{w}</li>
                  ))
                }
              </ul>

              <h4 className='type' onClick={() => openTab(index+20)}>main workout({item.session.main_workout.length})</h4>  
              <ul className='type-item' id={index+20}>
                
                
                {
                  item.session.main_workout.map((w) => (
                    <li className='exercise'>{w}</li>
                  ))
                }
              </ul>

              <h4 className='type' onClick={() => openTab(index+30)}>cool down ({item.session.cool_down.length})</h4>  
              <ul className='type-item last' id={index+30}>

                
                {
                  item.session.cool_down.map((w) => (
                    <li className='exercise'>{w}</li>
                  ))
                }
              </ul>
            </div>
            :
            <h3 className='rest'>{item}</h3> 
            }
            
          </div>
          ))
        }
      </div>
    </div>
    
  )
}
