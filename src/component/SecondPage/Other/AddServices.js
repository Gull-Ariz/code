import React, {useState} from 'react'
import './AddServices.css'
import { servicesList } from '../Cards/ServiceData';
const service = {
    name: "",
    description: "",
    price: ""
}

function AddServices(props) {
    const [serviceVal, setServiceVal] = useState([service]);

const handleInputChange = e => {
    const { name, value } = e.target;
    setServiceVal(
        {
            ...serviceVal,
            [name]: value
        },
    )
}
const Validate = () => {
    let temp = {}
    temp.name = serviceVal.name ==="" ? false : true;
    temp.description = serviceVal.description === "" ? false : true;
    temp.price = serviceVal.price === "" ? false : true;
    return Object.values(temp).every(x => x === true);
}

const handleSubmit = (e) => {
    e.preventDefault();
    if (Validate()) {
        let temp = {
            name: serviceVal.name,
            description: serviceVal.description,
            price: serviceVal.price,
            seller:localStorage.getItem('user_name')
        };
        addService(temp);
        props.onSave(temp)
    }
}

const addService = (temp) => {
    console.log(servicesList);
    // window.location='/dashboard'
}
    return (
        <div className="mainformdiv">
            <div className="innerformdiv">
                <h2 className="text-center">Add Service</h2>
                <form autoComplete="off" noValidate>
                    <input  placeholder="Service Name" name="name" type="text" value={serviceVal.name} onChange={handleInputChange}/>
                    <textarea   type="text" name="description" placeholder="Decription of the Service" value={serviceVal.description} onChange={handleInputChange}/>
                    <input placeholder="Price" name="price" value={serviceVal.price} onChange={handleInputChange}/>
                    <button onClick={handleSubmit} type="submit" className="btn btn-light">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default AddServices