import React from "react";
import { Logo } from "../Logo/logo";
import { MenuItems } from "../MenuItems/menuItems"
import './headerStyle.scss'

export const Header = () => {
    return (
        <div className="header-parent">
            <Logo />
            <MenuItems />
        </div>
    )
}