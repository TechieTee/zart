import React from 'react'
import classes from './Sidebar.module.css'
import { NavDropdown } from "../SideBar/NavDropdown"
import { NavItem } from './NavItem'
import arrowLeft from '../../assets/icons/pagination-arrow-left.svg'
import arrowRight from '../../assets/icons/pagination-arrow-right.svg'

export const SideBar = React.forwardRef(({ links }, ref) => {

    const { secondary, primary, header } = links

    return (
        <div className={classes.sidemenu} ref={ref} >


            <NavDropdown text={header.text} subText={header.subText} sublinks={header.sublinks} />


            {
                primary.map(({ to, icon, text, sublinks }, index) => (
                    <React.Fragment key={index}>
                        {sublinks ? (
                            <div className={classes.menuItem} >
                                <NavDropdown to={to} icon={icon} text={text} />
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
                secondary.map(({ to, icon, text, sublinks }, index) => (
                    <React.Fragment key={index}>
                        {sublinks ? (
                            <div className={classes.menuItem} >
                                <NavDropdown to={to} icon={icon} text={text} />
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