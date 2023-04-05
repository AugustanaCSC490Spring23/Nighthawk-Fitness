import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp/SignUp";
import LogIn from "./components/LogIn/LogIn"
import Reset from "./components/Reset/Reset"
import Dashboard from "./components/Dashboard/DashBoard";
import HomePage from "./components/HomePage/HomePage";
import Profile from "./components/Dashboard/Profile";
import Workout from "./components/Dashboard/Workout";
import NutritionCheck from "./components/Dashboard/nutrition/NutritionCheck";
import DashboardMain from "./components/Dashboard/dashboardMain/DashboardMain";
import Lobby from "./components/Dashboard/Lobby/Lobby";
import About from "./components/HomePage/about/About";
import WorkoutLog from "./components/Dashboard/logWorkout/workoutLog";
import MyBody from "./components/Dashboard/user/myBody/MyBody";
import ProtectedRoutes from "./ProtectedRoute";
import PersonalizedPlan from "./components/Dashboard/createWorkout/personalizedPlan/PersonalizedPlan";
import Loading from "./components/Dashboard/createWorkout/loading";
import { AuthProvider } from "./components/contexts/AuthContext";
import './app.css'
import CreatePlan from "./components/Dashboard/createWorkout/CreatePlan";
function App() {
  return (
    
    <div>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route exact path="/" element={<HomePage/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/login" element={<LogIn/>} />
            <Route path="/reset" element={<Reset/>} />
            <Route path="/signup" element={<SignUp/>} />
            <Route element={<ProtectedRoutes/>}>
              <Route path="/dashboard" element={<Dashboard/>}>
                <Route index element={<Lobby/>} />
                <Route path="main" element={<DashboardMain/>} />

                <Route path="profile" element={<Profile/>} />
                <Route path="profile/mybody" element={<MyBody/>} />

                <Route path="workout" element={<Workout/>} />
                <Route path="workout/workoutplan" element={<CreatePlan/>} />
                <Route path="workout/workoutplan/loading" element={<Loading/>} />
                
                <Route path="workout/log" element={<WorkoutLog/>} />

                <Route path="nutrition"  element={<NutritionCheck/>} />
              </Route>
            </Route>  
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
    
    
  );
}

export default App;
