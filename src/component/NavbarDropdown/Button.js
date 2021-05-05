import React from 'react'
import {Link} from 'react-router-dom'
import './Button.css'

function Button() {
    return (
        <Link to='sign-up'>
            <button className="btn-signup"> 
                SignUp
            </button>
        </Link>
    )
}
export default Button;