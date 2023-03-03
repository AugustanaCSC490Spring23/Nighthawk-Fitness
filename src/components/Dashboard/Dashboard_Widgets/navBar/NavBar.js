import { Link } from "react-router-dom"
import "../../dashboard.css";
import React, { useEffect, useState } from "react";

function NavBar(){
    return (
        <div className="navBar1">
    <h3>This is a NavBar</h3>
    <h3>Other content etc</h3>
    <Link to="/profile"><button className="profile_btn2">Profile</button></Link>
    <Link to="/workoutLog"><button className="workout_btn2">Workout Log</button></Link>
    </div>
    )
}

export default NavBar