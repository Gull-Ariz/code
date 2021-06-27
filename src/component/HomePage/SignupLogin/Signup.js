import React, { useState } from 'react';
import './Login.css';
import axios from 'axios';
import Cookies from 'universal-cookie';

const user = {
    userName: "",
    password: "",
    email: ""
}

function Signup() {
    const [userVal, setUserVal] = useState([user]);

<<<<<<< HEAD
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
    console.log(userVal.userName);
    let temp = {}
    temp.userName = userVal.userName ==="" ? false : true;
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
        saveUser(formData1);
    }
}

const saveUser = (formData1) => {
    axios.post('http://localhost:55444/api/seller', formData1, {
        headers: { 'Content-Type': 'application/json' }
    })
        .then(res => {
            (new Cookies()).set('verificationId', res.data._id);
            this.setState({renderVerificationPage: true});
        })
        .catch(err => console.log(err))
}

=======
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
>>>>>>> f74fb2e7b408a282c935d3e62488e9f38234becd
    return (
        <div className="container" id="containerlogin">

            <div className="forms-container">
                <div className="sigin-signup">
                    <form autoComplete="off" noValidate onSubmit={handleSubmit}>
                        <h2 className="title">
                            Sign Up
                        </h2>
                        <div className="Input-field">
                            <i className="fas fa-user"></i>
<<<<<<< HEAD
                            <input className={""} name="userName"
                                    value={userVal.userName} onChange={handleInputChange} type="text" placeholder="Username" />
=======
                            <input className={"form-control"} name="userName"
                                value={user.userName} onChange={handleInputChange} type="text" placeholder="Username" />
>>>>>>> f74fb2e7b408a282c935d3e62488e9f38234becd
                        </div>

                        <div className="Input-field">
                            <i className="fas fa-lock"></i>
<<<<<<< HEAD
                            <input className={""} name="password"
                                    value={userVal.password} onChange={handleInputChange} type="password" placeholder="Password" />
=======
                            <input className={"form-control"} name="password"
                                value={user.password} onChange={handleInputChange} type="password" placeholder="Password" />
>>>>>>> f74fb2e7b408a282c935d3e62488e9f38234becd
                        </div>


                        <div className="Input-field">
                            <i className="fas fa-at"></i>
<<<<<<< HEAD
                            <input className={""} placeholder="Email" name="email"
                                    value={userVal.email} onChange={handleInputChange} type="email" placeholder="Email" />
=======
                            <input className={"form-control"} placeholder="Email" name="email"
                                value={user.email} onChange={handleInputChange} type="email" placeholder="Email" />
>>>>>>> f74fb2e7b408a282c935d3e62488e9f38234becd
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
