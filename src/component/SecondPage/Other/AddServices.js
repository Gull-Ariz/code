import React from 'react'
import './AddServices.css'

function AddServices() {
    return (
        <div className="mainformdiv">
            
            <div className="innerformdiv">
                <h2 className="text-center">Add Service</h2>
                <form autoComplete="off" noValidate>
                    <input type="file" className="imageinput"/>
                    <input  placeholder="Service Name" type="text"/>
                    <textarea   type="text" placeholder="Decription of the Service"/>
                    <input  type="submit" className="submit-btn" value="Submit" />    
                </form>
                
            </div>
        </div>
    )
}

export default AddServices