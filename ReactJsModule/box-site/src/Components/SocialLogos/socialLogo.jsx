import React from "react";

import './socialLogo.scss'

export const SocialLogo = ({socialLogo}) => {
    return (
        <div className="logo-img">
            
            <img src={socialLogo}/>
        </div>
    )
}