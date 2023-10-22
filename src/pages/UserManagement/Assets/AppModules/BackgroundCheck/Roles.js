import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// import Table from '@components/Admin/UI/Table/Table';
import Button from '../../../../../components/UI/Button/Button';


const RoleText = styled.div`
    display:block;

    a{
        &:hover{
            text-decoration: underline;
        }
    }

    p{margin:0}
    p{
        :first-child{
            color: #193B68;
        }
        :last-child{
            color: #505F79;
        }
        
    }
`

// const PermissionLabel = styled.div`
//     background: #F4F5F7;
//     border-radius: 3px;
//     display: inline-block;
//     padding: 5px 9px;
//     color: #505F79;
// `


// const usersColumns = [
//     {
//       Header: "Roles",
//       accessor: "roles",
//       disableFilters: true,
//     },
//     {
//         Header: "Asset Permissions",
//         accessor: "asset_permissions",
//         disableFilters: true,
//     },
    
    
// ];





// const tableData = [
//     {
//       id: 1,
//       roles: <RoleText><Link to="/"><p>Background Check - David C Boston.</p><p>A role to search users</p></Link></RoleText>,
//       asset_permissions: <PermissionLabel>Zone 12: Create, Edit, View, Search</PermissionLabel>,
//     },

// ]
  

function BackgroundCheckRoles(props) {

    const TableHeaderContent = () => (
        <div className="mr-5">
            <Button
            clicked={() => props.history.push('/usermanagement/create-role-permission/background-check')}
                btnSize="btn-md" 
                btnStyle="secondary-1-grey"
                style={{background:' #1B69FB',color:'#fff',borderRadius: '5px'}}
            >Create Role</Button>
        </div>
    )

    return (
        <div>
            {/* <Table
                pageSize={3}
                tableColumns={usersColumns}
                tableData={tableData}
                filterRequired={false}
                sortingRequired={false}
                searchRequired={true}
                searchPlaceholder="Search"
                columnReordering={true}
                paginationRequired={false}
                tableHeaderContent={<TableHeaderContent/>}
                searchStyles={{ type: "visible", boxWidth: '300px' }}
            /> */}
        </div>
    )
}

export default BackgroundCheckRoles

