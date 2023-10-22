import React from 'react';
import classes from './TaskBar.module.css';
import NavIcon from '../NavIcon/NavIcon'

const  TaskBar =({data,home,sideBarDrawer,flexDirection})=>{


    let homeIconStyle = flexDirection === 'column' ? {
        display:'flex',
        flexDirection: 'column',
        justifyContent:' center',
        alignItems:' center',
        height:'120px',
        backgroundColor:'#F4F6FC'
    }:
    {
        display:'flex',
        flexDirection:'row',
        justifyContent:' center',
        alignItems:' center',
        backgroundColor:'#F4F6FC',
        flex:'1 1 100%'
    };

    let iconStyle= flexDirection === 'row' ?{
        flex:'0 0  33%'
    }:
    null;

    return (
        <div    >
            <div className={classes.homeIcon} style={homeIconStyle}>
               <NavIcon iconDetails={home}   />
               <span>Home</span>
            </div>

            <div className={classes.taskbarFixed} style={{flexDirection:flexDirection}}>

                {data.map((item,index)=>{
                   
                   
                        return (
                            <div style={iconStyle} key={index}>

                                <NavIcon  iconDetails={item} sideBarDrawer = {sideBarDrawer} />
                            </div>
                        )
                    }
                    )
                }
                    </div>

        </div>
        )

}

export default TaskBar
