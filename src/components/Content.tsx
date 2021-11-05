import React, { useState } from "react";
import { Switch, Route } from "react-router";
import '../css/content.css'
import Home from "./contents/Home";
import Skills from "./contents/Skills";
import CV from "./contents/CV";
import AboutMe from "./contents/AboutMe";

function Content() {
    const [isFloatingButtonPressed, setIsFloatingButtonPressed] = useState(false);
    
    const displaySocialMediaArea = () => {
        const element = document.getElementById("social-media-area");
        if (element?.className === 'social-media-container-hidden') {
            element.className = 'social-media-container';
            setIsFloatingButtonPressed(true);
        } else {
            if (element != null) {
                element.className = 'social-media-container-hidden';
                setIsFloatingButtonPressed(false);
            }
        }
    }


    return (
        <div className="content">
           
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>

                <Route exact path="/skills">
                    <Skills/>
                        
                </Route>

                <Route exact path="/cv">
                     <CV/>
                </Route>

                <Route exact path="/aboutme">
                    <AboutMe/>
                </Route>

                <Route path="/">
                    <p style={{color: 'white', fontSize: '24pt', display: 'flex', justifyContent: 'center'}}>
                        The requested URL does not exist my friend 
                    </p>
                </Route>
            </Switch>

            <div className="floating-container">
                <button className="floating-button" onClick={displaySocialMediaArea}>
                    {(isFloatingButtonPressed === false)? '+' : '-'}
                </button>
                
                <div className="social-media-container-hidden" id="social-media-area">
                    <a href="/xing" className="icon">
                        <i className="fab fa-xing-square" title="Xing"/>
                    </a>    

                    
                    <a href="/linkedin" className="icon">
                        <i className="fab fa-linkedin" title="LinkedIn"/>
                    </a>

                    <a href="/whatsapp" className="icon">
                        <i className="fab fa-whatsapp-square" title="Whatsapp"/>
                    </a>
                </div>
                
            </div>
        </div>
    )

}

export default Content