import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './component/NavbarDropdown/Navbar';
import Footer from './component/Footer/Footer';
import ImageSlider from './component/ImageSlider/ImageSlider';
import {BrowserRouter as Router} from 'react-router-dom';
import VideoSection from './component/VideoBackground/VideoSection';
import ParagraphSection from './component/Paragraph/ParagraphSection';
import ServiceCard from './component/Services/Services';
import ChoseUs from './component/Services/ChoseUs';

function App() {
  return (
    
    <Router>
      <Navbar/>
      <VideoSection/>
      <ParagraphSection/>
      <ChoseUs/>
      <ServiceCard/>
      <Footer/>
    </Router>
    
    
  );
}

export default App;
