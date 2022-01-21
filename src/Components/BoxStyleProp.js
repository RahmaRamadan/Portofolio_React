import React from "react";

import './Portfolio.css';

export default function Box(props) {
    return (
        <>
            <div className="row">
                <div className={`col col_design ${props.boxColorL}`}>
                    WEB DESIGN
                         </div>
                <div className={`col col_design ${props.boxColorD}`}>
                    MOBILE DESIGN
                        </div>
                <div className={`col col_design ${props.boxColorL}`}>
                    LOGO DESIGN
                        </div>
            </div>
            <div className="row ">
                <div className={`col col_design ${props.boxColorD}`}>
                    WEB APPLICATION DEVELOPMENT
                         </div>
                <div className={`col col_design ${props.boxColorL}`}>
                    MOBILE APPLICATION DEVELOPMENT
                        </div>
                <div className={`col col_design ${props.boxColorD}`}>
                    PWA DEVELOPMENT
                        </div>
            </div>
        </>

    );
}