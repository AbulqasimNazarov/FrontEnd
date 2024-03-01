import React from "react";
import './secondBlockItemStyle.scss'

export const SecondBlockItem = ({icon, head, description}) => {
    return (
        <div className="second-block-item">
            <div><img src={icon}/></div>
            <div>{head}</div>
            <div>{description}</div>

        </div>
    )
}