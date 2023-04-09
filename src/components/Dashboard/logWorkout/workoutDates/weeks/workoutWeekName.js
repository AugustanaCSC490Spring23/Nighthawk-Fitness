import React, {useEffect, useState} from 'react'
export default function WorkoutWeekName(props) {

    const[monthName, setMonthName] = useState("")
    const[visibility, setVisibility]=useState(false)

    function handleChange(event){
        setMonthName(event.target.value)
    }

    function monthNamer(){
        setVisibility(true)
    }
    
    return(<>
        {props.name}
        </>)
}