import React, { useState, useEffect, useRef } from 'react';
import classes from './Layout.module.css'
import { SideBar } from './SideBar/SideBar'
import InAppMenu from '../../In-App-Menu/Menu'

export const Layout = ({ children, links }) => {
    const sideBarRef = useRef();

    return (
        <>
            <div className={classes.layoutcontainer}>

                <div className={classes.sidebar} >
                    <SideBar ref={sideBarRef} links={links} />
                </div>
                <main className={classes.main}>
                    {children}

                    <InAppMenu />
                </main>
            </div>
        </>)
}
