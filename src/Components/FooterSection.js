import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhoneSquare } from "@fortawesome/free-solid-svg-icons";
import {
    faFacebook,
    faGithub,
    faTwitter,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
// import IconLink from
function Footer() {

    return (
        <>
            <div className="text-white footer">
                <div className="container">
                    <div className="row col-12">
                        <div className="col-4">
                            <h4>GET IN TOUCH</h4>
                            <p>
                                <FontAwesomeIcon icon={faPhoneSquare} /> 0121555566</p>
                            <p>
                                <FontAwesomeIcon className="me-3" icon={faEnvelope} />kr@iti.com </p>
                        </div>
                        <div className="col-4 text-center">
                            <button className="btn btn-outline-light"> Contact Me </button>
                        </div>
                        <div className="col-4 text-end">
                            <p>
                                <FontAwesomeIcon className="me-3" icon={faFacebook} />
                                <FontAwesomeIcon className="me-3" icon={faTwitter} />
                                <FontAwesomeIcon className="me-3" icon={faLinkedin} />
                            </p>
                            <p>CopyRight © 2019 KR</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}


export default Footer;
