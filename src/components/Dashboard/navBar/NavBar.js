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

import React, { useState } from "react";
import { IconContext } from "react-icons"
import {FaArrowCircleLeft} from 'react-icons/fa'
import { SidebarData } from "./SliderbarData";
import "./navbar.css"
import { useAuth } from "../../contexts/AuthContext";
import { Avatar } from "@mui/material";
import {MdDarkMode} from 'react-icons/md'
import {BsFillSunFill} from 'react-icons/bs'

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
            // localStorage.removeItem('userData')
            navigate('/login')
        }catch(err) {
            console.log(err);
        }   
        
    }

    function hideNav() {
        document.getElementById('nav-bar').classList.toggle('inactive')
    }

    function lightmode() {
        const root = document.documentElement;
        root.style.setProperty('--primary-dropdown', 'rgba(225, 225, 225, .7)')
        root.style.setProperty('--primary-fade', 'black')
        root.style.setProperty('--primary-text', 'black')
        root.style.setProperty('--bg', '#CCD5AE')
        root.style.setProperty('--primary-variant', 'black')
        root.style.setProperty('--primary-dashboard', '#EDDBC7')
        root.style.setProperty('--primary-box', '#F2F3F0')
    }

    function darkmode() {
        const root = document.documentElement;
        root.style.setProperty('--primary-dropdown', 'rgba(0, 0, 0, .7)')
        root.style.setProperty('--primary-fade', 'lightyellow')
        root.style.setProperty('--primary-text', 'white')
        root.style.setProperty('--bg', 'black')
        root.style.setProperty('--primary-variant', '#a4fba6')
        root.style.setProperty('--primary-dashboard', '#1E1F1F')
        root.style.setProperty('--primary-box', '#d3d3d310')
    }

    return ( <>
    <IconContext.Provider value = {{ color: "undefined"}}>
        <nav id="nav-bar" className={sidebar ? "nav-menu" : 'nav-menu active'} > 
        
            <div className="toggle" onClick={showSideBar}>
                <FaArrowCircleLeft style={sidebar ? {transform: 'Rotate(0)'} : {transform: 'Rotate(180deg)'}}/> 
            </div>
            
            <ul className="nav-menu-items">
                <li className="avatar nav-text"><Avatar alt="ava" sx={{ width: 45, height: 45 }} src={currentUser.photoURL}/> <span className="user-name" style={sidebar ? {display: 'block'}:{display:'none'}}>{currentUser.displayName}</span></li>
                {SidebarData.map((item, index) => {
                    return (
                        <li key = {index} className={item.cName} >
                            <NavLink to={item.path} >
                                {item.icons}
                                <span className="items" >{item.title}</span>
                            </NavLink>
                        </li>
                    )
                })}
                <li className="log-out-btn" style={sidebar ? {display: 'block'}:{display:'none'}} onClick={handleLogOut}>Log Out</li>

                <div className="light-dark" >
                    <button className="light" onClick={lightmode} style={sidebar ? {display: 'flex'}:{display:'none'}}><BsFillSunFill/></button>
                    <button className="dark" onClick={darkmode} style={sidebar ? {display: 'flex'}:{display:'none'}}><MdDarkMode/></button>
                </div>
                
                <div className="burger-close" onClick={hideNav}>
                    <div></div>
                    <div className="sec"></div>
                    <div style={{marginBottom : '0'}}></div>
                </div>
            </ul>
            
        </nav>
</IconContext.Provider>
</>
)}


export default NavBar