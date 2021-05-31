import React from 'react'
import ButtonAbout from './Buttons'
import './ParagraphComponent.css'

function ParagraphComponent() {
    return (
        <div className='mainParagraphdiv'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12 imgclassdiv">
                        <img src="../../../images/service2.png"/>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 paragraphheadindiv">
                        <h2>
                        COMPLETE MAINTENANCE AND REPAIRING SOLUTIONS
                        </h2>
                        <p className="firstletter">
                        HelpOnline is your one-stop solution to sort all your Apartment, Villa, Office and other needs ranging from civil construction to maintenance work, quickly, professionally and conveniently. Our commitment to bring professionalism, good service and trust to the Residential, Commercial and Industrial sectors.
                        </p>
                        <p>
                        We deliver your work by verified & qualified professionals only. Our services providing in Plumber, Electrician, Painter, Carpenter, Interior design, Tiling, Masonry, Cleaning etc.
                        </p>
                        <p>
                        We pride ourselves on understanding our clients concerns and supplying the friendliest, most approachable and most conscientious service in Delhi, Noida, Gurgaon, Bhubaneswar-Odisha, Ranchi, Kolkata, Bengaluru.
                        </p>
                        <p>
                        Our Brand Promise was created to give you confidence that MistriBabu will deliver on service, quality and brand. We value our customers and want to provide you with the best so we follow our Brand Promise to do just that:
                        </p>
                        
                        <ButtonAbout btnName="Know More About Us" clsName="btn-Aboutus" domainname="/aboutus"/>

                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ParagraphComponent
