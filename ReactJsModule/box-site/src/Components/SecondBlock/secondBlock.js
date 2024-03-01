import React from "react";
import { ReputationText } from "../ReputationBlock/reputationBlock";
import { SecondBlockItem } from "../ReputationBlock/SecondBlockItem/secondBlockItem";
import Icon1 from "../../Assets/IMG/icon.png"
import Icon2 from "../../Assets/IMG/icon2.png"

import './secondBlockStyle.scss'

export const SecondBlock = () => {
    return (
        <div className="second-block">
            <ReputationText />
            <div className="second-block-items">
                <SecondBlockItem icon={Icon1} head="Best Services" description="Nullam senectus porttitor in eget. Eget rutrum leo interdum."/>
                <SecondBlockItem icon={Icon1} head="Best Teams" description="Cursus semper tellus volutpat aliquet lacus."/>
                <SecondBlockItem icon={Icon2} head="Best Designs" description="Ultricies at ipsum nunc, tristique nam lectus."/>

            </div>
            
        </div>
    )
}