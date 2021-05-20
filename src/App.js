import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Route,Router,Switch} from 'react-router-dom';
// import {Route,Switch} from 'react-router-dom';
import HomePage from './component/HomePage/HomePage';
import Card from './component/SecondPage/Cards/Cards';
import {ElectricianServices,PlumberServices,PaintingServices,CarpanterServices,InteriorDesignServices,ConstructionServices,HandymanServices,AcServices} from './component/SecondPage/Cards/CardServices';



function App() {
  return (
   <BrowserRouter>
    <Switch>
    
    <Route path="/"  component={InteriorDesignServices}/>
    
    
    </Switch>
   
   </BrowserRouter>
    
    
  );
}

export default App;
