import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import './Dropdown.css'
import {MenuItemsCarpanter, MenuItemsHandyMan, MenuItemsServices,MenuItemsPlumber,MenuItemsElectrician,MenuItemsPainting} from './MenuItems'


function DropdownHandyMan() {
    const [click,setClick]=useState(false)
    
    const handleClick=()=>setClick(!click)
    
    return (
        <>
           <ul className={click ? 'navbar-dropdown-menu click' : 'navbar-dropdown-menu'}>
                {MenuItemsHandyMan.map((item,index)=>{
                    return(
                        <li key={index}>
                             <Link 
                             className={item.cName} 
                             to={item.path} 
                             onClick={()=>setClick(false)}>
                                {item.title}     
                            </Link>   
                        </li>
                    )
                })}
            </ul> 
            
        </>
    )
}


function DropdownPlumber() {
    const [click,setClick]=useState(false)
    
    const handleClick=()=>setClick(!click)
    
    return (
        <>
           
            <ul className={click ? 'navbar-dropdown-menu click' : 'navbar-dropdown-menu'}>
                {MenuItemsPlumber.map((item,index)=>{
                    return(
                        <li key={index}>
                            <Link 
                            className={item.cName} 
                            to={item.path} 
                            onClick={()=>setClick(false)}>
                               {item.title}     
                            </Link>   
                        </li>
                    )
                })}
            </ul> 
        </>
    )
}


function DropdownElectrician() {
    const [click,setClick]=useState(false)
    
    const handleClick=()=>setClick(!click)
    
    return (
        <>
           
            <ul className={click ? 'navbar-dropdown-menu click' : 'navbar-dropdown-menu'}>
                {MenuItemsElectrician.map((item,index)=>{
                    return(
                        <li key={index}>
                            <Link 
                            className={item.cName} 
                            to={item.path} 
                            onClick={()=>setClick(false)}>
                               {item.title}     
                            </Link>   
                        </li>
                    )
                })}
            </ul> 
        </>
    )
}


function DropdownPainting() {
    const [click,setClick]=useState(false)
    
    const handleClick=()=>setClick(!click)
    
    return (
        <>
           
            <ul className={click ? 'navbar-dropdown-menu click' : 'navbar-dropdown-menu'}>
                {MenuItemsPainting.map((item,index)=>{
                    return(
                        <li key={index}>
                            <Link 
                            className={item.cName} 
                            to={item.path} 
                            onClick={()=>setClick(false)}>
                               {item.title}     
                            </Link>   
                        </li>
                    )
                })}
            </ul> 
        </>
    )
}

function DropdownCarpanter() {
    const [click,setClick]=useState(false)
    
    const handleClick=()=>setClick(!click)
    
    return (
        <>
           
            <ul className={click ? 'navbar-dropdown-menu click' : 'navbar-dropdown-menu'}>
                {MenuItemsCarpanter.map((item,index)=>{
                    return(
                        <li key={index}>
                            <Link 
                            className={item.cName} 
                            to={item.path} 
                            onClick={()=>setClick(false)}>
                               {item.title}     
                            </Link>   
                        </li>
                    )
                })}
            </ul> 
        </>
    )
}


function DropdownServices() {
    const [click,setClick]=useState(false)
    
    const handleClick=()=>setClick(!click)
    
    return (
        <>
           
            <ul className={click ? 'navbar-dropdown-menu click' : 'navbar-dropdown-menu'}>
                {MenuItemsServices.map((item,index)=>{
                    return(
                        <li key={index}>
                            <Link 
                            className={item.cName} 
                            to={item.path} 
                            onClick={()=>setClick(false)}>
                               {item.title}     
                            </Link>   
                        </li>
                    )
                })}
            </ul> 
        </>
    )
}

export  {DropdownHandyMan,DropdownPlumber,DropdownElectrician,DropdownPainting,DropdownCarpanter,DropdownServices} 