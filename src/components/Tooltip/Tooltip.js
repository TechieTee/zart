import React from 'react';
import ReactTooltip from 'react-tooltip';
import classes from './Tooltip.module.css';



 const Tooltip = ({style,children,label,offset,labelStyle,...otherprops})=>{

    let uniqueLabel = Math.random()*1000 + label
    return (
        <div style={style}>
            <p data-tip data-for={uniqueLabel} style={{textDecoration:'underline',color:'#6780A2',margin:'0',...labelStyle}}>{label}</p>
            <ReactTooltip
            id={uniqueLabel}
            clickable = {true}
            place="bottom" 
            type="light"
            effect = 'solid'
            backgroundColor = "#ffffff"
            offset={offset}
            multiline={true}
            arrowColor= 'transparent'
            aria-haspopup='true'
            className={classes.tooltipRef}
            {...otherprops}
>
         {children} 
        </ReactTooltip>
        </div>
    )
}

Tooltip.defaultProps={
    offset:{right:70,bottom:10},
    style:{display:'inline-block',marginRight:'10px'}
}

export default Tooltip

