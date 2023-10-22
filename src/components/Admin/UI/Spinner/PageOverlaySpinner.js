// #FCFCFC
import React from 'react';
import classes from './Spinner.module.css';
import loadingSpinner from '../../../assets/images/loading.gif'
export const PageOverlaySpinner = (props) => {

//   let loading  = props.loading ?;

    return(
        
        // <div style={style} className={classes.spinner}>
        <div style={{
            backgroundColor:'rgba(103,128,162,0.25)',
            height:'100%',
            width:'100%',
            display : props.loading ? 'flex' : 'none'
        }} className={[classes.overlay,classes.overlayFixed].join(' ')}>
           <img src={loadingSpinner} alt="" />
        </div>
       
    )
}