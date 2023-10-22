import classes from './TableRoles.module.css'
import React from 'react'

const TableRole = (props) => {
    return (
        <div>
            <span className={classes.Roles}>{props.value}</span>
        </div>
    )
}

export default TableRole
