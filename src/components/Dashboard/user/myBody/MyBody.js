import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './MyBody.css'
import {MdKeyboardArrowLeft} from 'react-icons/md'
import {MdOutlineAddCircle} from 'react-icons/md'
import { db } from '../../../Firebase/firebase';
import { updateDoc, doc, getDoc } from "firebase/firestore";
import {BsCheck} from 'react-icons/bs'

export default function MyBody() {

    const [isClick, setIsClick] = useState(false)

    const navigate = useNavigate();
    const [userData, setUserData] = useState(() => {
        const savedUserData = localStorage.getItem('userData');
        return savedUserData ? JSON.parse(savedUserData) : null
    });
    const [weightForm, setWeightForm] = useState(
        {
            w: '',
            date: ''
        }
    )

    function goBack()  {
        navigate(-1)
    }

    const today  = new  Date();
    const date = today.toDateString();

    function openLog()  {
        document.getElementById('wLog').classList.add('log-active')
    }

    function closeAddFood() {
        setIsClick(false)
        document.getElementById('wLog').classList.remove('log-active');
    }
    
    async function addWeight() {
        try {
            const updateW = [...userData.information.weight, weightForm];
            const currentDoc = doc(db, 'users', userData.docID);
            await updateDoc(currentDoc, {
                information: {
                    ...userData.information,
                    weight: updateW
                },
                bmi: [...userData.bmi, {
                    score: (703 * weightForm.w / (((parseInt(userData.information.height.ft * 12) + parseInt(userData.information.height.inch))*(parseInt(userData.information.height.ft * 12) + parseInt(userData.information.height.inch))))),
                    date: weightForm.date
                }]
            })
            setIsClick(true)
    
            const updateData = {
                ...userData,
                information: {
                    ...userData.information,
                    weight: updateW
                },
                bmi: [...userData.bmi, {
                    score: (703 * weightForm.w / (((parseInt(userData.information.height.ft * 12) + parseInt(userData.information.height.inch))*(parseInt(userData.information.height.ft * 12) + parseInt(userData.information.height.inch))))),
                    date: weightForm.date
                }]
            };
    
            setUserData(updateData);
            localStorage.setItem('userData', JSON.stringify(updateData))
        }catch(e) {
            console.log(e);
        } 
    }

  return (
    <div>
        <div className="container my-body">

            <div className="my-body-content">
                <div className="my-body-container">
                    <div className="back-btn" onClick={goBack}>
                        <MdKeyboardArrowLeft />
                    </div>
                    <div className="biometric-data">
                        <div className="title">biometric data</div>
                        <div className="user-content">
                            <div className="content-group">
                                <div className="user-detail">
                                    <div className="user-detail-title">Age</div>
                                    <div className="user-detail-data">{userData.information.age}</div>
                                </div>
                                <div className="user-detail">
                                    <div className="user-detail-title">gender</div>
                                    <div className="user-detail-data">{userData.information.gender}</div>
                                </div>
                            </div>
                            <div className="content-group">
                                <div className="user-detail">
                                    <div className="user-detail-title">height</div>
                                    <div className="user-detail-data">{userData.information.height.ft}'{userData.information.height.inch}''</div>
                                </div>
                                <div className="user-detail">
                                    <div className="user-detail-title">weight</div>
                                    <div className="user-detail-data">{userData.information.weight[userData.information.weight.length-1].w} lbs</div>
                                </div>
                            </div>

                            <div className="log-weight">
                                <div className="log-weight-title">Log weight</div>
                                <MdOutlineAddCircle className='log-weight-icon' id='log-w-icon' onClick={openLog}/>
                            </div>
                            
                        </div>
                        
                    </div>
                    
                </div>
                
            </div>
            <div id='wLog' className="log-weight-container">
                <div className="close" onClick={closeAddFood}>
                    <div></div>
                    <div></div>
                </div>
                <div className="new-weight">
                    <h3>New Weight</h3>
                    <input type="text" onChange={(e) => {
                        setWeightForm({ ...weightForm, w: e.target.value});
                    }}/>
                </div>
                <div className="weight-date">
                    <h3>Date</h3>
                    <input type="text" placeholder='MM/DD/YY' onChange={(e) => {
                        setWeightForm({ ...weightForm, date: e.target.value});
                    }}/>
                </div>
                {isClick && <div className="success"><BsCheck className='success-icon'/> Added new weight</div>}
                <button onClick={addWeight}>Add</button>
            </div>

        </div>

    </div>
  )
}
