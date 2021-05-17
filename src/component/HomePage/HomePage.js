import React from 'react'
import Footer from './Footer/Footer';
import Navbar from './NavbarDropdown/Navbar';
import VideoSection from './VideoBackground/VideoSection';
import ParagraphSection from './Paragraph/ParagraphSection';
import ChoseUs from './Services/ChoseUs';
import ServiceCard from './Services/Services';

function HomePage() {
    return (
        <div>
            <Navbar/>
            <VideoSection/>
            <ParagraphSection/>
            <ChoseUs/>
            <ServiceCard/>
            <Footer/>

        </div>

    )
}

export default HomePage
