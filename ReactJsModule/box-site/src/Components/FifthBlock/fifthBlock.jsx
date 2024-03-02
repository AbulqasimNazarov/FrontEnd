import React from "react";
import { ButtonGetConsultation } from "../ButtonGetConsultation/buttonGetConsultation";

import './fifthBlock.scss'

export const FifthBlock = () => {
    return (
        <div className="fifth-block">
            <div className="fifth-block-inner">
                <div>
                    <div className="fifth-block-description">Free consultation with exceptional quality</div>
                    <div className="fifthblock-number">Just one call away: <span className="number">+84 1102 2703</span></div>
                </div>
                <div><ButtonGetConsultation /></div>

            </div>
        </div>
    )
}