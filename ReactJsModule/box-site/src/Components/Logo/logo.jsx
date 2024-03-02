import React from "react";
import LogoPicture from "../../Assets/IMG/RandomSymboles3.png"
import LogoText from "../../Assets/IMG/TheBox.png"
import './logoStyle.scss'



export const Logo = () => {
    return (
        <div>
            <span><a href="#"><img src={LogoPicture}/><img src={LogoText} className="text-logo"/></a></span>
        </div>
    )
}