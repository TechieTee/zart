import React , { useState ,useEffect } from 'react';
import  classes  from  './Sidebar.module.css'
import { NavLink }  from 'react-router-dom'
import arrowRight from '../../assets/icons/arrow-right.svg' 
import arrowDown from '../../assets/icons/nav-arrow-down.svg' 


export  const NavDropdown=({drawer,to,sublinks,text, iconWidth,adjustIcon ,icon,iconHeight}) =>{
    const [ isDropdownOpen,setIsDropdownOpen] =useState(false);
    const [arrow,setArrow] = useState(arrowRight)
    
    let dropdownBg = isDropdownOpen ? {background:'#D0E4FF'} : null;


    const toggleDropdown = (e) =>{
        e.preventDefault();
        e.stopPropagation();
        setIsDropdownOpen(dropdownState=> !dropdownState)
    }

    const list= (sublinks.map(({to,text,icon},index) => {
    
     return (
         <li  className={[classes.subMenu,classes.menu].join(' ')} key={index} onClick={(e)=>{e.stopPropagation()}}>

            <NavLink exact to={to} activeClassName={classes.active} >
                <span  className={classes.menuIcon}>
                {  <img  src={icon} alt={text}   height={iconHeight} width={iconWidth}  style={adjustIcon}/>}
                </span>
                {!drawer && <span>  {text} </span>}
            </NavLink>
         </li>
    
     )
    }));

    useEffect(()=>{

          isDropdownOpen ?setArrow(arrowDown):setArrow(arrowRight)  
        
    }
    ,[isDropdownOpen])


    return (
        <>
            <div className={classes.dropdown} style={dropdownBg} >

            <span className={[classes.menu].join(' ')}  onClick={toggleDropdown} >
            <NavLink exact to={to}  activeClassName={classes.active} className={classes.dropdownHeader} > 
            <div className={classes.itemContainer}>
            <span className={classes.menuIcon}>
                    {  <img   src={icon} alt={text}  width={iconWidth}  height={iconHeight} style={adjustIcon}/>}
            </span>
             <span>   { !drawer && text } </span> 
             <span  onClick={toggleDropdown} className={classes.dropdownToggle}>
                     {  !drawer && <img  className={classes.menuIcon}  src={arrow} alt={'arrow-direction'}  width={30}  height={30} style={adjustIcon} />}
                </span>
             </div>  
            </NavLink >
                </span>           

            {
                isDropdownOpen ?
                <ul className={classes.subcontainer}>
                { list }
                </ul>
                : null

            }
            </div>
        </>



    )
} 