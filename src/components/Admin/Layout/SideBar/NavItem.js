import  React from 'react';
import { NavLink } from 'react-router-dom'
import classes from './Sidebar.module.css'


export const NavItem= ({ text,to,icon,adjustIcon,iconWidth,drawer,iconHeight, isActive}) => {


    return   (

        <div className={ classes.menu}>

    <NavLink exact to={to} isActive={isActive} activeClassName={classes.active}   className={classes.dropdownHeader}>
        <div className={classes.itemContainer}>


          <span className={classes.menuIcon} style={adjustIcon}>
                 {  <img   src={icon} alt={text}  width={iconWidth}   height={iconHeight} />}
                </span>
        {!drawer &&  <span>{text }</span>} 
        </div>
        </NavLink>
    </div>

)

}