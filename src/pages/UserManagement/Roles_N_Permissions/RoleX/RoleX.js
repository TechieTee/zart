import React, { useEffect } from 'react'
import { useHistory, useLocation, useParams, useRouteMatch } from "react-router-dom";
import BreadCrumb from '@shared/in-app-components/BreadCrumb';
import {  isEmpty } from '@shared/Method';
// import PermissionsPanel from './elements/PermissionsPanel';
// import PrincipalsPanel from './elements/PrincipalsPanel';
// import RolePanel from './elements/RolePanel';

// import { RPContextProvider, useRPContext } from '../context/roles-permissions.context';
// import rolesService from '@shared/hooks/api/useRolesService';
// import {PageLoader} from '@shared/in-app-components/SkeletonLoaders';
// import { toast } from 'react-toastify';



function MainRoleX(props){
    // const { id,   } = useParams();
    // const route = useRouteMatch();
    // const history = useHistory();
    // const {state: rolesFromProps} = useLocation();

    /*
        # --------------- #
        # Context State #
        # --------------- #
    */
    // const {
    //     pageMode,
    //     setPageMode,
    //     appDetails,
    //     roleDetails,
    //     setAppDetails,
    //     setRoleDetails,
    //     setAssetTypes
    // } = useRPContext();
    
    /*
        # --------------- #
        # Queries         #
        # --------------- #
    */
    // const {
    //     data,
    //     isError, 
    //     isLoading, 
    //     isFetching
    // } = rolesService.useFetchApplications({
    //     staleTime: 100,
    //     onSuccess: (data) => {
    //         const filteredAppDetail = data.filter((item) => item.applicationId === id)
    //         setAppDetails(filteredAppDetail)
    //     },
    // });

    // const {
    //     /* eslint-disable no-unused-vars */
    //     // data: assetData,
    //     isError: assetError, 
    //     isLoading: assetLoading, 
    //     isFetching: assetFetching
    // } = rolesService.useFetchApplicationAssetTypes(
    //     id,
    //     {
    //     staleTime: 100,
    //     onSuccess: (data) => {
    //         setAssetTypes(data[0])
    //     },
    // });
    
    // useEffect(() => {
    //     if(route.path === "/roles-permissions/create/:id"){
    //         console.log("set create")
    //         setPageMode(1)
    //     }
    //     if(route.path === "/roles-permissions/edit/:id"){
    //         console.log("set edit")
    //         setPageMode(0)
    //     }
    // // eslint-disable-next-line react-hooks/exhaustive-deps
    // },[id])

    // useEffect(() => {
    //     if(route.path === "/roles-permissions/edit/:id" ){
    //         if(!isEmpty(rolesFromProps)){
                
    //             setRoleDetails(rolesFromProps)
    //         }else{
    //             toast('Invalid Id. Please edit role from the table.Redirecting...')
    //             setTimeout(()=>{
    //                 history.push("/roles-permissions")
    //             },2000)
    //         }
            
    //     }
    // // eslint-disable-next-line react-hooks/exhaustive-deps
    // },[pageMode])

    // if(isLoading || assetLoading){
    //     return <PageLoader />
    // }

    // if(isError || assetError){
    //     return 'Unable to fetch..'
    // }

    // if(isFetching || assetFetching){
    //     return <PageLoader />
    // }

    // if(data?.length !== 0 && appDetails?.length === 0 && !isFetching && !assetFetching){
    //     return "Invalid Application id"
    // }
    

    // const breadCrumbConfig =  [
    //     {
    //         title:'Roles & permission',
    //         url:'/roles-permissions'
    //     },
    //     {
    //         title: appDetails[0]?.name,
    //         url:'/roles-permissions'
    //     },

    //     {
    //         title: roleDetails?.name || 'Role',
    //         url:'#'
    //     },
    // ]


    

    return (
        <>
        
        {/* <BreadCrumb links={breadCrumbConfig}/>
        <section>
            <div className="row">
                <div className="col-md-4">
                    <RolePanel />
                </div>
                <div className="col-md-8">
                    <PrincipalsPanel />
                    <PermissionsPanel data={[]} />
                </div>
            </div>
        </section> */}
        </>
    )
}



function RoleX(props) {
    return (
        <>
    {/* // <RPContextProvider>
    //     <MainRoleX {...props} />
    // </RPContextProvider> */}
    </>
    )
}

RoleX.propTypes = {

}

export default RoleX

