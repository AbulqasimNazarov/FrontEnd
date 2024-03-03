import React from "react";
import { ExperienceItem } from "./ExperinceItem/experinceItem";
import Iconnn1 from '../../Assets/IMG/illus.png'
import Iconnn2 from '../../Assets/IMG/illus2.png'
import Iconnn3 from '../../Assets/IMG/illus3.png'
import Iconnn4 from '../../Assets/IMG/illus4.png'

import './experinceItems.scss'

export const ExperienceItems = () => {
    return (
        <div className="items-group">
            <ExperienceItem icon={Iconnn1} number="84" description="Happy Clients" styleIcon="icon-experience-item1" styleItem="item-style1"/>
            <ExperienceItem icon={Iconnn2} number="123" description="Projects Completed" styleIcon="icon-experience-item2" styleItem="item-style2"/>
            <ExperienceItem icon={Iconnn3} number="37" description="Awards Win" styleIcon="icon-experience-item3" styleItem="item-style3"/>
            <ExperienceItem icon={Iconnn4} number="30" description="Years in Business" styleIcon="icon-experience-item4" styleItem="item-style4"/>
        </div>
    )
}