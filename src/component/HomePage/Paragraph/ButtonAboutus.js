import React from 'react'
import {Link} from 'react-router-dom'
import './ButtonAboutus.css'

function ButtonAboutus(props) {
    return (
        
            <Link to={props.domainname}>
                <button className={props.clsName}> 
                        {props.btnName}
                </button>
            </Link>
    )
}

export default ButtonAboutus
