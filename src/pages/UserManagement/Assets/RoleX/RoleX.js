import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import styled from 'styled-components';
import BreadCrumb from '../../../../common/BreadCrumb';
import Button from '@components/UI/Button/Button';
import { appTypeParamChecker } from '../../../../shared/Method';
import PermissionsPanel from './elements/PermissionsPanel';
import PrincipalsPanel from './elements/PrincipalsPanel';
import RolePanel from './elements/RolePanel';







function RoleX(props) {
    const { id, type } = useParams();
    const [componentMode, setComponentMode] = useState(0); //Mode 1 means CREATE mode 0 means EDIT
    const urlType = appTypeParamChecker(type);

    useEffect(() => {
        if(!id){
            setComponentMode(1)
        }
    },[])

    


    const breadCrumbConfig =  [
        {
            title:'Roles & permission',
            url:'/usermanagement/roles-permissions'
        },
        {
            title: urlType.title,
            url:'/usermanagement/roles-permissions/'+urlType.slug
        },

        {
            title: 'Role',
            url:'#'
        },
    ]


    

    return (
        <>
        <BreadCrumb links={breadCrumbConfig}/>
        <section>
            <div className="row">
                <div className="col-md-4">
                    <RolePanel mode={componentMode}/>
                </div>
                <div className="col-md-8">
                    <PrincipalsPanel />
                    <PermissionsPanel data={[]} />
                </div>
            </div>
        </section>
        </>
    )
}

RoleX.propTypes = {

}

export default RoleX

