import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
<<<<<<< HEAD
import Navbar from './component/NavbarDropdown/Navbar';
import Footer from './component/Footer/Footer';
import VideoSection from './component/VideoBackground/VideoSection';
import ParagraphSection from './component/Paragraph/ParagraphSection';
import Service from './component/Services/Service';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SignUp_LogIn from './component/SignupLogin/SignUp_LogIn';
import Cards from './component/Cards/Cards';
function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Switch>
          <Route path="/Service" component={Service}></Route>
          <Route path="/Cards" component={Cards}></Route>
          <Route path={"/SignUp_LogIn"} component={SignUp_LogIn} />
          <Route path={"/"} component={VideoSection} />
          <Route path={"/"} component={ParagraphSection} />
          <Route path={"/"} component={Footer} />
        </Switch>
      </div>
    </BrowserRouter>


=======
import {BrowserRouter as Router} from 'react-router-dom';
import HomePage from './component/HomePage/HomePage';




function App() {
  return (
    
    <Router>
        <HomePage/>
    </Router>
    
    
>>>>>>> 1f1a4d582837cc17376f4978c77685182b7da9c7
  );
}

export default App;
