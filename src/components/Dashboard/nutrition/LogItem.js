import React from 'react'
import {MdAddCircle} from 'react-icons/md'
import {MdCancel} from 'react-icons/md'


export default function LogItem({title, onDelete, onPress, array}) {

  return (
    <div>
        <div className="log-item">
            <div className={title.toLowerCase()}><h3>{title}</h3> <MdAddCircle className="log-food-icon" id={title} onClick={onPress}/></div>
            <div className="item">
                <ul>
                    {array.map((item,i) => (
                    <div className="food-selected">
                        <li key={item} id={i}>{item.food_name}<span className='food-selected-calories'>{Math.round((item.nf_calories)*100/100)}cal</span></li>
                        <MdCancel onClick={() => onDelete(i)}/>
                    </div>
                    
                    ))}
                </ul>
            </div>
        </div>
    </div>
  )
}
