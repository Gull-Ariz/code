import React from 'react';
import './Contact.css';
import Navbar from '../../HomePage/NavbarDropdown/Navbar';


function Contact() {
    return (
        
        <>
        <Navbar/>
        <div className="row">
            <div className="col-12 mainheadingdiv">
                <h1>Contact</h1>
            </div>
        </div>
        <div className="container" id="contactcontainerdiv">
            <div className="row">
                    <div className="col-12 text-center mt-5">
                        <h1>Contact Now</h1>
                    </div>
                </div>
            <div className="row">
                <div className="col-lg-6 col-md-12 col-12 main-img-div">
                    <img src="../../../images/service2.png"/>
                </div>

                <div className="col-lg-6 col-md-12 col-12 main-from-div">
                    <form>
                        
                        <div className="inputdiv">
                            <input type="text" placeholder="Full Name"/>
                        </div>

                        <div className="inputdiv">
                            <input type="email" placeholder="Email ID"/>
                        </div>


                        <div className="inputdiv">
                            <input type="phonenumber" placeholder="Phone Number"/>
                        </div>

                        <div className="inputdiv">
                            <input type="text" placeholder="Address/location"/>
                        </div>


                        <div className="inputdiv">
                            <input type="text" placeholder="Service Name"/>
                        </div>


                        <div className="inputdiv">
                            <input type="text" placeholder="Description of the Service"/>
                        </div>

                        <button>Submit</button>
                    </form>
                    
                </div>
            </div>
        </div>
        </>
    )
}

export default Contact
