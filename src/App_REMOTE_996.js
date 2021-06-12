import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router} from 'react-router-dom';
import HomePage from './component/HomePage/HomePage';




function App() {
  return (
    
    <Router>
        <HomePage/>
    </Router>
    
    
  );
}

export default App;
