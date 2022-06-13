import React from "react";
import "./navbar.css";
import IconTwitter from "./twitter-icon";
const {format} = require("date-fns");

function NavBar() {
    const digitalClock = document.querySelector(".timer");

    let todaysDate = format(new Date(), 'dd.MM.yyyy hh:mm:ss');
    return (
        <div className="navbar-container">
            <div className="icon-wrapper">
                <IconTwitter/>
                <input type="text" placeholder="Search..."></input>
            </div>
            <h3 className="timer">{todaysDate}</h3>
        </div>
    );
}

export default NavBar;