import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp/SignUp";
import LogIn from "./components/LogIn/LogIn"
import Reset from "./components/Reset/Reset"
import Dashboard from "./components/Dashboard/DashBoard";
import HomePage from "./components/HomePage/HomePage";
import Profile from "./components/Dashboard/dashboardComponent/Profile";
import Workout from "./components/Dashboard/dashboardComponent/Workout";
import WorkoutLog from "./components/Dashboard/dashboardComponent/workoutLogCom/workoutLog";
import DashboardMain from "./components/Dashboard/dashboardComponent/dashboardMain/dashboardMain";
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
            <Route path="/login" element={<LogIn/>} />
            <Route path="/reset" element={<Reset/>} />
            <Route path="/signup" element={<SignUp/>} />
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/workoutLog" element={<WorkoutLog/>}/>
            <Route path="/recipes" element={<Recipes/>}/>
            <Route path="/*" element={<h1>ERROR 404: Page not found :&#40;</h1>}/>
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
