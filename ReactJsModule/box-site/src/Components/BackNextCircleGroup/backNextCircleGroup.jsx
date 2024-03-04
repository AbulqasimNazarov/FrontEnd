import React from "react";
import { ButtonBack } from "./ButtonBack/buttonBack";
import { ButtonNext } from "./ButtonNext/buttonNext";
import { CirclesBeetwenButton } from "./CirclesBeetwenButton/circlesBeetwenButton";



import './backNextCircleGroup.scss'

export const BackNextGroup = () => {
    return (
        <div className="back-next-circle-group">
            <ButtonBack/>
            <div className="circles-block">
                <CirclesBeetwenButton index="blue"/>
                <CirclesBeetwenButton/>
                <CirclesBeetwenButton/>
                <CirclesBeetwenButton/>
                <CirclesBeetwenButton/>
            </div>
            
            <ButtonNext/>
            
        </div>
    )
}