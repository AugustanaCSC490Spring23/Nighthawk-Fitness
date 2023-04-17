import "./parseWorkout.css"
export default function ParseWorkout({userData}){

    function workoutSomethinglol(){
        
    }

    const stringDate1 = JSON.stringify(userData.workoutLogInfo.workoutDate)

    return (
        <div>
            <button>THIS COMPONNENT IS WORKING</button>
            <h1>Workout:</h1>
            <h2>{userData.workoutLogInfo.workoutName}</h2>
            <h1>Weight:</h1>
            <h2>{userData.workoutLogInfo.weight}</h2>
            <h1>Reps:</h1>
            <h2>{userData.workoutLogInfo.reps}</h2>
            <h1>Date:</h1>
            <h3>{stringDate1}</h3>
            
        </div>
    )
}

