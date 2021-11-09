import React from "react";

import '../../css/css_contents/home.css'

import vida from '../../assets/images/vida.png';

function Home() {
    return (
        <div className="home">

                <p>
                    Hello, <br/>
                    my name is Sefa and i'm 28 years old. <br/>
                    This is my website written in ReactJS using <br/>
                    Typescript, HTML &amp; CSS. <br/>
                    <br/>

                    I am currently studying applied computer science at <br/>
                    at the university of duisburg essen
                    
                    if you are interested in my cv or skills, dont hesitate to look 
                    at the those sections<br/>
                    <br/>
                    
                    If you are currently interested to hire me than look at the <br/>
                    footer below. There you can find a link with the label <br/ >
                    "for job offers click here"<br/>
                    <br/>

                    <i className="fas fa-arrow-left"></i> Right you can find a floating button with the various social networks <br/>
                    (currently active on xing and whatsapp)
                    <br/><br/>

                    <i className="fas fa-arrow-down"></i> On the Bottom you can
                    find my social media profiles <br/>
                    (currently not active on there)

                </p>

        </div>
    );
}

export default Home