import React from "react";
import { Logo } from "../Logo/logo";
import { Subscribe } from "../SubscribeBlock/subscribe";
import { SocialLogo } from "../SocialLogos/socialLogo";
import Facebook from '../../Assets/IMG/Vectorr1.png'
import Linkedin from '../../Assets/IMG/Vectorr3.png'
import Twitter from '../../Assets/IMG/Vectorr2.png'

import './footer.scss'

export const Footer = () => {
    return (
        <div>
            <div className="footer-inner">
                <div className="footer-left-side">
                    <div className="addres-div"><span className="span-address">ADDRESS:</span><span className="spans2">6391 Elgin St. Celina, Delaware 10299</span></div>
                    <div className="phone-div"><span className="span-phone">PHONE:</span><span className="spans2">+84 1102 2703</span></div>
                    <div className="email-div"><span className="span-email">EMAIL:</span><span className="spans2">hello@thebox.com</span></div>
                    <div className="logo-div"><Logo/></div>
                </div>


                <div className="footer-right-side">
                    <Subscribe />
                    <div className="social-text">SOCIAL:</div>
                    <div className="logos">
                        <SocialLogo socialLogo={Facebook}/>
                        <SocialLogo socialLogo={Linkedin}/>
                        <SocialLogo socialLogo={Twitter}/>

                    </div>
                </div>
            </div>

            <div className="under-footer">
                <div className="under-footer-inner">
                    TheBox Company © 2022. All Rights Reserved
                </div>
            
            </div>

        </div>
        
    )
}