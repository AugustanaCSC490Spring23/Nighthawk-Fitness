import "./styledWorkout.css"
const StyledWorkout = ({date, name, reps, weight}) => {

    function slicer(nameToSlice){
        var name1 = JSON.stringify(nameToSlice)
        name1.slice(0, 10)
        console.log("Name", name1)
        return name1
    }

    return (
        <div className="coolWorkoutThing">
                <h4>Date:</h4>
                <h5>{slicer(date)}</h5>
                <h4>Workout:</h4>
                <h5>{name}</h5>
                <h4>Reps:</h4>
                <h5>{reps}</h5>
                <h4>Weight:</h4>
                <h5>{weight}</h5>
            </div>
    )
}

export default StyledWorkout
