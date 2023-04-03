import "./workoutweek.css"
export default function WorkoutWeek(props){

    const [workoutWeekData, setWorkoutWeekData] =
    useState([])

    function addWeek(){
        
    }





    return( <>
    <div><button onClick={createWeek}>Add week</button>
    <h1>{props.name}</h1> 
    {workoutWeekData.map((workoutWeekData) => workoutWeekData)}
    </div>
    </>
    )
}