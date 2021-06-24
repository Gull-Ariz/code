import React, { useState } from 'react';
import './Login.css'

const user = {
    userName: "",
    password: "",
    email: ""
}

function Signup() {
    const [userVal, setUserVal] = useState([user]);

    const handleInputChange = e => {
        const { name, value } = e.target;
        setUserVal(
            {
                ...userVal,
                [name]: value
            },
        )
    }
    const Validate = () => {
        let temp = {}
        temp.userName = userVal.userName === "";
        temp.email = userVal.email === "" ? false : true;
        temp.password = userVal.password === "" ? false : true;
        return Object.values(temp).every(x => x === true);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (Validate()) {
            let formData1 = new FormData();
            formData1.append('userName', userVal.userName);
            formData1.append('email', userVal.email);
            formData1.append('password', userVal.password);
            console.log(userVal.email);
        }
    }
    return (
        <div className="container" id="containerlogin">

            <div className="forms-container">
                <div className="sigin-signup">
                    <form autoComplete="off" noValidate onSubmit={handleSubmit}>
                        <h2 className="title">
                            Sign Up
                        </h2>
                        <div className="form-group Input-field">
                            <i className="fas fa-user"></i>
                            <input className={"form-control"} name="userName"
                                value={user.userName} onChange={handleInputChange} type="text" placeholder="Username" />
                        </div>

                        <div className="form-group Input-field">
                            <i className="fas fa-lock"></i>
                            <input className={"form-control"} name="password"
                                value={user.password} onChange={handleInputChange} type="password" placeholder="Password" />
                        </div>


                        <div className="form-group Input-field">
                            <i className="fas fa-at"></i>
                            <input className={"form-control"} placeholder="Email" name="email"
                                value={user.email} onChange={handleInputChange} type="email" placeholder="Email" />
                        </div>

                        <div className="form-group">
                            <button onClick={handleSubmit} type="submit" className="btn btn-light">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default Signup
