import React from 'react';
import classes from './SideDrawer.module.css';
import Backdrop from '../../UI/BackDrop/Backdrop';

import Navigationitems from '../NavigationItems/NavigationItems'


const sideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer, classes.Close];

    if(props.open){
        attachedClasses = [classes.SideDrawer, classes.Open];
    }

    return(
        <React.Fragment>
        <Backdrop close={props.closeDrawer} show={props.open}/>
        <div onClick={props.closeDrawer} className={attachedClasses.join(' ')}> 
           
            <nav className={classes.nav}>
            <Navigationitems  device="mobile" />
            </nav>
        </div>
        </React.Fragment>
    )
}
export default sideDrawer;