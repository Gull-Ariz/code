import React from 'react'
import {Link} from 'react-router-dom'
import './Buttons.css'

function Buttons(props) {
    return (
        
            <Link to={props.domainname}>
                <button className={props.clsName}> 
                        {props.btnName}
                </button>
            </Link>
    )
}

export default Buttons
