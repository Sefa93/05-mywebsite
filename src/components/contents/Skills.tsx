import React from 'react';

import '../../css/css_contents/skills.css'
import { skillsArray } from '../objects/skills';

function Skills() {

    return (
        <div className="skills">
            
            {skillsArray.map((skill, index) => {
                return (

                    <div className="skill-wrapper">

                        <div className="logo-wrapper">
                            {skill.logo}
                        </div>

                        <div className="info-wrapper">
                            
                            <h4>{skill.skillName}</h4>
                            
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