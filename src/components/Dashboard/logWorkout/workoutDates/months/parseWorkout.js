import { db } from "../../../../Firebase/firebase";
import "./parseWorkout.css"
import { collection, query, where, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";
import StyledWorkout from "./styledWorkout";

export default function ParseWorkout({userData}){

    function slicer(nameToSlice){
        return nameToSlice.slice(0, 10)
    }

    var counter = 0
    const [indexer, setIndex] = useState(0)





    const [render, reRender] = useState(true)

    const [arrayToRender, reRenderArr] = useState([])

    function addCount(){
        counter = counter + 1
        console.log("Function: ", counter)
    }

    useEffect(() => {
        reRender(!render)
        console.log(counter)
    }, [])

    return (
        <div className="workoutObj">
            <>{userData.allWorkouts?.map((workout, index) => {
                return(
            <div key={index *2} className="coolWorkoutThing">
                {console.log(index)}
                <StyledWorkout
                    date={workout.date}
                    name={workout.name}
                    reps={workout.reps}
                    weight={workout.weight}/>
            </div>
                );})}
            </>
        </div>
    )
}

