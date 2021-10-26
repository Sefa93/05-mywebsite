import React from 'react'

import '../../css/css_contents/cv.css'

import { personalInformation } from '../objects/InformationCV'

function CV() {
    return (
        <div className="cv">

            <h1>Curriculum Vitae</h1>
            
            <div className="cv-wrapper">
                <div className="personal-information">
                    <h2>Personal Information</h2>

                    {Object.keys(personalInformation).map((key, index) => {
                        return (

                            <div key={index} className="personal-data">

                                <p>{key}: </p>
                            
                            </div>

                        )
                    })}
                    


                </div>
                
                <div className="education">
                    <h2>Education</h2>
                </div>
            </div>
            

        </div>
    )
}

export default CV