import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp/SignUp";
import LogIn from "./components/LogIn/LogIn"
import Reset from "./components/Reset/Reset"
import Dashboard from "./components/Dashboard/DashBoard";
import HomePage from "./components/HomePage/HomePage";
import ProtectedRoutes from "./ProtectedRoute";
import { AuthProvider } from "./components/contexts/AuthContext";
import Profile from "./components/Dashboard/Dashboard_Widgets/Profile";
import WorkoutLog from "./components/Dashboard/Dashboard_Widgets/WorkoutLog";
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
            <Route path="/*" element={<h1>ERROR 404: Page not found :&#40;</h1>}/>
            <Route element={<ProtectedRoutes/>}>
              <Route path="/dashboard" element={<Dashboard/>} />
            </Route>  
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
    
    
  );
}

export default App;
