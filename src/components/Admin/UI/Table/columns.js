import { StatusLabel } from "../Label/Label"
// import React from 'react';

// Filter Function required to utilize filtering
import Filter from './Filter/Filter'

export const COLUMNS = [
    {
        Header:'User ID',
        accessor: 'id',
        Footer:'Footer of the USERID',
        disableSortBy:true,
        disableFilters:true,
        disableDrag:true,
        fixedColumn:true,
        style:{
            width:'10%',
            color:'#193B68',
            fontWeight: 600
            }
     }
    
,
    {
        Header:'First Name',
        accessor:'first_name',
        disableFilters:true,

    },
    {
        Header:'Last Name',
        accessor:'last_name',
        disableSortBy:true,
        disableFilters:true,


    }
    ,
    {
        Header:'Email',
        accessor:'email',
        disableFilters:true,

    }
    ,{
        Header: 'Members',
        accessor:'members',
        disableFilters:false,
        filter:Filter,



    },
    {
        Header: 'Gender',
        accessor:'gender',
        Cell: StatusLabel ,
        disableFilters:false,
        filter:Filter,


    }
]
