import React, { lazy }  from 'react'
import { NavLink, Redirect, Route, Switch, useLocation, useRouteMatch } from 'react-router-dom'
import BreadCrumb from '../../../components/UI/BreadCrumb/BreadCrumb';
import styled from "styled-components";
import { Suspense } from 'react';

const Enrollment = lazy(() => import('./AppModules/Enrollment/index'))
const BackgroundCheck = lazy(() => import('./AppModules/BackgroundCheck/index'))
const AdminConsole = lazy(() => import('./AppModules/AdminConsole/index'))
const IncidentReport = lazy(() => import('./AppModules/IncidentReport/index'))
const Journals = lazy(() => import('./AppModules/Journals/index'))


let TempLoader = (
    <div className="row justify-content-center vh-100"><h5>Loading...</h5></div>
)

const breadCrumbConfig =  [
    {
        title:'Roles & permission',
        url:'#'
    }
]

const appModulesRoutes =  [
    {
        title:'Enrollment',
        path:'/enrollment',
        component:Enrollment
    },
    {
        title:'Admin Console',
        path:'/admin-console',
        component: AdminConsole
    },
    {
        title:'Incident Report',
        path:'/incident-report',
        component: IncidentReport
    },
    {
        title:'Background Check',
        path:'/background-check',
        component:BackgroundCheck
    },
    {
        title:'Journals',
        path:'/journals',
        component:Journals
    },
]

const LinkWrapper = styled.ul`
  display: inline-block;
  margin: 0;
  padding: 0;
`;

const LinkItem = styled.li`
    list-style:none;
    list-style: none;
    display: inline-block;
    margin: 21px 2px;
    
    a{
        display: inline;
        margin-right: 15px;
        color: #505F79;
        font-size: 22px;
        background: #F4F5F7;
        border-radius: 5px;
        padding: 14px 19px;
        
        &:hover{
            background: #CEDFFF;
            color: #505F79;
        }
    }
    .active{
        color: #fff;
        background: #1B69FB;

        &:hover{
            background: #1B69FB;
            color: #fff;
        }

    }

   
`;


function Assets(props) {
    const { path, url } = useRouteMatch();

    return (
        <>
        <BreadCrumb links={breadCrumbConfig}/>
        <section className="mt-4">
            <div>
                <LinkWrapper>
                    {appModulesRoutes.map((item, index) => {
                        const {path:PathName, title} = item
                        return (
                            <LinkItem key={index}>
                                <NavLink  to={`${path}${PathName}`}>
                                    {title}
                                </NavLink>
                            </LinkItem>
                        )})}
                </LinkWrapper>
            </div>
            <div className="mt-5">
                <Suspense fallback={TempLoader}>
                    <Switch>
                        {appModulesRoutes.map((item, i) => (
                            <Route key={i} exact path={`${path}${item.path}`} component={item.component} />
                        ))}
                        <Redirect
                        to={{
                            pathname: `${path}`,
                            state: {
                                from: "/",
                            },
                        }}
                    ></Redirect>
                    </Switch>
                    
                </Suspense>
            </div>
        </section>
        </>
    )
}



export default Assets

