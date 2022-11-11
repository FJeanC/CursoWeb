import React from "react";
import { Link } from "react-router-dom";
export default props => 
    <React.Fragment>
        <Link to={props.path}>
            <i className={props.property}></i>
            {props.text}
        </Link>
    </React.Fragment>