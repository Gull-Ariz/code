import React from 'react'
import './Login.css'

function Login() {
    return (
    
        
    <div className="containerlogin container">
        
	    <div className="forms-container">
            <div className="sigin-signup"> 
                <form>
                    <h2 className="title">
                        Sign In
                    </h2>
                    <div className="Input-field">
                        <i className="fas fa-user"></i>
                        <input type="text" placeholder="Username"/>
                    </div>

                    <div className="Input-field">
                        <i className="fas fa-lock"></i>
                        <input type="password" placeholder="Password"/>
                    </div>

                    <input type="submit" value="Login" className="btn-solid"/>
                            <p className="social-text">Or Sigin in with Social Platform</p>
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

export default Login
