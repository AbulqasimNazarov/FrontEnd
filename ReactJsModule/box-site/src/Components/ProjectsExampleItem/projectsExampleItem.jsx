import React from "react";

import './projectsExampleItem.scss'

export const ProjectsItem = ({image, head, description}) => {
    return (
        <div className="item-project">
            <div className="image"><img src={image}/></div>
            <div className="under-image">
                <div className="item-project-head">{head}</div>
                <div className="item-project-description">{description}</div>
            </div>
            

        </div>
    )
}