import React from "react";
import { NavLink } from "react-router-dom"

const look = {
    width: "100px",
    height: "auto",
    padding: "15px",
    margin: "0 5px 5px",
    background: "gray",
    color: "black",
}

function Navbar(){

    return (
        <div className="nav-container">
            <div className="navigation">
                <NavLink
                    to="/"
                    exact
                    style={look}
                    activeStyle={{ background: "skyblue" }}
                >Home</NavLink>
                <NavLink
                    to="/Inventory"
                    exact
                    style={look}
                    activeStyle={{ background: "skyblue" }}
                >Inventory</NavLink>
                <NavLink
                    to="/EquipmentList"
                    exact
                    style={look}
                    activeStyle={{ background: "skyblue" }}
                >Equipment List</NavLink>
                <NavLink
                    to="/Form"
                    exact
                    style={look}
                    activeStyle={{ background: "skyblue" }}
                >Form</NavLink>
                <NavLink
                    to="/RandomTreasure"
                    exact
                    style={look}
                    activeStyle={{ background: "skyblue" }}
                >Random Treasure</NavLink>
            </div>
        </div>
    )
}

export default Navbar