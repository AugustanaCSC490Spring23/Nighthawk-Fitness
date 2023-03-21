import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp/SignUp";
import About from "./components/About/About"
import LogIn from "./components/LogIn/LogIn"
import Reset from "./components/Reset/Reset"
import Dashboard from "./components/Dashboard/DashBoard";
import HomePage from "./components/HomePage/HomePage";
import Profile from "./components/Dashboard/dashboardComponent/Profile";
import Workout from "./components/Dashboard/dashboardComponent/Workout";
import DashboardMain from "./components/Dashboard/dashboardComponent/dashboardMain/dashboardMain";
import ProtectedRoutes from "./ProtectedRoute";
import { AuthProvider } from "./components/contexts/AuthContext";
import './app.css'
import WorkoutLog from "./components/Dashboard/dashboardComponent/workoutLog";
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
                <Route index element={<DashboardMain/>} />
                <Route path="profile" element={<Profile/>} />
                <Route path="workout" element={<Workout/>} />
                <Route path="workoutLog" element={<WorkoutLog/>} />
                
              </Route>
            </Route>  
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
    
    
  );
}

export default App;
