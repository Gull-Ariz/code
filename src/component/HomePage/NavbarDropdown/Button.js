import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import './Button.css'
import ReactModal from 'react-modal';
import Signup from '../SignupLogin/Signup';



function Button(prop) {
    const [modalIsOpenSignUp, setModalIsOpenSignUp] = useState(false);
    return (
        <Link to={prop.domain}>
            <button 
                onClick={() => setModalIsOpenSignUp(true)}
                className={prop.cName}> 
                {prop.ButtonName}
            </button>
            <div className="miandivmodal">
            <ReactModal isOpen={modalIsOpenSignUp} onRequestClose={() => setModalIsOpenSignUp(false)}  className="Modal" >
                    <Signup/>
            </ReactModal>
            </div>
            
        </Link>
    )
}
export default Button;