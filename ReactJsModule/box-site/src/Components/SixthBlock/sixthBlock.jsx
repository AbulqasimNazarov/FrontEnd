import React from "react";
import { ButtonGetConsultation } from "../ButtonGetConsultation/buttonGetConsultation";

import './sixthBlock.scss'

export const SixthBlock = () => {
    return (
        <div className="sixth-block">
            <div className="sixth-block-inner">
                <div>
                    <div className="sixth-block-description">Free consultation with exceptional quality</div>
                    <div className="sixthblock-number">Just one call away: <span className="number">+84 1102 2703</span></div>
                </div>
                <div><ButtonGetConsultation /></div>

            </div>
        </div>
    )
}