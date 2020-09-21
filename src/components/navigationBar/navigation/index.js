import React from "react";
import { Link } from "react-router-dom";
import NavigationButton from '../navigationButton'

const Navigation = (props) => {
    return (
        <div className="navigation">
            <Link to={props.linkTo}>
                <NavigationButton
                    {...{ buttonName: props.btnName, buttonImage: props.btnImg }} />
            </Link>
        </div>)
}

export default Navigation;