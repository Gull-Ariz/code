import React, { useState } from 'react';
import './Login.css';
import axios from 'axios';
import Cookies from 'universal-cookie';
import { usersList } from './UsersData';

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
    usersList.push({ userName: userVal.userName, email: userVal.email, password: userVal.password })
    console.log(usersList)
    // axios.post('http://localhost:55444/api/seller', formData1, {
    //     headers: { 'Content-Type': 'application/json' }
    // })
    //     .then(res => {
    //         (new Cookies()).set('verificationId', res.data._id);
    //         this.setState({renderVerificationPage: true});
    //     })
    //     .catch(err => console.log(err))
}

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
                            <input className={""} name="userName"
                                    value={userVal.userName} onChange={handleInputChange} type="text" placeholder="Username" />

                        </div>
                        <div className="Input-field">
                            <i className="fas fa-lock"></i>
                            <input className={""} name="password"
                                    value={userVal.password} onChange={handleInputChange} type="password" placeholder="Password" />
                        </div>


                        <div className="Input-field">
                            <i className="fas fa-at"></i>

                            <input className={""} placeholder="Email" name="email"
                                    value={userVal.email} onChange={handleInputChange} type="email" placeholder="Email" />

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
