import React, {useState} from 'react'
import {ButtonSignup,ButtonLogin} from './Button'
import './Navbar.css'
import {Link} from 'react-router-dom'
import {DropdownHandyMan,DropdownPainting,DropdownPlumber,DropdownElectrician, DropdownCarpanter,DropdownServices} from './Dropdown'
import {HandymanServices} from '../../SecondPage/Cards/CardServices';
import ReactModal from 'react-modal';
import Login from '../SignupLogin/Login';
import './Button.css'





function Navbar() {
    const [click,setClick]=useState(false)
    const [dropdownhandyman,setDropdownHandyMan]=useState(false)
    const [dropdownplumber,setDropdownPlumber]=useState(false)
    const [dropdownelectrician,setDropdownElectrician]=useState(false)
    const [dropdownpainter,setDropdownPainter]=useState(false)
    const [dropdowncarpanter,setDropdownCarpanter]=useState(false)
    const [dropdownservices,setDropdownServices]=useState(false)
    
    const [modalIsOpenSignUp, setModalIsOpenSignUp] = useState(false);
    
    

    
    const handleClick=()=>setClick(!click)
    const closeMobileMenu=()=>setClick(false)
    
    const onMouseEnterHandyMan=()=>{
        if(window.innerWidth<960){
            setDropdownHandyMan(false)
        }
        else{
            setDropdownHandyMan(true)
        }
    }

    const onMouseLeaveHandyMan=()=>{
        if(window.innerWidth<960){
            setDropdownHandyMan(false)
        }
        else{
            setDropdownHandyMan(false)
        }
    }


    const onMouseEnterPlumber=()=>{
        if(window.innerWidth<960){
            setDropdownPlumber(false)
        }
        else{
            setDropdownPlumber(true)
        }
    }

    const onMouseLeavePlumber=()=>{
        if(window.innerWidth<960){
            setDropdownPlumber(false)
        }
        else{
            setDropdownPlumber(false)
        }
    }


    const onMouseEnterElectrician=()=>{
        if(window.innerWidth<960){
            setDropdownElectrician(false)
        }
        else{
            setDropdownElectrician(true)
        }
    }

    const onMouseLeaveElectrician=()=>{
        if(window.innerWidth<960){
            setDropdownElectrician(false)
        }
        else{
            setDropdownElectrician(false)
        }
    }


    const onMouseEnterPainter=()=>{
        if(window.innerWidth<960){
            setDropdownPainter(false)
        }
        else{
            setDropdownPainter(true)
        }
    }

    const onMouseLeavePainter=()=>{
        if(window.innerWidth<960){
            setDropdownPainter(false)
        }
        else{
            setDropdownPainter(false)
        }
    }


    const onMouseEnterCarpanter=()=>{
        if(window.innerWidth<960){
            setDropdownCarpanter(false)
        }
        else{
            setDropdownCarpanter(true)
        }
    }

    const onMouseLeaveCarpanter=()=>{
        if(window.innerWidth<960){
            setDropdownCarpanter(false)
        }
        else{
            setDropdownCarpanter(false)
        }
    }

    const onMouseEnterServices=()=>{
        if(window.innerWidth<960){
            setDropdownServices(false)
        }
        else{
            setDropdownServices(true)
        }
    }

    const onMouseLeaveServices=()=>{
        if(window.innerWidth<960){
            setDropdownServices(false)
        }
        else{
            setDropdownServices(false)
        }
    }

    
    
    return (
        <>
            <nav className="navigationbar">
                <Link to="/"  className='navigationbar-logo'>
                    HelpOnline
                </Link>
                <div className='navigationbar-menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                </div>
                <ul className={click ? 'navigationbar-menu active': 'navigationbar-menu'}>
                    

                    <li className='navigationbar-item'>
                        <Link to='/aboutus' className="navigationbar-links" onClick={closeMobileMenu}>
                            About
                         </Link>
                    </li>

                    <li className='navigationbar-item' 
                        onMouseEnter={onMouseEnterHandyMan}
                        onMouseLeave={onMouseLeaveHandyMan}
                    >
                        <Link  className="navigationbar-links" onClick={closeMobileMenu}>
                            Handyman
                         </Link>
                         {dropdownhandyman && <DropdownHandyMan/>}
                    </li>

                    <li className='navigationbar-item' 
                        onMouseEnter={onMouseEnterPlumber}
                        onMouseLeave={onMouseLeavePlumber}
                    >
                        <Link  className="navigationbar-links" onClick={closeMobileMenu}>
                            Plumber
                         </Link>
                         {dropdownplumber && <DropdownPlumber/>}
                    </li>

                    <li className='navigationbar-item' 
                        onMouseEnter={onMouseEnterElectrician}
                        onMouseLeave={onMouseLeaveElectrician}
                    >
                        <Link  className="navigationbar-links" onClick={closeMobileMenu}>
                        Electrician
                         </Link>
                         {dropdownelectrician && <DropdownElectrician/>}
                    </li>

                    <li className='navigationbar-item' 
                        onMouseEnter={onMouseEnterPainter}
                        onMouseLeave={onMouseLeavePainter}
                    >
                        <Link  className="navigationbar-links" onClick={closeMobileMenu}>
                            Painter
                         </Link>
                         {dropdownpainter && <DropdownPainting/>}
                    </li>

                    <li className='navigationbar-item' 
                        onMouseEnter={onMouseEnterCarpanter}
                        onMouseLeave={onMouseLeaveCarpanter}
                    >
                        <Link  className="navigationbar-links" onClick={closeMobileMenu}>
                            Carpanter
                         </Link>
                         {dropdowncarpanter && <DropdownCarpanter/>}
                    </li>

                    <li className='navigationbar-item' 
                        onMouseEnter={onMouseEnterServices}
                        onMouseLeave={onMouseLeaveServices}
                    >
                        <Link  className="navigationbar-links" onClick={closeMobileMenu}>
                            Services
                         </Link>
                         {dropdownservices && <DropdownServices/>}
                    </li>

                    <li className='navigationbar-item'>
                        <ButtonLogin ButtonName="Login" cName="btn-login"></ButtonLogin>
                    </li>
                </ul>
                <ButtonSignup ButtonName="SignUp" cName="btn-signup"></ButtonSignup>
            </nav>
        </>
    )
}

export default Navbar;