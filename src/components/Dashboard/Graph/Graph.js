import React, {useState} from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
export default function Graph() {

    const today  = new  Date();
    const date = today.toDateString();
    const [userData, setUserData] = useState(() => {
        const savedUserData = localStorage.getItem('userData');
        return savedUserData ? JSON.parse(savedUserData) : null
    });

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
            'date': '4-1-2023',
            'value': '220'
        },
        {
            'date': '4-2-2023',
            'value': '160'
        },
        {
            'date': '4-3-2023',
            'value': '120'
        },
        {
            'date': '4-4-2023',
            'value': '190'
        },
        {
            'date': '4-5-2023',
            'value': '200'
        },
        {
            'date': '4-6-2023',
            'value': '170'
        },
        {
            'date': '4-7-2023',
            'value': '165'
        }
    ]

    const formatTooltip = (value, name, props) => {
        if (name === 'value') {
          return [`${value} lbs`, 'Weight']
        }
    }

  return (
    <div>
        <ResponsiveContainer height={420} width='100%' className='charts'>
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
    </div>
  )
}
