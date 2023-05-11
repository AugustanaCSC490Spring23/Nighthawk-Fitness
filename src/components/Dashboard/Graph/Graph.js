import React, {useState} from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './graph.css'
export default function Graph() {

    const [graph, setGraph] = useState('weight')
    const today  = new  Date();
    const date = today.toDateString();
    const [userData, setUserData] = useState(() => {
        const savedUserData = localStorage.getItem('userData');
        return savedUserData ? JSON.parse(savedUserData) : null
    });

    const dataW = userData.information.weight;
    const dataBMI = userData.bmi;

    const formatTooltipW = (value, name, props) => {
        if (name === 'w') {
          return [`${value} lbs`, 'Weight']
        }
    }

    const formatTooltipBMI = (value, name, props) => {
        if (name === 'score') {
          return [`${Math.round(value*100)/100}`, 'BMI Score']
        }
    }

    function changeWGraph() {
        setGraph('weight')
    }

    function changeBMIGraph() {
        setGraph('bmi')
    }

  return (
    <div>
        <ResponsiveContainer height={386} width='100%' className='charts'>
            
            {graph === 'bmi' ? 
            <AreaChart data={dataBMI} className='weight-chart'>
                <defs>
                    <linearGradient  id='color' x1='0' y1='0' x2='0' y2='1'>
                        <stop offset='10%' stopColor='#FF55BB'  stopOpacity={0.5}/>
                        <stop offset='95%' stopColor='black'  stopOpacity={0.09}/>

                    </linearGradient>
                </defs>
                <CartesianGrid opacity={.05} vertical={true}/>
                <XAxis dataKey="date" axisLine={false} tickLine={false}/>
                <YAxis dataKey='score' axisLine={false} tickLine={false}/>
                <Tooltip formatter={formatTooltipBMI} contentStyle={{backgroundColor: 'black'}} itemStyle={{ color: '#FF55BB' }}/>
                <Area dataKey="score" stroke="#FF55BB" fill='url(#color)' />
            </AreaChart>
            :
            <AreaChart data={dataW} className='weight-chart'>
                <defs>
                    <linearGradient  id='color' x1='0' y1='0' x2='0' y2='1'>
                        <stop offset='10%' stopColor='#a4fba6'  stopOpacity={0.5}/>
                        <stop offset='95%' stopColor='black'  stopOpacity={0.09}/>

                    </linearGradient>
                </defs>
                <CartesianGrid opacity={.05} vertical={true}/>
                <XAxis dataKey="date" axisLine={false} tickLine={false}/>
                <YAxis dataKey='w' axisLine={false} tickLine={false}/>
                <Tooltip formatter={formatTooltipW} contentStyle={{backgroundColor: 'black'}} itemStyle={{ color: '#a4fba6' }}/>
                <Area dataKey="w" stroke="#a4fba6" fill='url(#color)' />
            </AreaChart>
            }
            
        </ResponsiveContainer>
        <div className="toggle-button">
            <button onClick={changeWGraph}>Weight</button>
            <button className='bmi-btn' onClick={changeBMIGraph}>BMI</button>
        </div>
    </div>
  )
}
