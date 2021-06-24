import React, { useState } from 'react';
import Modal from 'react-modal';
import './SignUp_LogIn.css';

function SignUp_LogIN() {
    const [modalIsOpenSignUp, setModalIsOpenSignUp] = useState(false);
    const [modalIsOpenLogin, setModalIsOpenLogin] = useState(false);
    return (
        <>
        <h1>Hello</h1>
            <button onClick={() => setModalIsOpenSignUp(true)} className="btn btn-lg btn-success">Signup</button>
            <button onClick={() => setModalIsOpenLogin(true)} className="btn btn-lg btn-success">Login</button>
            <Modal isOpen={modalIsOpenSignUp} onRequestClose={() => setModalIsOpenSignUp(false)}>
                <div className="form-structor mt-5">
                    <div className="signup">
                        <h2 className="form-title"><span>or</span>Sign up</h2>
                        <div className="form-holder">
                            <input type="text" className="input" placeholder="Name" />
                            <input type="email" className="input" placeholder="Email" />
                            <input type="password" className="input" placeholder="Password" />
                        </div>
                        <button className="btn-solid">Sign up</button>
                    </div>
                </div>
            </Modal>
            <Modal isOpen={modalIsOpenLogin} onRequestClose={() => setModalIsOpenLogin(false)}>
                <div className="form-structor mt-5">
                    <div className="login">
                        <div className="center">
                            <div className="form-holder">
                                <input type="email" className="input" placeholder="Email" />
                                <input type="password" className="input" placeholder="Password" />
                            </div>
                            <button className="btn-solid">Log in</button>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    );
}
export default SignUp_LogIN;