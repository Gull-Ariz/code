import React, { useState, useEffect } from 'react'
import './Login.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { usersList } from './UsersData';


const initialValues = {
    email: '',
    password: ''
}
let result;
export default function Login(props) {
    const {setModalIsOpenLogin} = props;
    const [values1, setValues1] = useState([initialValues]);
    const handleInputChange = e => {
        const { name, value } = e.target;
        setValues1(
            {
                ...values1,
                [name]: value
            },
        )
    }
    const Validate = () => {
        let temp = {}
        temp.email = values1.email === "" ? false : true;
        temp.password = values1.password === "" ? false : true;
        return Object.values(temp).every(x => x === true);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (Validate()) {
            // let formData1 = new FormData();
            // formData1.append('email', values1.email);
            // formData1.append('password', values1.password);
            let temp = {
                email:'',
                password:''
            };
            temp.email = values1.email;
            temp.password = values1.password;
            saveJwt(temp);
        }
    }

    const saveJwt = (formData1) => {
        // axios.post('http://localhost:55444/api/seller/authenticate', formData1, {
        //     headers: { 'Content-Type': 'application/json' }
        // })
        //     .then(res => {
        //         result = true;
        //         console.log(res.data);
        //         localStorage.setItem('loginObj', JSON.stringify({
        //             login: true,
        //             email: formData1.email,
        //             token: res.data
        //         }));
        //         setModalIsOpenLogin(false);
        //     })
        //     .catch(err => console.log(err))
        usersList.forEach(element => {
            if(element.email === formData1.email && element.password === formData1.password)
            {
                setModalIsOpenLogin(false);
            }
        });

    }
    return (
        <>
            <div className="container" id="containerlogin">

                <div className="forms-container">
                    <div className="sigin-signup">
                        <form autoComplete="off" noValidate onSubmit={handleSubmit}>
                            <h2 className="title">
                                Sign In
                            </h2>
                            <div className="Input-field">
                                <i className="fas fa-user"></i>
                                <input className={""} placeholder="Email" name="email"
                                    value={values1.email} onChange={handleInputChange} />
                            </div>

                            <div className="Input-field">
                                <i className="fas fa-lock"></i>
                                <input type="password" className={""} placeholder="Password" name="password"
                                    value={values1.password} onChange={handleInputChange} />
                            </div>

                            <div className="form-group">
                                <button onClick={handleSubmit} type="submit" className="btn-solid">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div>
            {localStorage.getItem("loginObj") ?
            <div>
                <Link to='/dashboard'></Link>
            </div>
            :
            <div></div>
            }
            </div>
        </>
    )
}

