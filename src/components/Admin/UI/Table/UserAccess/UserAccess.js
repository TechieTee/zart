import classes from './UserAccess.module.css'
import React from 'react'

const UserAccess = (props) => {
   
    return (
        <div>
            User access to Background Search service <p/>
        <span className={classes.UserAccess}>{props.value}</span>
    </div>
    )
}

export default UserAccess
