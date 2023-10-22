import React from 'react';
import classes from './NavigationInfoBar.module.css'
import { NavLink } from 'react-router-dom'
import leftArrow from '../../assets/icons/left-arrow.svg'

const NavigationInfoBar = (props) => {
    const { navLinkTitle,navLinkUrl,bgColor,bgStyle, children} =props  
    let backgroundColor = bgColor ? bgColor : '#ffffff'
    return (
        <div className={classes.barWrapper} style={{backgroundColor,...bgStyle}}>
            <div className={classes.navContainer}>
                <img src={leftArrow} alt=""  width='20' style={{marginRight:"10px"}}/>
                <span style={{fontSize:'18px',color:'#6780A2',marginTop:'-3px'}}>
                <NavLink to={navLinkUrl}>
                    
                  {navLinkTitle}
                </NavLink>
                </span>
            </div>
            <div className={classes.contentContainer}>

                {children}
            </div>
        </div>
    )
}

export default NavigationInfoBar;