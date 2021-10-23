import React from "react";
import '../css/content.css'
import bjkTeam from '../assets//images/bjkTeam.jpg';
import { Link } from "react-router-dom";

function Content() {
    return (
        <div className="content">
            
            <div className="main-content">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                    sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>

                

                

            </div>
            
            <div className="sidebar-left">
                
                <a href="#" className="icon">
                    <i className="fa fa-xing-square" aria-hidden="true" title="Xing"></i>
                </a>    

                <a href="#" className="icon">
                    <i className="fa fa-linkedin-square" aria-hidden="true" title="linkedIn"></i>
                </a>

                <a href="#" className="icon">
                    <i className="fa fa-phone-square" title="Telefon"></i>
                </a>

            </div>


        </div>
    )

}

export default Content