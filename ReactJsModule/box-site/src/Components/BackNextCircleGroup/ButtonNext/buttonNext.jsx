import React from "react";

import Vector2 from '../../../Assets/IMG/Vector2.png'

import './buttonNext.scss'

export const ButtonNext = () => {
    return (
        <div className="next-button">
            <button className="button-text-next">Next</button>
            <div className="img-strelka2"><img src={Vector2}/></div>
            
        </div>
    )
}