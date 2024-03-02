import React from "react";
import { ServicesItem } from "../ServicesItem/servicesItem";

import Iconn1 from "../../Assets/IMG/Iconn1.png"
import Iconn2 from "../../Assets/IMG/Iconn2.png"
import Iconn3 from "../../Assets/IMG/Iconn3.png"
import Iconn4 from "../../Assets/IMG/Iconn4.png"
import Iconn5 from "../../Assets/IMG/Iconn5.png"
import Iconn6 from "../../Assets/IMG/Iconn6.png"

import './fourthBlockStyle.scss'

export const FourthBlock = () => {
    return (
        <div className="fourth-block">
            <div className="fourth-block-head">Services</div>
            <div className="fourth-block-items">
                <ServicesItem icon={Iconn1} description="Construction" style="item-services1"/>
                <ServicesItem icon={Iconn2} description="Renovation" style="item-services2"/>
                <ServicesItem icon={Iconn3} description="Consultation" style="item-services1"/>
                <ServicesItem icon={Iconn4} description="Repair Services" style="item-services2"/>
                <ServicesItem icon={Iconn5} description="Architecture" style="item-services1"/>
                <ServicesItem icon={Iconn6} description="Electric" style="item-services2"/>
            </div>

        </div>
        
    )
}