import React from "react";

import './subscribe.scss'

export const Subscribe = () => {
    return (
        <form>
            <div className="sub-head">NEWSLETTER:</div>
            <div className="input-button">
                <span><input type="text" className="sub-input" placeholder="Your email here"/>
                <span><button className="btn-subscribe">Subscribe</button></span></span>
            </div>
            
        </form>
    )
}