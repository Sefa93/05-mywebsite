import React from "react";
import '../css/footer.css'

function Footer() {
    return (
        <div className="footer">
            <a href="mailto:businesskutlu93@gmail.com?subject=Jobangebot">
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

                <a href="#">
                    <i className="fab fa-instagram-square" title="Instagram"></i>
                </a>

            </div>

        </div>
    )
}

export default Footer