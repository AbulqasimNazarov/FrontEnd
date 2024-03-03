import React from "react";
import { ButtonContactUs } from "./ButtonContactUs/buttonContactUs";

import './experienceHistory.scss'

export const ExperienceHistory = () => {
    return (
        <div className="experience-history">
            <div className="experience-history-head">30 Years Experience</div>
            <div className="experience-history-description">Our company has been the leading provided construction services to clients throughout the USA since 1988.</div>
            <div className="experience-history-button"><ButtonContactUs/></div>
        </div>
    )
}