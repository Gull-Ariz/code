import React from 'react';
import './Service.css';
import imag1 from './mainPic.jpg';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
function Service(props) {
    return (
        <>
            <div className=" heading">
                <h2 className="ms-5 pt-4 pb-4">Electrical Service</h2>
            </div>
            <section>
                <div className="box">
                    <div className="Image ms-5">
                        <img
                            src={imag1}
                            alt="pic1"
                        />
                    </div>
                    <div>
                        <div className="description">
                            {console.log("yes")}
                            <h2 className="mt-5">Electrical Service</h2>
                            <h6>Complete Electrical Services in Residential, Commercial and Industrial Sector.</h6>
                            <p>MistriBabu has also the technical expertise, managerial competence, and financial capability to execute projects successfully. We also have the reputation for excellent quality and timely completion of projects. MistriBabu is also highly established and the well-known company providing complete Electrical Services in Delhi, Bhubaneswar-Odisha, Noida, Gurgaon, Ranchi, Kolkata. Our experienced team gives you hassle free Electrical Maintenance.</p>
                            <ul>
                                <li>Complete New Electric Systems Installation</li>
                                <li>Electric Short Circuit Fixing</li>
                                <li>DP Box Breaker Trip Fixing</li>
                                <li>Light Dimmer Installation</li>
                                <li>Light & Lamp Fixing</li>
                                <li>Chandelier Hanging</li>
                                <li>Switch & Socket Installation</li>
                                <li>Hide Cables Organizer Ducting</li>
                                <li>Home Appliances Fixing</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <button className="btn btn-lg btn-success contactBtn">Contact</button>
            </section>
        </>
    );
}
export default Service;