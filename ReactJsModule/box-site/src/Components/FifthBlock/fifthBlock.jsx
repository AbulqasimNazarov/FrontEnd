import React from "react";
import { ExperienceItems } from "../ExperinceItems/experinceitems";
import { ExperienceHistory } from "../ExperienceHistory/experienceHistory";

import './fifthBlock.scss'

export const FifthBlock = () => {
    return (
        <div className="fifth-block">
            <div>
                <ExperienceItems/>
            </div>
            <div>
                <ExperienceHistory />
            </div>

        </div>
    )
}