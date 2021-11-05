import React from "react";

import '../../css/css_contents/aboutme.css'
import { hobbies } from "../objects/hobbies";

function AboutMe() {
    return (
        <div className="about-me">

            <h1> About Me </h1>
            <hr/>

            <h2> Hobbies </h2>
            <p> In this section you'll learn more about me.</p>

            <div className="row">

                {hobbies.map((hobby, index) => {
                    return (
                        <div className="column" key={index}>
                            <div className="about-me-content">
            
                                {hobby.image}
                                <h3> {hobby.title} </h3>  
                                <p> {hobby.description} </p>
                                
                            </div>
                        </div>
                    )
                })}


            </div>


        </div>
    )
}

export default AboutMe