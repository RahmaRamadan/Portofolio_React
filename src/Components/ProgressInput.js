import React from "react";

import './Skills.css';

export default function ProgressInput(props) {
    return (
        <>
            <div className="row row_control">
                <div className="col-md-2"></div>
                <div className="col-md-3">
                    <button className="btn btn-default btn_bar" htmlFor={props.id}>{props.skillName}</button>
                </div>
                <div className="col-md-5">
                    <div className="progress prog_height ">
                        <div
                            className={`progress-bar  ${props.cssName}`}
                            id={props.id}
                            aria-valuenow={props.currentValue}
                            aria-valuemin="0"
                            aria-valuemax="100"
                            role="progressbar">
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}
