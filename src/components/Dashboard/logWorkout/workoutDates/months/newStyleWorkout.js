import React, { useState, useEffect } from "react";

const NewStyleWorkout= ({workout1}) => {

    const [arrDates, setArrDates] = useState([])

    const [currentDate, setCurrDate] = useState("")

    return (
        <div className="coolWorkoutThing">
            <h1> {workout1.date} :</h1>
            </div>
    )
}

export default NewStyleWorkout
