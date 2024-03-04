import React from "react";
import { ProjectsMenu } from "../ProjectsMenu/projectsMenu";
import { ProjectsExample } from "../ProjectsExampleBlock/projectsExample";

import './seventhBlock.scss'

export const SeventhBlock = () => {
    return (
        <div className="seventh-block-inner">
            <div><ProjectsMenu /></div>
            <div><ProjectsExample /></div>

        </div>
    )
}