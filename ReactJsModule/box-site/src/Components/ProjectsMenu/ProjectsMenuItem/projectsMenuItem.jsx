import React from "react";

import './projectsMenuItem.scss'

export const ProjectsMenuItem = ({text, style}) => {
    if(text != "All"){
        style = "menu-item";
    }
    return (
        <li className="menu-item">
            <a href="#" className={style}>{text}</a>
        </li>
    )
}