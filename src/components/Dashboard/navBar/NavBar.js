/***************************************************************************************
*    Citation:
*    Title: React Sidebar With Dropdown
*    Author: Brian Design
*    Date: 3/5/2023
*    Code version: 1.0
*    Availability: https://www.codavilla.com/posts/build-a-react-sidebar-with-dropdown-menu
*    Youtube tutorial for NavBar logic, inserting/styling icons
***************************************************************************************/
import { NavLink, useNavigate } from "react-router-dom"

import React, { useEffect, useState } from "react";
import { IconContext } from "react-icons"
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import {FiMinimize2} from 'react-icons/fi'
import { SidebarData } from "./SliderbarData";
import "./navbar.css"
import { useAuth } from "../../contexts/AuthContext";
import { Avatar } from "@mui/material";

function NavBar(){

    const {currentUser} = useAuth();

    const {logout} = useAuth();

    const navigate = useNavigate();

    const[sidebar,setSidebar] = useState(true) 

    const showSideBar = () => {
        setSidebar(!sidebar)
    }

    async function handleLogOut() {
        try {
            await logout()
            navigate('/login')
        }catch(err) {
            console.log(err);
        }   
        
    }

    return ( <>
    <IconContext.Provider value = {{ color: "undefined"}}>
        <nav className={sidebar ? "nav-menu" : 'nav-menu active'}>
            <div className="toggle">
                <FiMinimize2 onClick={showSideBar}/> 
            </div>
            <ul className="nav-menu-items">
               <NavLink to={("profile")}><button className="profile-btn"><li className="avatar nav-text"><Avatar sx={{ bgcolor: 'orange' }}> {currentUser.displayName.substring(0,1).toUpperCase()}</Avatar> <span className="user-name" style={sidebar ? {display: 'block'}:{display:'none'}}>{currentUser.displayName}</span></li></button></NavLink> 
                {SidebarData.map((item, index) => {
                    return (
                        <li key = {index} className={item.cName}>
                            <NavLink to={item.path}>
                                {item.icons}
                                <span className="items" style={sidebar ? {display: 'block'}:{display:'none'}}>{item.title}</span>
                            </NavLink>
                        </li>
                    )
                })}
                <li className="log-out-btn" style={sidebar ? {display: 'block'}:{display:'none'}} onClick={handleLogOut}>Log Out</li>
            </ul>
        </nav>
</IconContext.Provider>
</>
)}


export default NavBar