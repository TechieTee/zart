import React from 'react';
import classes from './StatusLabel.module.css'



export const StatusLabel = (props) =>{

// let style = value === 'Agender' ? 'suspended' : value === 'Male' ? 'active' : 'inActive';
    return (<span  className={[classes[props.styleType]].join()}> { props.value } </span>)

}