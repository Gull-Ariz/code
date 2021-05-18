import React from 'react'
import {Link} from 'react-router-dom'
import './Button.css'

function Button(prop) {
    return (
        <Link to={prop.domain}>
            <button className={prop.cName}> 
                {prop.ButtonName}
            </button>
        </Link>
    )
}
export default Button;