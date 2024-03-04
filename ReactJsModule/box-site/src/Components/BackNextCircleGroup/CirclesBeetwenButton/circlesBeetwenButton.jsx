import React from "react";


import './circlesBeetwenButton.scss'

export const CirclesBeetwenButton = ({index}) => {
    if(index === "blue"){
        return (
            <div className={index}></div>
        )
    }
    return (
        <div className="circle-div"></div>
    )
}