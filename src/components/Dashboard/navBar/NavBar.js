/***************************************************************************************
*    Citation:
*    Title: React Sidebar With Dropdown
*    Author: Brian Design
*    Date: 3/5/2023
*    Code version: 1.0
*    Availability: https://www.codavilla.com/posts/build-a-react-sidebar-with-dropdown-menu
*    Youtube tutorial for NavBar logic, inserting/styling icons
***************************************************************************************/
import { NavLink } from "react-router-dom"

import React, { useEffect, useState } from "react";
import { IconContext } from "react-icons"
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import { SidebarData } from "./SliderbarData";
import "./navbar.css"
function NavBar(){

    const[sidebar,setSidebar] = useState(false)

    const showSideBar = () => {
        setSidebar(!sidebar)
    }

    return ( <>
    <IconContext.Provider value = {{ color: "undefined"}}>
        <div className="navbar">
        <NavLink to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSideBar} />
        </NavLink>
    </div>
    <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSideBar}>
            <li className="navbar-toggle">
                <NavLink to="#" className="menu-bars">
                    <AiIcons.AiOutlineClose />
                </NavLink>
            </li>
            {SidebarData.map((item, index) => {
                return (
                    <li key = {index} className={item.cName}>
                        <NavLink to={item.path}>
                            {item.icons}
                            <span>{item.title}</span>
                        </NavLink>
                    </li>
                )
            })}
        </ul>
    </nav>
</IconContext.Provider>
</>
)}


export default NavBar