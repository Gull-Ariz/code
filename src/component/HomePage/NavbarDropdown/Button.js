import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Button.css'
import ReactModal from 'react-modal';
import Signup from '../SignupLogin/Signup';
import Login from '../SignupLogin/Login';
import DashboardServiceProvider from '../../SecondPage/Other/DashboardServiceProvider';


function ButtonSignup(prop) {
    const [modalIsOpenSignUp, setModalIsOpenSignUp] = useState(false);
    return (
        <Link to={prop.domain}>
            <button
                onClick={() => setModalIsOpenSignUp(true)}
                className={prop.cName}>
                {prop.ButtonName}
            </button>
            <div className="miandivmodal">
                <ReactModal isOpen={modalIsOpenSignUp} onRequestClose={() => setModalIsOpenSignUp(false)} className="Modal" >
                    <Signup />
                </ReactModal>
            </div>

        </Link>
    )
}

function ButtonLogin(prop) {
    const [modalIsOpenLogin, setModalIsOpenLogin] = useState(false);
    const modalClose = () =>
    {
        setModalIsOpenLogin(false);
    }
    return (
        <>
            {!localStorage.getItem("loginObj") ?
                <div>
                    <Link to={prop.domain}>
                        <button
                            onClick={() => setModalIsOpenLogin(true)}
                            className={prop.cName}>
                            {prop.ButtonName}
                        </button>
                        <div className="miandivmodal">
                            <ReactModal isOpen={modalIsOpenLogin} onRequestClose={() => setModalIsOpenLogin(false)} className="Modal" >
                                <Login setModalIsOpenLogin={setModalIsOpenLogin}/>
                            </ReactModal>
                        </div>
                    </Link>
                </div>
                :
                <div>
                    <Link to='/dashboard'>
                        <button className="btn-login">
                            Login
                        </button>
                    </Link>
                </div>
            }
        </>
    )
}

export { ButtonSignup, ButtonLogin }