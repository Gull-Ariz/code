import React, { useState } from 'react';
import './DashboardService.css';
import AddServices from './AddServices';
import {ButtonAddService} from '../../HomePage/NavbarDropdown/Button'

import { Link } from 'react-router-dom';
import { servicesList } from '../Cards/ServiceData';
export default function DashboardServiceProvider() {
    const [list, setList] = useState(servicesList);
    const [x, setZ] = useState(0);

    return (
        <div>
            <input type="checkbox" id="check" />
            <header>
                <div className="left-area">
                    <a href="/">
                        <h3>
                            Help <span>Online</span>
                        </h3>
                    </a>
                </div>
                <label for="check">
                    <i className="fas fa-bars" id="slidebar-btn"></i>
                </label>
                <div className="right-area">
                    <a href="#" className="logout-btn">Logout</a>
                </div>
            </header>
            <div className="slidebar">
                <center>
                    <img src="../../../images/ac.jpeg" />
                    <h4>Muhammad Hamza Yousaf</h4>
                </center>
                <a href="#"> <ButtonAddService onSave={(newObject) => {
                    // console.log(newObject)
                    servicesList.push(newObject);
                    console.log(servicesList)
                    
                
                    setZ((x + 1))
                    console.log(x);
                    setList(servicesList)
                }}>  { list[0].length }<i className="fas fa-plus"></i><span>Add Service</span></ButtonAddService> </a>
                <a href="#"><i className="fas fa-trash-alt"></i><span>Remove Service</span></a>
                <a href="#"><i className="fas fa-envelope"></i><span>Messages</span></a>
            </div>
            <div>
            {/* <AddServices/> */}
            </div>


            <div className="services">
            <div className="container" id="containerid">
                    <div className="row">
               
                        {/* <div className="col-lg-4 col-md-12 col-12"> */}
                            {
                            list.map((ser, index) => (
                                   
                                // service.map((ser, index) => (
                                    (ser.seller === localStorage.getItem('user_name'))&&
                                    <div key={index}>
                     
                                        <div className="col-lg-4 col-md-6 col-6">
                                            <div className="cardboxes">
                                                <div className="Iconclass">
                                                    <Link to="/contact"><i className={ser.path} /></Link>
                                                    <div className="textdiv">
                                                        <h4>{ser.title}</h4>
                                                        <p>{ser.price}</p>
                                                    <button onClick={() => {
                                                        let newlist = list.filter((ele,ele_ind) => {
                                                            return index!= ele_ind
                                                        })
                                                        setList(newlist);
                                                        // servicesList = newlist;

                                                        }} className='btn btn-danger'>delete</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    // ))
                            )
                            )
                            }
                        {/* </div> */}
                     
                    </div>
                </div>
            </div>

        </div>
    )
}

