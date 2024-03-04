import React from "react";
import Vector1 from '../../../Assets/IMG/Vector1.png'


import './buttonBack.scss'

export const ButtonBack = () => {
    return (
        <div className="back-button">
            <div className="img-strelka1"><img src={Vector1}/></div>
            
            <button className="button-text-back">Back</button>
        </div>
    )
}