import React from "react";
import { Link } from "react-router-dom";
import '../css/header.css'

function Header() {

    function enableResponsiveHeader() {
        let x = document.getElementById('myNavbar');
        if (x?.className === 'navbar') {
            x.className += " responsive"
        } else {
            if (x !== null)
                x.className = "navbar";
        }
    }

    
    return (
        <div className="header">
            <span className="logo" title="Sefa Kutlu">
                SK
            </span>

            <div className="navbar" id="myNavbar">
                <Link to="/home">
                    <p className="element"> Home </p>
                </Link>
                <Link to="/cv">
                    <p className="element"> CV </p>
                </Link>
                <Link to="/skills">
                    <p className="element"> Skills</p>
                </Link>
                <Link to="/contact">
                    <p className="element"> Contact </p>
                </Link>

                <a href="#" className="icon" onClick={enableResponsiveHeader}>
                    <i className="fa fa-bars element"/>
                </a>
            </div>

        </div>
    )

}


export default Header