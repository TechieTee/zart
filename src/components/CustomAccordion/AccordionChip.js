import React from 'react';
import ReactTooltip from 'react-tooltip';
import classes from './Accordion.module.css';



export const AccordionChip = ({children,label})=>{


    return (
        <div style={{display:'inline-block',marginRight:'10px'}}>
            <p data-tip data-for={label} style={{textDecoration:'underline',color:'#6780A2'}}>{label}</p>
            <ReactTooltip
            id={label}
            place="bottom" 
            type="light"
            backgroundColor="#ffffff"
            effect = 'solid'
            offset={{right:70,bottom:10}}
            multiline={true}
            arrowColor= 'transparent'
            aria-haspopup='true'
            className={classes.tooltipRef}
>
         {children} 
        </ReactTooltip>
        </div>
    )
}