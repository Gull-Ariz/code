import React from 'react'
import './CardLink.css'

function CardLink(props) {
    return (
        
            <div className="container" id="containerid">
                <div className="row">
                    <div className="col-lg-5 col-md-12 col-sm-12 imgdiv">
                        <img src="../../../images/auto2.jpg" />
                    </div>

                    <div className="col-lg-7 col-md-12 col-sm-12">
                            <h2>Electrical Service</h2>
                            <p>Complete Electrical Services in Residential, Commercial and Industrial Sector.
                            MistriBabu has also the technical expertise, managerial competence, and financial
                             capability to execute projects successfully. We also have the reputation for excellent quality and timely completion of projects. MistriBabu is also highly established and the well-known company providing complete Electrical Services in Delhi,
                             Bhubaneswar-Odisha, Noida, Gurgaon, Ranchi, Kolkata. 
                             Our experienced team gives you hassle free Electrical Maintenance.</p>
                             <h6><i className="fas fa-check"></i> Complete New Electric Systems Installation</h6>
                             <h6><i className="fas fa-check"></i> Complete New Electric Systems Installation</h6>
                             <h6><i className="fas fa-check"></i> Complete New Electric Systems Installation</h6>
                             <h6><i className="fas fa-check"></i> Complete New Electric Systems Installation</h6>
                             <h6><i className="fas fa-check"></i> Complete New Electric Systems Installation</h6>

                    </div>
                </div>
                <div className="row">
                    <div className="col-12 offset-10">
                        <button className="btn btn-primary">Signup</button>
                    </div>
                </div>
            </div>
    )
}

export default CardLink
