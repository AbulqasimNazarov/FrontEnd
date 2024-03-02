import React from "react";
import AboutUsPerson from "../../Assets/IMG/aboutUsMan2.png"

import './thirdBlock.scss'
import { AboutUs } from "../AboutUs/aboutUs";


export const ThirdBlock = () => {
    return (
        <div className="third-block-inner">
            <div className="person-img">
                <img src={AboutUsPerson}/>
            </div>
            
            <div className="about-us-div"><AboutUs /></div>
            
            

        </div>
    )
}