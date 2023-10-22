import React from 'react';
import classes from './Profile.module.css'
import profileimg from '../../assets/icons/display-picture.svg'
// import { setLocale } from 'yup';



export const Profile = ({drawer})=>{

      let adjustIcon = drawer ? { borderRadius: "8px" ,transform:'scale(0.6)'}:null;  

    return (
        <div className={classes.profileimg} >
            <img  src={profileimg} className={classes.adminPics}  alt="admin pics" style={adjustIcon} />
        {    !drawer && <p>Admin Name</p>}
        </div>
        )


}