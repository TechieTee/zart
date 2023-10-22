import React from 'react';
import classes from './Table.module.css'
import DragIndicator from '../../assets/icons/drag-indicator.svg'  

export const Item = ({column }) =>  { 

    
 return (   <label   style={{fontSize:'14px',lineHeight: '18px',fontWeight:'normal',margin: '0 10px',display:'flex',alignItems:'center',background:'white'}}>
<img className={classes.dragIcon} src={DragIndicator}   alt="drag-indicator" />   <pre>  </pre>
{
column.fixedColumn  !== true &&
<>
<input type="checkbox" className={ classes.customCheckbox} {...column.getToggleHiddenProps()} /><pre>  </pre></>
}
<span    style={{color: column.fixedColumn  === true && '#193B68',fontWeight:column.fixedColumn  === true && 600}}>{column.Header}</span>
</label>
)
}