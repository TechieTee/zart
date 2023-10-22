import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './NavIcon.module.css';


export default function NavIcon({iconDetails}){
    const {to,icon ,tooltip } = iconDetails

   
   
    return (
<>
            <div className={classes.iconcontainer}  >
 {                  <NavLink to={to}   activeClassName={classes.active}  exact >

                    <span className={classes.iconContent}>

                    <img  src={icon}  alt ={tooltip} height={30}  className={classes.icon}/>
                    </span>
            {  tooltip &&  <span className={classes.tooltip}>{tooltip}</span> }
            </NavLink>
           
           
            }
               
        </div>
</>
    )
}