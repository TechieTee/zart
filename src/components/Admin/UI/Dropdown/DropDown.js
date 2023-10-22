import React,{ useState,useRef } from 'react';
import classes from  './Dropdown.module.css';

export const  DropDown=({pre,options,mainIcon,text,style,optionStyle,selectStyle})=>{
const [ isOpen,setIsOpen ] = useState(false);

const toggleRef =useRef() 

const toggling = (e) =>{
    e.stopPropagation()
    setIsOpen(!isOpen)
}
const handlingPropagation = (e)=>{
    e.stopPropagation();
}
return (
            <div   className={classes.dropdownContainer} ref={toggleRef}  style={style}>
            <div  onClick={toggling} style={selectStyle}  >
                    {mainIcon && <img src={mainIcon} alt="dropdown-icon" />}
                    { text && text }  
            </div >
            {isOpen && (
        
                <div   onClick={handlingPropagation}
                   
                    className={classes.dropDownItem} style={optionStyle } >
               { options } 
               {/* { children } */}
              
            </div>
        )
                }


                
            
            
            </div>

        )
      }