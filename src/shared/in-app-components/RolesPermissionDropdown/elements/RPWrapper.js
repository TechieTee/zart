import React from 'react'
import styled from 'styled-components';
import BreadCrumb from '../../../../components/UI/BreadCrumb';
import { DropDownLoaders } from '../../SkeletonLoaders';
import { CancelIcon } from '../../SvgIcons';
import {RPItem, PermissionItem} from './RPItem';

const HeaderWrapper = styled.div`
    width:100%;
    text-align:left;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 8px;
    div:first-child{
        margin:0;
        ul{
            li{
                font-size:15px;
            }
        }
    }
`

const BackButton = styled.button`
    background: transparent;
    color: #193B68;
    font-weight: 500;
    outline:0;
    margin: 0 0 0 3px;
`;

export function RolesWrapper({data, loading, error, nextHandler, closeDropdown}) {
   

    const breadCrumbConfig =  [
        {
            title:'Roles',
            url:'#'
        }
    ]
    return(
        <>
            <div className="bg-white">
                <HeaderWrapper>
                    <BreadCrumb links={breadCrumbConfig} />
                    <p className="m-0" onClick={closeDropdown}><CancelIcon width="13" height="13" /></p>
                </HeaderWrapper>
                {loading ?
               <DropDownLoaders length={3} /> 
                :
                error ? 
                    <p className="text-center mt-3">Unable to fetch roles for this user</p>
                :
                <section className="mt-1">
                    {data?.map((item, index) => (
                        <RPItem
                        key={item.roleId} 
                        click={() => nextHandler(item)} 
                        title={item.name} 
                        description={item.description} />
                    ))}
                </section>
                }
            </div>
        </>
    )
}

export function PermissionsWrapper({prevHandler,data,loading,error,selectedRole, closeDropdown}) {

    const breadCrumbConfig =  [
        {
            title:'Roles',
            url:'#'
        },
        {
            title:selectedRole?.name,
            url:'#'
        }
    ]

    return(
        <>
            <div className="bg-white">
                <HeaderWrapper>
                    <BreadCrumb links={breadCrumbConfig} />
                    <p className="m-0" onClick={closeDropdown}><CancelIcon width="13" height="13" /></p>
                </HeaderWrapper>
                <BackButton className="mt-3" onClick={prevHandler}>Back</BackButton>
                {loading ?
                    <DropDownLoaders length={3} /> 
                    :

                error ?
                    <p className="text-center mt-3">Unable to fetch permissions for this role</p>
                :
                <section className="mt-2">
                    {data?.map((item,index) => (
                        <PermissionItem key={index}  title={item.assets}  description={item.permissions}/>
                    ))}
                    {data?.length === 0 && <p className="text-center mt-3">No permissions available for this role</p>}
                </section>
                }
            </div>
        </>
    )
}