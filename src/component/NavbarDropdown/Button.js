import React from 'react'
import {Link} from 'react-router-dom'
import './Button.css'

function Button(prop) {
    return (
        <Link to='sign-up'>
            <button className={prop.cName}> 
                {prop.ButtonName}
            </button>
        </Link>
    )
}
export default Button;