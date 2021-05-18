import React from 'react'
import Footer from './Footer/Footer';
import Navbar from './NavbarDropdown/Navbar';
import VideoSection from './VideoBackground/VideoSection';
import ParagraphComponent from './Paragraph/ParagraphComponent';
import ChoseUs from './Services/ChoseUs';
import ServiceCard from './Services/Services';
import SignupLogin from './SignupLogin/SignUp_LogIn';
import Login from './SignupLogin/Login';

function HomePage() {
    return (
        <div>
            
            <Navbar/>
            <VideoSection/>
            <ParagraphComponent/>
            <ChoseUs/>
            <Login/>        
             <ServiceCard/>
             <Footer/>

        </div>


        
    )
}

export default HomePage
