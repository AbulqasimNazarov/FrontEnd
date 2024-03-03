import React from "react";

import Rectangle from '../../../Assets/IMG/RectangleExperience.png'

import './experinceItem.scss'

export const ExperienceItem = ({icon, number, description, styleIcon, styleItem}) => {
    return (
        <div className={styleItem}>
            <div className="number-icon">
                <div className="number-experience">{number}</div>
                <div className={styleIcon}><img src={icon}/></div>
            </div>
            
            <div className="description-icon">
                <div className="line-horizont"><img src={Rectangle}/></div>
                <div className="description-experience">{description}</div>
            </div>

        </div>
    )
}