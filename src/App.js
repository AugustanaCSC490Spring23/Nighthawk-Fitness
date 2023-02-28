import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp/SignUp";
import LogIn from "./components/LogIn/LogIn"
import Reset from "./components/Reset/Reset"
import Dashboard from "./components/Dashboard/DashBoard";
import HomePage from "./components/HomePage/HomePage";
import ProtectedRoutes from "./ProtectedRoute";

function App() {
  return (
    
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage/>} />
          <Route path="/login" element={<LogIn/>} />
          <Route path="/reset" element={<Reset/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route element={<ProtectedRoutes/>}>
            <Route path="/dashboard" element={<Dashboard/>} />
          </Route>  
        </Routes>
      </Router>
    </div>
    
  );
}

export default App;
