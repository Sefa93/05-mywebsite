import React from 'react';

import '../../css/css_contents/skills.css'
import { skillsArray } from '../objects/skills';

function Skills() {

    return (
        <div className="skills">
            
            {skillsArray.map((skill, index) => {
                return (

                    <div className="skill-wrapper" key={index}>

                        <div className="logo-wrapper">
                            {skill.logo}
                        </div>

                        <div className="info-wrapper">
                            
                            <h2>{skill.skillName}</h2>
                            
                            <div className="description-wrapper">
                                {skill.description}    
                            </div>
                        </div>

                    
                    </div>   
                
                )
            })}
        
        </div>
    )
}

export default Skills 