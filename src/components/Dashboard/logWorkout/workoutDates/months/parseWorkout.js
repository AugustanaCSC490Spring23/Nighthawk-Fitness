import { db } from "../../../../Firebase/firebase";
import "./parseWorkout.css"
import { collection, query, where, getDocs } from "firebase/firestore";
export default function ParseWorkout({userData}){

    
    const arr = []

    return (
        <div>
            
            
            <h2>{userData.arrayOfWorkouts?.map((workout, i) => (
            <div key={i}>
                <h1>Workout:</h1>
                <h1>{workout.name}</h1>
                <h1>{workout.reps}</h1>
                <h1>{workout.weight}</h1>
            </div>
            ))}</h2>
 
        </div>
    )
}

