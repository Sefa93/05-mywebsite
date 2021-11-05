import React from 'react'

import '../../css/css_contents/cv.css'

import { personalInformation, educations, langugaes, activities } from '../objects/InformationCV'
import avatar from '../../assets/images/avatar.png';

function CV() {
    return (
        <div className="cv">

            <h1>Curriculum Vitae</h1>
            <hr/>
            
            <div className="cv-elements wrapper">
                <div className="flip-card">
                    <div className="flip-card-inner">

                        <div className="flip-card-front">  
                            <img src={avatar} alt="Sefa"/>
                        </div>  
                        
                        <div className="flip-card-back">
                            <div className="keys">
                                <p> Name: </p>
                                <p> Age: </p>
                                <p> Email: </p>
                                <br/>
                                <p> Nationality: </p>
                                <p> Gender: </p>
                            </div>

                            <div className="values">
                                <p> {personalInformation.name} </p>
                                <p> {personalInformation.age} </p>
                                <a href="mailto:businesskutlu93@gmail.com?subject=Jobangebot">
                                    {personalInformation.email}
                                </a>
                                <p> {personalInformation.nationality} </p>
                                <p> {personalInformation.gender} </p>
                            </div>

                        </div>

                    </div>
                </div>

                <div className="list-wrapper">
                    <div className="educations">
                        <h2> Educations </h2>
                        {educations.map((education, index) => {
                            return (
                                <div className="education-wrapper" key={index}>
                                    <li>
                                        {education.begin} - {education.end}, {education.institution}, {education.place}
                                        <br/>
                                        
                                        {(education.institution === 'University of Duisburg Essen')?  'current grade point average' :'grade point average: '} {education.gradePointAverage}
                                    </li>
                                </div>
                            )
                        })}
                    </div>

                    <div className="languages">
                        <h2> Languages </h2>
                        {langugaes.map((language, index) => {
                            return (
                                <div className="language-wrapper" key={index}>
                                    <li>
                                        language: {language.language.toString()}
                                        <br/>
                                        native: {language.isNative.toString()}
                                    </li>
                                </div>
                            )
                        })}
                    </div>

                    <div className="activities">
                        <h2> Activities </h2>

                        {activities.map((activity, index) => {
                            return(
                                <div className="activity-wrapper" key={index}>
                                    <li> {activity} </li>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CV