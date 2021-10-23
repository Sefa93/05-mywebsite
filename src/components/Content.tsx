import React from "react";
import '../css/content.css'
import bjkTeam from '../assets//images/bjkTeam.jpg';
import bats from '../assets/images/bats.png';
import pjanic from '../assets/images/pjanic.jpg';
import caglar from '../assets/images/caglar.png';
import { Link } from "react-router-dom";

function Content() {
    return (
        <div className="content">
            
            <div className="main-content">
                <img src={caglar}/>
                <p>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                    sunt in culpa qui officia deserunt mollit anim id est laborum."
                </p>
    

            </div>
            
            <div className="sidebar-left">
                
                <a href="#" className="icon">
                    <i className="fab fa-xing-square" aria-hidden="true" title="Xing"></i>
                </a>    

                <a href="#" className="icon">
                    <i className="fab fa-linkedin" aria-hidden="true" title="linkedIn"></i>
                </a>

                <a href="#" className="icon">
                    <i className="fab fa-whatsapp-square" title="Whatsapp"></i>
                </a>

            </div>


        </div>
    )

}

export default Content