import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router} from 'react-router-dom';
import HomePage from './component/HomePage/HomePage';
import Card from './component/SecondPage/Cards/Cards';
import Service from './component/SecondPage/Service/Service';
import CardLink from './component/SecondPage/Cards/CardLink';



function App() {
  return (
    
    <Router>
      <CardLink/>
    </Router>
    
    
  );
}

export default App;
