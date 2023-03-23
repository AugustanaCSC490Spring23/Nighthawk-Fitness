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
import ProtectedRoutes from "./ProtectedRoute";
import { AuthProvider } from "./components/contexts/AuthContext";
import './app.css'
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
                <Route path="workout" element={<Workout/>} />
               
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
