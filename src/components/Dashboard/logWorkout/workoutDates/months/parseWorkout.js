import { db } from "../../../../Firebase/firebase";
import "./parseWorkout.css"
import { collection, query, where, getDocs } from "firebase/firestore";
export default function ParseWorkout({userData}){

    return (
        <div>
            
            
            <h2>{userData.allWorkouts?.map((workout, i) => (
            <div key={i} className="coolWorkoutThing">
                <h4>Date:</h4>
                <h5>{workout.date}</h5>
                <h4>Workout:</h4>
                <h5>{workout.name}</h5>
                <h4>Reps:</h4>
                <h5>{workout.reps}</h5>
                <h4>Weight:</h4>
                <h5>{workout.weight}</h5>
            </div>
            ))}</h2>
 
        </div>
    )
}

