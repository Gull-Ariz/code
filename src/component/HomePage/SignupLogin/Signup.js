import React from 'react'
import './Login.css'

function Signup() {
    return (
    
        
    <div className="container" id="containerlogin">
        
	    <div className="forms-container">
            <div className="sigin-signup"> 
                <form>
                    <h2 className="title">
                        Sign Up
                    </h2>
                    <div className="Input-field">
                        <i className="fas fa-user"></i>
                        <input type="text" placeholder="Username"/>
                    </div>

                    <div className="Input-field">
                        <i className="fas fa-lock"></i>
                        <input type="password" placeholder="Password"/>
                    </div>


                    <div className="Input-field">
                        <i className="fas fa-at"></i>
                        <input type="email" placeholder="Email"/>
                    </div>

                    <input type="submit" value="Signup" className="btn-solid"/>
                            <p className="social-text">Or Sign up with Social Platform</p>
                            <div className="social-media">
                                <a href="" className="social-icon">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href="" className="social-icon">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="" className="social-icon">
                                    <i className="fab fa-google"></i>
                                </a>
                                <a href="" className="social-icon">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                            </div>
                </form>    
    </div> 
</div>
</div>

    )
}

export default Signup
