import { Link } from "react-router-dom"
import React, { useEffect, useState } from "react";
import { IconContext } from "react-icons"
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import * as IoIcons from "react-icons/io"

 export const SidebarData = [
    {
        title:"Dashboard",
        path: "dashMain",
        icons: <AiIcons.AiFillHome className="nav-icons"/>,
        cName: "nav-text",
    },
    {
        title:"Profile",
        path: "profile",
        icons: <IoIcons.IoIosPerson className="nav-icons"/>,
        cName: "nav-text",
    },
    {
        title: "Workouts",
        path: "workout",
        icons: <IoIcons.IoIosJournal className="nav-icons"/>,
        cName: "nav-text"
    },
    {
        title: "Recipes",
        path: "/recipes",
        icons: <FaIcons.FaHotdog className="nav-icons"/>,
        cName: "nav-text"
    },
    
]