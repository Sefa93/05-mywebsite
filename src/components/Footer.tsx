import React from "react";
import '../css/footer.css'

function Footer() {
    return (
        <div className="footer">
            <a href="mailto:kutlusefa1993@hotmail.de?subject=Jobangebot">
                for job offers click here
            </a>

            <i className="fa fa-at">Sefa Kutlu</i>


            <div className="social-media icons">
                <a href="#">
                    <i className="fa fa-facebook-square"></i>
                </a>

                <a href="#">
                    <i className="fa fa-twitter-square"></i>
                </a>

                
            </div>

        </div>
    )
}

export default Footer