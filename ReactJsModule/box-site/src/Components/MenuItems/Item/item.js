import React from "react";
import './item.scss'

export const Item = ({itemText}) => {
    let color = "#000000";
    if (itemText === "Contact Us") {
        color = "#F9995D"; 
    }

    return (
        <li className="menu-item">
            <a href="#" style={{ color: color }}>{itemText}</a>
        </li>

    )
}