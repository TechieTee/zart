import React from 'react'
import classes from './Sidebar.module.css'
import { NavDropdown } from "./NavDropdown"
import { NavItem } from './NavItem'

export const SideBar = React.forwardRef(({ links }, ref) => {

    const { secondary, primary, header } = links

    console.log({ secondary, primary, header })
    return (
        <div className={classes.sidemenu} ref={ref} >
            <NavDropdown text={header.text} subText={header.subText} sublinks={header.sublinks} />


            {
                primary.map(({ to, icon, text, sublinks }) => (
                    <React.Fragment key={text}>
                        {sublinks ? (
                            <div className={classes.menuItem} >
                                <NavDropdown sublinks={sublinks} to={to} icon={icon} text={text} />
                            </div>)
                            :

                            <div className={classes.menuItem}>
                                <NavItem to={to} icon={icon} text={text} />
                            </div>
                        }
                    </React.Fragment>
                )
                )
            }
            {
                secondary.map(({ to, icon, text, sublinks }) => (
                    <React.Fragment key={text}>
                        {sublinks ? (
                            <div className={classes.menuItem} >
                                <NavDropdown to={to} icon={icon} text={text} sublinks={sublinks} />
                            </div>)
                            :

                            <div className={classes.menuItem}>
                                <NavItem to={to} icon={icon} text={text} />
                            </div>
                        }
                    </React.Fragment>
                )
                )
            }
        </div>
    )
})