import classes from './TableStatus.module.css'
import React from 'react'

const TableStatus = (props) => {
    console.log(props)
    let bgColor = props.value === 'Active' ?'Active' :  props.value === 'Inactive' ? 'Inactive':'Suspended';
    console.log(bgColor)
    return (
        <div className={[classes[bgColor]]}>
            <span >{ props.value}</span>
        </div>
    )
}

export default TableStatus

