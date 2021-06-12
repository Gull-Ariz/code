import React, { useState } from 'react';
import './DashboardService.css';
import ReactModal from 'react-modal';
import AddServices from './AddServices';

export default function DashboardServiceProvider() {
    //const [modalIsOpenAddServiceForm, setModalIsOpenAddServiceForm] = useState(false);

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
                <a href="#"><i className="fas fa-plus"></i><span>Add Service</span></a>
                <a href="#"><i className="fas fa-edit"></i><span>Update Service</span></a>
                <a href="#"><i className="fas fa-trash-alt"></i><span>Remove Service</span></a>
                <a href="#"><i className="fas fa-envelope"></i><span>Messages</span></a>
            </div>
            <div>
            <AddServices/>
            </div>


            <div className="services">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-12 col-12">
                            <img src="../../../images/ac.jpeg" />
                        </div>
                        <div className="col-lg-4 col-md-12 col-12">
                            <img src="../../../images/ac.jpeg" />
                        </div>
                        <div className="col-lg-4 col-md-12 col-12">
                            <img src="../../../images/ac.jpeg" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

