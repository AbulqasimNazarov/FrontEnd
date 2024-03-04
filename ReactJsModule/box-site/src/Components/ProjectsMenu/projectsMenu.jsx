import React from "react";
import { ProjectsMenuItem } from "./ProjectsMenuItem/projectsMenuItem";
import Line from "../../Assets/IMG/RectangleProjects.png"

import './projectsMenu.scss'

export const ProjectsMenu = () => {
    return (
        <div className="projects-menu-items">
            <div className="projects-head">Projects</div>
            <ul className="projects-menu-items-ul">
                <div className="vertical-line-div">
                    <div className="vertical-img"><img src={Line}/></div>
                    <div className="item-all"><ProjectsMenuItem text="All" style="menu-item-all"/></div>
                    
                </div>
                
                <ProjectsMenuItem text="Commercial"/>
                <ProjectsMenuItem text="Residential"/>
                <ProjectsMenuItem text="Other"/>

            </ul>
        </div>
    )
}