import React from "react";

export default props => 
    <React.Fragment>
        <a href={props.path}>
            <i className={props.property}></i>
            {props.text}
        </a>
    </React.Fragment>