import React from 'react';
import Inbox from './Inbox/Inbox'
import TaskBar from '../TaskBar/TaskBar'

export default function SideBar({data,sideBarDrawer ,home}){

        return (<>
        <Inbox handleSideBarDrawer={sideBarDrawer} />
        <TaskBar data = {data} home={home}  flexDirection='row' />
        </>)

} 