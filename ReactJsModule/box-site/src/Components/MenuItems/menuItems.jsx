import React from "react";
import { Item } from "./Item/item"
import './menuItemsStyle.scss'

export const MenuItems = () => {
    return (
        <div>
            <ul className="menu-items">
                <Item itemText="Home"/>
                <Item itemText="About Us"/>
                <Item itemText="Projects"/>
                <Item itemText="Services"/>
                <Item itemText="Contact Us"/>

            </ul>
        </div>

    )
}