import React from "react";
import { Switch, Route } from "react-router";
import '../css/content.css'
import Home from "./contents/Home";
import Skills from "./contents/Skills";
import CV from "./contents/CV";

function Content() {
    return (
        <div className="content">
           
            <Switch>
                
                <Route path="/home">
                    <Home/>
                </Route>

                <Route path="/skills">
                    <Skills/>
                        
                </Route>

                <Route path="/cv">
                     <CV/>
                </Route>

                <Route path="/aboutme">
                    
                </Route>

            </Switch>

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