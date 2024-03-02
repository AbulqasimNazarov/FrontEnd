import React from "react";
import './secondBlockItemStyle.scss'

export const SecondBlockItem = ({icon, head, description}) => {
    return (
        <div className="second-block-item">
            <div className="icon-div"><img src={icon}/></div>
            <div className="head-div">{head}</div>
            <div className="description-div">{description}</div>

        </div>
    )
}