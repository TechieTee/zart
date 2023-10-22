import React from 'react';
import classes from './Spinner.module.css';
import {Spinner} from './Spinner'

export const OverlaySpinner = (props) => {

    
    return(
        <div style={{
            display : props.loading ? 'flex' : 'none'
        }} className={classes.overlay}>
            <Spinner/>
        </div>
    )
}