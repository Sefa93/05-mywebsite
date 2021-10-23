import React from "react";
import '../css/footer.css'

import { Link } from "react-router-dom";

function Footer() {
    return (
        <div className="footer">
            <a href="mailto:kutlusefa1993@hotmail.de?subject=Jobangebot">
                for job offers click here
            </a>

            <i className="fa fa-at">Sefa Kutlu</i>


            <div className="social-media icons">
                <a href="#">
                    <i className="fab fa-facebook-square" title="Facebook"></i>
                </a>

                <a href="#">
                    <i className="fab fa-twitter-square" title="Twitter"></i>
                </a>

                <Link to="/instagram">
                    <i className="fab fa-instagram-square" title="Instagram"></i>
                </Link>

            </div>

        </div>
    )
}

export default Footer