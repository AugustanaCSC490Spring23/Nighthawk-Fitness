import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Goal.css'
import { MdKeyboardArrowLeft } from 'react-icons/md'

export default function Goal() {

    const navigate = useNavigate();
    const [userData, setUserDate] = useState (() => {
        const savedUserDate= localStorage.getItem('userData');
        return savedUserDate ? JSON.parse(savedUserDate) : null
    });

    let goal = ''
    let cal = 0
    if (userData.information.goal === 'weight_loss') {
        goal = 'Lose Weight'
        cal = userData.dailyCal.lose_cal
    } else if (userData.information.goal === 'muscle_gain') {
        goal = 'Gain Muscle'
        cal = userData.dailyCal.gain_cal
    } else if (userData.information.goal === 'strength') {
        goal = 'Strength'
        cal = userData.dailyCal.maintain_cal
    } else if (userData.information.goal === 'overall_fitness') {
        goal = 'Overall Fitness'
        cal = userData.dailyCal.maintain_cal
    };

    function backBtn() {
        navigate(-1)
    }
   

    return (
        <div>
            <div className='container my-goal'>
                <div className='my-goal-content'>
                    <div className='my-goal-container'>
                        <div className='back-btn' onClick={backBtn}>
                            <MdKeyboardArrowLeft/>
                        </div>
                        <div className="goal-title">{userData.information.goal}</div>
                        <div className="goal-item">
                            <div className="goal-item-header">
                                <h3>Definition</h3>
                            </div>
                            <div className="goal-item-content def">
                                <small>{userData.goal_detail.definition}</small>
                            </div>
                        </div>

                        <div className="goal-item">
                            <div className="goal-item-header">
                                <h3>Benefits</h3>
                            </div>
                            <div className="goal-item-content">
                                <ul>
                                    {userData.goal_detail.benefit.map((item) =>  (
                                        <small>{item}</small>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="goal-item">
                            <div className="goal-item-header">
                                <h3>Training Principles</h3>
                            </div>
                            <div className="goal-item-content">
                                {userData.goal_detail.training_principle.map((item) => (
                                    <div className='goal-item-list'>
                                        <h4>{item.name}</h4>
                                        <div>
                                            <small>{item.def}</small>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="goal-item">
                            <div className="goal-item-header">
                                <h3>Tracking Progress</h3>
                            </div>
                            <div className="goal-item-content">
                                {userData.goal_detail.tracking_progress.map((item) => (
                                    <div className='goal-item-list'>
                                        <h4>{item.name}</h4>
                                        <div>
                                            <small>{item.def}</small>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="goal-item">
                            <div className="goal-item-header">
                                <h3>Supplementation</h3>
                            </div>
                            <div className="goal-item-content">
                                {userData.goal_detail.supplementation.map((item) => (
                                    <div className='goal-item-list'>
                                        <h4>{item.name}</h4>
                                        <div>
                                            <small>{item.def}</small>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

