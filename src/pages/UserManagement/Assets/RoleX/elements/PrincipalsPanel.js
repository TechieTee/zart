import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import RolesPermissionDropdown from '../../../../../common/RolesPermissionDropdown/RolesPermissionDropdown';
import { Arrow, PrincipalIcon, CheckIcon, CancelIcon, RemoveIcon } from '../../../../../common/SvgIcons';
// import Table from '@components/Admin/UI/Table/Table';
// import Button from '@components/UI/Button/Button';
// import CustomTableOptionsDropdown from '@components/UI/Input/CustomTableOptionsDropdown';


const TextBlock = styled.span`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin:0;
    display:block;
`

const principalColumns = [
    {
        Header: "Type",
        accessor: "type",
        disableFilters: true,
        style:{
            width:'80px'
        }
    },
    {
        Header: "Name",
        accessor: "name",
        disableFilters: true,
    },
    {
        Header: "Email",
        accessor: "email",
        disableFilters: true,
    },
    {
        Header: "Roles",
        accessor: "roles",
        disableFilters: true,
    },
    {
        Header: "Department",
        accessor: "department",
        disableFilters: true,
    },
    
];


const usersColumns = [
    {
      Header: "Type",
      accessor: "type",
      disableFilters: true,
      style:{
            width:'45px'
        }
    },
    {
        Header: "Name",
        accessor: "name",
        disableFilters: true,
    },
    {
        Header: "Email",
        accessor: "email",
        disableFilters: true,
    },
    {
        Header: "Station ID",
        accessor: "stationId",
        disableFilters: true,
    }
];

const users_APIData = [
    {
        id: 1,
        type: <PrincipalIcon type="user" />,
        name: <TextBlock title="Annette B. G.">Annette B. G.</TextBlock>,
        email: <TextBlock title="annettebg@npf.com">annettebg@npf.com</TextBlock>,
        stationId: <TextBlock title="NPF-LA-555-0127">NPF-LA-555-0127</TextBlock>,
        roles:<RolesPermissionDropdown>EnrollmentMTT, AdminConsoleBTT</RolesPermissionDropdown>,
        department:  'Forensic',
        
    },
    {
        id: 2,
        type: <PrincipalIcon type="group" />,
        name: <TextBlock title="Annette B. G.">Administrator</TextBlock>,
        email: <TextBlock title="annettebg@npf.com">admin@npf.com</TextBlock>,
        stationId: <TextBlock title="NPF-LA-555-0127">NPF-LA-555-0127</TextBlock>,
        roles:<RolesPermissionDropdown>EnrollmentMTT, AdminConsoleBTT</RolesPermissionDropdown>,
        department:  'Forensic',
    },
    {
        id: 3,
        type: <PrincipalIcon type="user" />,
        name: <TextBlock title="Annette B. G.">Cameron W. U.</TextBlock>,
        email: <TextBlock title="annettebg@npf.com">cameron@npf.com</TextBlock>,
        stationId: <TextBlock title="NPF-LA-555-0127">NPF-LA-555-0127</TextBlock>,
        roles:<RolesPermissionDropdown>EnrollmentMTT, AdminConsoleBTT</RolesPermissionDropdown>,
        department:  <TextBlock title="Forensic">Forensic</TextBlock>,
    },
    {
        id: 4,
        type: <PrincipalIcon type="group" />,
        name: <TextBlock title="Annette B. G.">Jackson F. G.</TextBlock>,
        email: <TextBlock title="annettebg@npf.com">jackson@npf.com</TextBlock>,
        stationId: <TextBlock title="NPF-LA-555-0127">NPF-LA-555-0127</TextBlock>,
        roles:<RolesPermissionDropdown>EnrollmentMTT, AdminConsoleBTT</RolesPermissionDropdown>,
        department:  <TextBlock title="Forensic">Forensic</TextBlock>,
    }

]


function PrincipalsPanel(props) {

    const [isOpen, setIsOpen] = useState(false);
    const [isAdding, setIsAdding] = useState(false);
    const [currentSearchVal, setCurrentSearchVal] = useState('');
    const [selectedUsers, setSelectedUsers] = useState([]);
    const [principals, setPrincipals] = useState([]);
    const [loading, setLoading] = useState(false);

    function toggleIsOpen() {
        setIsOpen(prevState => !prevState);
        setIsAdding(false);
        
    }

    function toggleIsAdding() {
        setSelectedUsers([])
        setIsAdding(prevState => !prevState);
    }

    const selectUsers = (cell)=> {
        let usersCopy = [...selectedUsers]
        usersCopy.push(cell.row.original)
        setSelectedUsers(usersCopy)
        setCurrentSearchVal("");
        //CLEAR THE API RESPONE TOO
    }

    const deleteUsers = (id) => {
        if (id >= 0) {
          let newArray = selectedUsers.filter((item, index) => index !== id);
          setSelectedUsers(newArray);
        }else{
            setSelectedUsers([])
        }
    }

    const addPrincipalAction = () => {
        setLoading(true)
        let secondCopyVal = [...principals]
        secondCopyVal.push(...selectedUsers.map(obj => ({...obj})));
        setTimeout(() =>{
            
            setPrincipals(secondCopyVal);
            setSelectedUsers([]);
            toggleIsAdding();
            setLoading(false)
        },1000)
    }

    const deletePrincipals = (id) => {
        if (id >= 0) {
          let newArray = principals.filter((item, index) => index !== id);
          setPrincipals(newArray);
        }
    }

    
    const rowConfig = [
        {
            type:'danger',
            clickHandler: deletePrincipals,
            tooltipText:'Remove',
            content: <IconRemove><RemoveIcon /></IconRemove>,
            styles:{padding:'4px 0'}
        },
    ]

    return (
        <PrincipalsWrapper isOpen={isOpen}>
            <div className="row align-items-center">
                <div className="col-md-11">
                    <div className="d-flex align-items-center">
                        <Title>Principals
                            {!isOpen && <span className="ml-1">{principals.length !== 0 ? principals.length : null}</span>}
                        </Title>
                        
                        <div className="ml-3 w-100">
                            {(!isAdding && isOpen) && <AddButton onClick={toggleIsAdding} ><span>Add</span></AddButton>}

                            {isAdding && 
                            <div className="row ml-3">
                                <div className="col-9">
                                    <CustomTableOptionsDropdown
                                        styleType="default" 
                                        placeholder="Type user or group"
                                        options={selectedUsers}
                                        searchValue={currentSearchVal}
                                        setSearchValue={setCurrentSearchVal}
                                        removeOptions={deleteUsers}
                                        tableHeaderConfig={usersColumns}
                                        tableDataConfig={users_APIData}
                                        selectOptions={selectUsers}
                                        labelKey="name"
                                        
                                    /> 
                                </div>
                                <div className="col-3 row align-items-center">
                                    <div className="col-6">
                                            <Button
                                                style={{padding:'6px 9px'}}
                                                clicked={addPrincipalAction}
                                                loading={loading}
                                                disabled={selectedUsers.length === 0 || loading}
                                                btnSize="btn-sm" 
                                                btnStyle="primary"
                                            >
                                                <CheckIcon />
                                            </Button>
                                        </div>
                                        <div className="col-6">
                                        <Button
                                            style={{padding:'10px 13px'}}
                                            clicked={toggleIsAdding}
                                            btnSize="btn-sm" 
                                            btnStyle="default"
                                            >
                                                <p className="m-0"><CancelIcon /></p>
                                            </Button>
                                        </div>
                                </div>
                            </div>}
                        </div>
                    </div>
                </div>
                <div className="col-md-1">
                    <p onClick={toggleIsOpen} className="text-right m-0">
                        <span ><Arrow status={isOpen} /></span>
                    </p>
                </div>
            </div>
            {isOpen && <section className="mt-4">
                <div>
                    <Table
                        pageSize={3}
                        tableColumns={principalColumns}
                        tableData={principals}
                        filterRequired={false}
                        sortingRequired={false}
                        columnReordering={true}
                        paginationRequired={false}
                        searchRequired={false}
                        searchStyles={{ type: "visible", boxWidth: '300px' }}
                        disableTableEmptyText={true}
                        dataReRender={true}
                        actionIconConfig={rowConfig}
                    />
                </div>
            </section>}
        </PrincipalsWrapper>
    )
}


const IconRemove = styled.span`
    margin:0;
    color:#DE350B;
    padding: 5px 8px;
    &:hover{
        color:#fff;
    }
`


const PrincipalsWrapper = styled.div`
    background: #FFFFFF;
    border: 1px solid #F4F5F7;
    padding:20px;
    border-radius: 5px;
    margin: 0 0 25px 0;
    cursor:pointer;
    ${props => props.isOpen && css`
        border: 1px solid #DFE1E6;

    `}
    ${props => !props.isOpen && css`
        &:hover{
            background: #F4F5F7;
            border: 1px solid #F4F5F7;
        }
    `}
    
`;

const AddButton = styled.button`
    background: transparent;
    border: 0;
    outline:0;
    font-weight: 500;
    font-size:16px;
    color: #1B69FB;
    svg{
        width: 15px;
        height: 15px;
        margin: -3px 0 0 0;
    }
    &:focus{
        outline:0; 
    }
`

const Title = styled.span`
    font-weight: 500;
    font-size: 19px;
    line-height: 24px;
    color: #193B68;
    margin:0;

    span{
        color: #8993A4;
    }
`


export default PrincipalsPanel

