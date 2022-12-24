import React from "react";
import MenuDrink from "../Menu/MenuDrink";
import MenuFood from "../Menu/MenuFood";
import "./styleMenu.css"

const Menu=()=>{



    return(
        <div>
            <div className="title-menu">
                <div className="title-menu-content">
                    <img src="starbucks/logoblackok.png" alt="loading" id="menu-logo1"/>
                    <p>Menu</p>
                </div>
            </div>
            <MenuDrink/>
            <MenuFood/>

        </div>
    )
}

export default Menu