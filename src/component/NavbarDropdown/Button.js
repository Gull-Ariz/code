import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';
import '../SignupLogin/SignUp_LogIn';

function Button(prop) {
    return (
        <Link to={"./SignUp_LogIn"}>
            <button className={prop.cName}>
                {prop.ButtonName}
            </button>
        </Link>
    )
}
export default Button;