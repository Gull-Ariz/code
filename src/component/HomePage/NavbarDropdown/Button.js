import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import './Button.css'
import Modal from 'react-modal';


function Button(prop) {
    const [modalIsOpenSignUp, setModalIsOpenSignUp] = useState(false);
    return (
        <Link to={prop.domain}>
            <button 
                className={prop.cName}> 
                {prop.ButtonName}
            </button>
            
        </Link>
    )
}
export default Button;