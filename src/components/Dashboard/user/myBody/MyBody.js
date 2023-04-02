import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './MyBody.css'
import {MdKeyboardArrowLeft} from 'react-icons/md'
import {MdOutlineAddCircle} from 'react-icons/md'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function MyBody() {

    const navigate = useNavigate();
    const [userData, setUserData] = useState(() => {
        const savedUserData = localStorage.getItem('userData');
        return savedUserData ? JSON.parse(savedUserData) : null
    });

    function goBack()  {
        navigate(-1)
    }

    const today  = new  Date();
    const date = today.toDateString();

    const data  = [
        {
            'date': date,
            'value': userData.information.weight
        },
        {
            'date': '3-31-2023',
            'value': '190'
        },
        {
            'date': '3-32-2023',
            'value': '220'
        },
        {
            'date': '3-33-2023',
            'value': '160'
        },
        {
            'date': '3-34-2023',
            'value': '120'
        },
        {
            'date': '3-35-2023',
            'value': '190'
        },
        {
            'date': '3-36-2023',
            'value': '200'
        },
        {
            'date': '3-37-2023',
            'value': '170'
        },
        {
            'date': '3-38-2023',
            'value': '165'
        }
    ]

    const formatTooltip = (value, name, props) => {
        if (name === 'value') {
          return [`${value} lbs`, 'Weight']
        }
    }

    console.log(data[data.length-1].value);

    function openLog()  {
        document.getElementById('wLog').classList.add('log-active')
    }

    function closeAddFood() {
        document.getElementById('wLog').classList.remove('log-active');
    }

  return (
    <div>
        <div className="container my-body">

            <div className="my-body-content">
                <ResponsiveContainer height={750} width='100%' className='charts'>
                    <AreaChart data={data}>
                        <defs>
                            <linearGradient  id='color' x1='0' y1='0' x2='0' y2='1'>
                                <stop offset='10%' stopColor='#a4fba6'  stopOpacity={0.5}/>
                                <stop offset='95%' stopColor='lightyellow'  stopOpacity={0.09}/>

                            </linearGradient>
                        </defs>
                        <CartesianGrid opacity={.1} vertical={false}/>
                        <XAxis dataKey="date" />
                        <YAxis dataKey='value' axisLine={false} tickLine={false}/>
                        <Tooltip formatter={formatTooltip} contentStyle={{backgroundColor: 'black'}} itemStyle={{ color: '#a4fba6' }}/>
                        <Area dataKey="value" stroke="#a4fba6" fill='url(#color)' />
                    </AreaChart>
                </ResponsiveContainer>
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
                                    <div className="user-detail-data">{userData.information.weight}lbs</div>
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
                    <input type="text" />
                </div>
                <div className="weight-date">
                    <h3>Date</h3>
                    <input type="text" />
                </div>
                <button>Add</button>
            </div>

        </div>

    </div>
  )
}
