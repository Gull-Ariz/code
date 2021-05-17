import React from 'react'
import {ParagraphContainer,ParagraphHeading,Paragraph,ParagraphImage} from './ParagraphElement'
import Button from '../NavbarDropdown/Button'
const ParagraphSection = () => {
    return (
        
        <ParagraphContainer className="row">
        <ParagraphImage className="col-md-4 col-sm-12">
            <img src="http://www.mistribabu.com/images/MistriBabu.png"/>
        </ParagraphImage>
        <ParagraphHeading className="col-md-6 col-sm-12">
            COMPLETE MAINTENANCE AND REPAIRING SOLUTIONS
            <Paragraph>
            MistriBabu is your one-stop solution to sort all your Apartment, Villa, Office and other needs ranging from civil construction to maintenance work, quickly, professionally and conveniently. Our commitment to bring professionalism, good service and trust to the Residential, Commercial and Industrial sectors.
        </Paragraph>
        <Paragraph>
        We deliver your work by verified & qualified professionals only. Our services providing in Plumber, Electrician, Painter, Carpenter, Interior design, Tiling, Masonry, Cleaning etc.
        </Paragraph>
        <Paragraph>
        We pride ourselves on understanding our clients concerns and supplying the friendliest, most approachable and most conscientious service in Delhi, Noida, Gurgaon, Bhubaneswar-Odisha, Ranchi, Kolkata, Bengaluru.
        </Paragraph>
        <Paragraph>
        Our Brand Promise was created to give you confidence that MistriBabu will deliver on service, quality and brand. We value our customers and want to provide you with the best so we follow our Brand Promise to do just that:
        </Paragraph>
        <Button ButtonName="Know More About Us" cName="btn-About"/>
        </ParagraphHeading>
        
    </ParagraphContainer>
        
        
    )
}

export default ParagraphSection
