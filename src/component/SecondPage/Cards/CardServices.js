import React from 'react'
import './CardServices.css'
import Navbar from '../../HomePage/NavbarDropdown/Navbar';
import {Link} from 'react-router-dom';
import {HandyManData,PlumberData} from './ServiceData';

function ElectricianServices() {
    return (
        <>
        <Navbar/>
        <div className="cardheaderdiv">
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 offset-2">
                    <h1>ELECTRICIAN SERVICES</h1>
                    <p>Complete New Electric Systems Installation,Electric Short Circuit Fixing and Installation,DP Box Breaker Trip Fixing.....</p>
                    
                </div>

                <div className="col-lg-4 col-md-4 col-sm-4 imgdiv">
                <img src="../../../images/electrician1.jpg" />
                </div>
            </div>    
            
        </div>
        <div className="container" id="containerid">
            <div className="row">
                {HandyManData.map((item,index)=>{
                    return(
                        <div key={index}>
                                <div className="col-lg-4 col-md-6 col-12">
                                <div className="cardboxes">
                                    <div className="Iconclass">
                                    <a href="#"><i className={item.path}/></a>
                                    <div className="textdiv">
                                    <h4>{item.title}</h4>
                                    <p>{item.price}</p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    )
                })}                
            </div>
        </div>
      </>  
)
}



function PlumberServices() {
    return (
        <>
        <Navbar/>
        <div className="cardheaderdiv">
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 offset-2">
                    <h1>Plumber Service</h1>
                    <p>Water Leak Repair,Water Heater Repair and Installation,Extend Water Connection.....</p>
                    
                </div>

                <div className="col-lg-4 col-md-4 col-sm-4 imgdiv">
                    <img src="../../../images/plumber1.jpg" /> 
                </div>
            </div>    
            
        </div>
        <div className="container" id="containerid">
            <div className="row">
                {PlumberData.map((item,index)=>{
                    return(
                        <div key={index}>
                                <div className="col-lg-4 col-md-6 col-12">
                                <div className="cardboxes">
                                    <div className="Iconclass">
                                    <a href="#"><i className={item.path}/></a>
                                    <div className="textdiv">
                                    <h4>{item.title}</h4>
                                    <p>{item.price}</p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    )
                })}                
            </div>
        </div>
      </>  
)
}



function PaintingServices() {
    return (
        <>
        <Navbar/>
        <div className="cardheaderdiv">
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 offset-2">
                    <h1>Painting Service</h1>
                    <p>Interior Painting,Exterior Painting,Apartment Painting,House Painting.....</p>
                    
                </div>

                <div className="col-lg-4 col-md-4 col-sm-4 imgdiv">
                <img src="../../../images/painter1.jpg" />
                </div>
            </div>    
            
        </div>
        <div className="container" id="containerid">
            <div className="row">
                {HandyManData.map((item,index)=>{
                    return(
                        <div key={index}>
                                <div className="col-lg-4 col-md-6 col-12">
                                <div className="cardboxes">
                                    <div className="Iconclass">
                                    <a href="#"><i className={item.path}/></a>
                                    <div className="textdiv">
                                    <h4>{item.title}</h4>
                                    <p>{item.price}</p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    )
                })}                
            </div>
        </div>
      </>  
)
}


function CarpanterServices() {
    return (
        <>
        <Navbar/>
        <div className="cardheaderdiv">
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 offset-2">
                    <h1>Carpanter Services</h1>
                    <p>Bespoke Furniture,Built-in Wardrobes,Cabinets, Bookcases and Drawers,Gates and Fences.....</p>
                    
                </div>

                <div className="col-lg-4 col-md-4 col-sm-4 imgdiv">
                <img src="../../../images/carpanter1.jpg" />
                </div>
            </div>    
            
        </div>
        <div className="container" id="containerid">
            <div className="row">
                {HandyManData.map((item,index)=>{
                    return(
                        <div key={index}>
                                <div className="col-lg-4 col-md-6 col-12">
                                <div className="cardboxes">
                                    <div className="Iconclass">
                                    <a href="#"><i className={item.path}/></a>
                                    <div className="textdiv">
                                    <h4>{item.title}</h4>
                                    <p>{item.price}</p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    )
                })}                
            </div>
        </div>
      </>  
)
}









function HandymanServices() {
    return (
            <>
            <Navbar/>
            <div className="cardheaderdiv">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 offset-2">
                        <h1>Handyman Service</h1>
                        <p>Drilling & Hanging Work,Mirro Installation,Shelves Fixing .....</p>
                        
                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-4 imgdiv">
                        <img src="../../../images/handyman1.jpg" /> 
                    </div>
                </div>    
                
            </div>
            <div className="container" id="containerid">
                <div className="row">
                    {HandyManData.map((item,index)=>{
                        return(
                            <div key={index}>
                                    <div className="col-lg-4 col-md-6 col-12">
                                    <div className="cardboxes">
                                        <div className="Iconclass">
                                        <a href="#"><i className={item.path}/></a>
                                        <div className="textdiv">
                                        <h4>{item.title}</h4>
                                        <p>{item.price}</p>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        )
                    })}                
                </div>
            </div>
          </>  
    )
}


function AcServices() {
    return (
        <>
        <Navbar/>
        <div className="cardheaderdiv">
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 offset-2">
                    <h1>AC Services</h1>
                    <p>AC Servicing,AC Repairs,AC Installation,Central Air Conditioning,Non Cooling Problems.....</p>
                    
                </div>

                <div className="col-lg-4 col-md-4 col-sm-4 imgdiv">
                <img src="../../../images/ac1.jpg" />
                </div>
            </div>    
            
        </div>
        <div className="container" id="containerid">
            <div className="row">
                {HandyManData.map((item,index)=>{
                    return(
                        <div key={index}>
                                <div className="col-lg-4 col-md-6 col-12">
                                <div className="cardboxes">
                                    <div className="Iconclass">
                                    <a href="#"><i className={item.path}/></a>
                                    <div className="textdiv">
                                    <h4>{item.title}</h4>
                                    <p>{item.price}</p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    )
                })}                
            </div>
        </div>
      </>  
)
}



export  {ElectricianServices,PlumberServices,PaintingServices,CarpanterServices,HandymanServices,AcServices}
