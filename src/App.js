import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Route,Router,Switch} from 'react-router-dom';
// import {Route,Switch} from 'react-router-dom';
import HomePage from './component/HomePage/HomePage';
import Card from './component/SecondPage/Cards/Cards';
import {ElectricianServices,PlumberServices,PaintingServices,CarpanterServices,InteriorDesignServices,ConstructionServices,HandymanServices,AcServices} from './component/SecondPage/Cards/CardServices';
import Login from './component/HomePage/SignupLogin/Login';



function App() {
  return (
   <BrowserRouter>
    <Switch>
      <Route path="/" exact component={HomePage}/>
      <Route path="/painting" exact component={PaintingServices}/>
      <Route path="/handyman" exact component={HandymanServices}/>
      <Route path="/carpanter" exact component={CarpanterServices}/>
      <Route path="/electrician" exact component={ElectricianServices}/>
      <Route path="/construction" exact component={ConstructionServices}/>
      <Route path="/acservice" exact component={AcServices}/>
      <Route path="/carpanters" exact component={CarpanterServices}/>
      <Route path="/plumber" exact component={PlumberServices}/>
      <Route path="/Interior" exact component={InteriorDesignServices}/>
      
    </Switch>
   </BrowserRouter>
    
    
  );
}

export default App;
