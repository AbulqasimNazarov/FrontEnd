import React from "react";

import Line from '../../Assets/IMG/Rectangle.png'

import './servicesItem.scss'


export const ServicesItem = ({icon, description, style}) => {
    return (
        <div className={style}>
            <div className="icon-img"><img src={icon}/></div>
            <div className="line-img"><img src={Line}/></div>
            
            <div className="description">{description}</div>
            
        </div>
    )
}