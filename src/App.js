import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './component/NavbarDropdown/Navbar';
import Footer from './component/Footer/Footer';
import {BrowserRouter as Router} from 'react-router-dom'
function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Footer/>
    </Router>
    
      
    </>
  );
}

export default App;
