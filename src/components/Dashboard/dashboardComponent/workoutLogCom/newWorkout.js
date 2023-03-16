import "./workoutLog.css"
function NewWorkout(){
    return <>
    <h1>Add a new Workout</h1>
    <form>
        <label>Workout</label>
        <input type="text" required></input>
        <label>Weight</label>
        <input type="text" required></input>
        <label>How many Rep</label>
        <input type="text" required></input>
    </form>
    </>
}

class Workouts{
    constructor(workoutName, workoutCount, weight,
        reps){
            this.workoutName = workoutName
            this.workoutCount = workoutCount
            this.weight = weight
            this.reps = reps
        }
}

export default NewWorkout