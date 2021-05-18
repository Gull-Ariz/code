import React from 'react'
import Footer from './Footer/Footer';
import Navbar from './NavbarDropdown/Navbar';
import VideoSection from './VideoBackground/VideoSection';
import ParagraphComponent from './Paragraph/ParagraphComponent';
import ChoseUs from './Services/ChoseUs';
import ServiceCard from './Services/Services';

function HomePage() {
    return (
        <div>
            
            <Navbar/>
            <VideoSection/>
            <ParagraphComponent/>
            <ChoseUs/>
            <ServiceCard/>
            <Footer/>
        </div>


        // <div>
        //     <ParagraphComponent/>      
        // </div>

    )
}

export default HomePage
