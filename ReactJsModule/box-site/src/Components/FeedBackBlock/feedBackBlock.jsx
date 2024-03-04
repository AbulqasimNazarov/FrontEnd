import React from "react";

import './feedBackBlock.scss'

export const FeedBackBlock = () => {
    return (
        
        <form className="feed-back">
            <div className="fb-header">What can us do for you?</div>
            <div className="fb-description">We are ready to work on a project of any complexity, whether it’s commercial or residential.</div>
            <div className="name-email-group">
                <div><input type="text" className="name-div" placeholder="Your Name*"/></div>
                <div><input type="text" className="name-div" placeholder="Email*"/></div>
            </div>
            <div className="reason-phone-group">
                <input type="text" className="name-div" placeholder="Reason for Contacting*"/>
                <input type="text" className="name-div" placeholder="Phone"/>
            </div>
            <input type="text" className="message-div" placeholder="Message"/>
            <div className="required-div"><span className="star">*</span> indicates a required field</div>

            <button className="btn-submit">Submit</button>
            
        </form>
            
        
    )
}