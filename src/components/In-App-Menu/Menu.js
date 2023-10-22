import React , { useState,useEffect } from 'react';
import SideBar from './SideBar/SideBar'
import TaskBar from './TaskBar/TaskBar';
// import NavIcon from './NavIcon/NavIcon'
import SideMenuLeft from '../../assets/icons/side-menu-right.svg' 
import SideMenuRight  from '../../assets/icons/test-icon.svg' 
import classes from './Menu.module.css';
import Home from '../../assets/icons/home.svg' 
import Enrollment from '../../assets/icons/enrollment.svg' 
import AdminConsole from '../../assets/icons/admin-console.svg' 
import BackGroundCheck from '../../assets/icons/background-check.svg' 
// import Inbox from '../../assets/icons/inbox.svg' 
import InboxMessage from '../../assets/icons/inbox-message.svg' 
import IncidenceReport from '../../assets/icons/incidence-report.svg' 
import Report from '../../assets/icons/report.svg' 
import CaseManagement from '../../assets/icons/case-management.svg' 



let home = {
    icon:Home,
    to:"/home",
    text:'Home'

}

const links = [
    {
        tooltip:'Inbox',
        icon:InboxMessage,
        to:"/inbox",

    }, 
      {
        tooltip:'Admin Console',
        icon:AdminConsole,
        to:"/adminconsole",

    }, 
      {
        tooltip:'Background Check',
        icon:BackGroundCheck,
        to:"/backgroundcheck",

    }, 
  
      {
       
        tooltip:'Case Management',
        icon:CaseManagement,
        to:"/casemng",

    },
       {
        tooltip:'Enrollment',
        icon:Enrollment,
        to:"/",

    },
       {
        tooltip:'Incidence Report',
        icon:IncidenceReport,
        to:"/incidencereport",

    },  
     {
        

        tooltip:'Report',
        icon:Report,
        to:"/report",

    },
]


const sideLinks = [ 
      {
        tooltip:'Admin Console',
        icon:AdminConsole,
        to:"/adminconsole",

    }, 
      {
        tooltip:'Background Check',
        icon:BackGroundCheck,
        to:"/backgroundcheck",

    }, 
  
      {
       
        tooltip:'Case Management',
        icon:CaseManagement,
        to:"/casemng",

    },
       {
        tooltip:'Enrollment',
        icon:Enrollment,
        to:"/",

    },
       {
        tooltip:'Incidence Report',
        icon:IncidenceReport,
        to:"/incidencereport",

    },  
     {
        

        tooltip:'Report',
        icon:Report,
        to:"/report",

    },
]




export default function Menu(){

    const [ menuState, setMenuState ]  = useState(0)
    const [width,setWidth ] = useState(5)
    const arrowIcon = menuState === 0? SideMenuRight:SideMenuLeft;
    



    useEffect(()=>{
        menuState === 1 ? setWidth(5) : menuState === 0 ?  setWidth(0.5) :setWidth(15)
    },[menuState])
    
    const handleTaskBarDrawer = (e)=> {  
        setMenuState( (prevState)=> prevState === 0 ||prevState === 2    ? 1 : 0)
    }

    const handleSideBarDrawer = (e)=>{
        e.stopPropagation();
        e.preventDefault();

        setMenuState(2)
    } 



    return (
    <div   className={classes.menucontainer} style={{width:`${width}%`}}>

            {   menuState === 1 &&
            <TaskBar   data={links}  home = {home} sideBarDrawer={handleSideBarDrawer}  flexDirection='column'/>
            }
            {menuState === 2 && <SideBar  sideBarDrawer={handleTaskBarDrawer} home={home} data={sideLinks} /> 
             }
        <div onClick={handleTaskBarDrawer} className={classes.arrowdir}  style={ { transform: menuState === 0 ? 'translateX(-90%)' : menuState === 1 ?  'translateX(25%)' :   'translateX(130%)'   }   }>
       <img   className={classes.toggleIcon} src={arrowIcon}  alt={'right arrow menu'}  height="70"  />
        </div>
       </div>
       )



}