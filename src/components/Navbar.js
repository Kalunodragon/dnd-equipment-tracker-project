import React from "react";
import { NavLink } from "react-router-dom"

const look = {
    width: "100px",
    height: "auto",
    padding: "15px",
    margin: "0 5px 5px",
    background: "rgb(116, 0, 0)",
    color: "rgb(227, 209, 186)",
}

const activated = {
    background: "red",
    color: "black"
}

function Navbar(){

    return (
        <div className="nav-container">
            <div className="navigation">
                <NavLink
                    to="/"
                    exact
                    style={look}
                    activeStyle={activated}
                >Home</NavLink>
                <NavLink
                    to="/Inventory"
                    exact
                    style={look}
                    activeStyle={activated}
                >Inventory</NavLink>
                <NavLink
                    to="/EquipmentList"
                    exact
                    style={look}
                    activeStyle={activated}
                >Equipment List</NavLink>
                <NavLink
                    to="/Form"
                    exact
                    style={look}
                    activeStyle={activated}
                >Form</NavLink>
                <NavLink
                    to="/RandomTreasure"
                    exact
                    style={look}
                    activeStyle={activated}
                >Random Treasure</NavLink>
            </div>
        </div>
    )
}

export default Navbar