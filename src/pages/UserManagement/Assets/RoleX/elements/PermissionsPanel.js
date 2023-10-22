import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Table from '@components/Admin/UI/Table/Table';
import ButtonDropdown from '@components/UI/Button/ButtonDropdown';
import Button from '@components/UI/Button/Button';
import RegionSelector from '../../../../../common/RegionSelector/RegionSelector';
import { Arrow, PrincipalIcon, CheckIcon, CancelIcon, RemoveIcon } from '../../../../../common/SvgIcons';





function AddIcon(params) {
    return(
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.00016 5.66634H5.66683V8.99967C5.66683 9.36634 
        5.36683 9.66634 5.00016 9.66634C4.6335 9.66634 4.3335 9.36634 
        4.3335 8.99967V5.66634H1.00016C0.633496 5.66634 0.333496 5.36634
        0.333496 4.99967C0.333496 4.63301 0.633496 4.33301 1.00016 4.33301H4.3335V0.999674C4.3335
        0.633008 4.6335 0.333008 5.00016 0.333008C5.36683 0.333008 5.66683 0.633008 5.66683
        0.999674V4.33301H9.00016C9.36683 4.33301 9.66683 4.63301 9.66683 4.99967C9.66683 5.36634
        9.36683 5.66634 9.00016 5.66634Z" fill="currentColor"/>
        </svg>
    )
}

const usersColumns = [
    {
      Header: "Assets",
      accessor: "assets",
      disableFilters: true,
    },
    {
        Header: "Permissions",
        accessor: "permissions",
        disableFilters: true,
    },
    
    
];

const dummyPermissions = [
    {
        id:1,
        name:'Create',
        isChecked:false
    },
    {
        id:2,
        name:'View',
        isChecked:false
    },
]

const Checkbox = ({ type = 'checkbox', name, checked, value, onChange }) => (
    <input type={type} name={name} checked={checked} value={value} onChange={onChange} />
);


function PermissionsPanel(props) {
    const [isAdding, setIsAdding] = useState(false);
    const [selectedAsset, setSelectedAsset] = useState(null);
    const [dropDownState, setDropDownState] = useState(false);
    const [checkedPermissionItems, setCheckedPermissionItems] = useState([]);
    const [permissions, setPermissions] = useState(dummyPermissions);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    

    const noData = data.length === 0;

    function toggleAddState() {
        setIsAdding(prevState => !prevState)
    }

    useEffect(() => {
        if(selectedAsset !== null){
            setDropDownState(true)
        }
    },[selectedAsset])

    useEffect(() => {
        if(dropDownState === true){
            setDropDownState(false)
        }
    },[dropDownState])

    function handlePermissionChange(e) {
        const isChecked = e.target.checked;
        const value = e.target.value;

        setPermissions(prevState => (prevState.map(product => product.name === value ? { ...product, isChecked: isChecked } : product) ));

        if (isChecked){
            setCheckedPermissionItems(prevState => (
                [...prevState, value] 
            ));
        }
        else {
            const newAddedProducts = checkedPermissionItems.filter(product => product !== value)
            setCheckedPermissionItems(newAddedProducts);
        }
    }

    function cancelAdd() {
        setSelectedAsset(null);
        setCheckedPermissionItems([])
        toggleAddState()
        setPermissions(dummyPermissions)
    }

    function saveHandler(){
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
            const copy = [...data]
            copy.push({assets:selectedAsset.name, permissions:checkedPermissionItems.join(", ")})
            setData(copy)
            setIsAdding(false)
            setSelectedAsset(null)
            setCheckedPermissionItems([])
            setPermissions(dummyPermissions)
        },1000)
    }

    const deletePrincipals = (id) => {
        if (id >= 0) {
          let newArray = data.filter((item, index) => index !== id);
          setData(newArray);
        }
    }

    let btnSlectedColor = {
        color: '#ffffff',
        background: '#193B68'
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
        <PermissionWrapper>
            <div>
                {(noData && !isAdding)  && <Title>Permissions</Title>}
                
            </div>
            <div>

            {(isAdding || !noData) && 
                <Table
                    pageSize={3}
                    tableColumns={usersColumns}
                    tableData={data}
                    filterRequired={false}
                    sortingRequired={false}
                    columnReordering={true}
                    paginationRequired={false}
                    searchRequired={false}
                    searchStyles={{ type: "visible", boxWidth: '300px' }}
                    disableTableEmptyText={true}
                    dataReRender={true}
                    actionIconConfig={rowConfig}
                />}
            </div>


            {isAdding && 
            <div className="mt-4">
                <div className="row">
                    <div className="col-md-6">
                        <ButtonDropdown
                            btnStyleProps={selectedAsset !== null ? btnSlectedColor : null}
                            label={selectedAsset ? `${selectedAsset.name}`:"Select Asset"}
                            dropDownStyleProps={{width:'350px', height:'334px'}}
                            contentCloseToggle={dropDownState}
                            mode={1}
                        >
                        <RegionSelector onSelect={setSelectedAsset} />
                        </ButtonDropdown>
                    
                    </div>
                    {selectedAsset !== null &&<div className="col-md-6">
                        {
                            permissions.map((item, i) => (
                                <Label key={item.id}>
                                
                                <Checkbox 
                                    name={item.name}
                                    value={item.name}
                                    checked={permissions[i].isChecked} 
                                    onChange={handlePermissionChange} />
                                    <span className="ml-2">{item.name}</span>
                                </Label>
                            ))
                        }
                    </div>
                    }
                </div>
                

                <div className="text-center  mt-4 d-flex">
                    <div className=" mr-4">
                        <Button
                            clicked={saveHandler}
                            loading={loading}
                            disabled={selectedAsset === null || checkedPermissionItems.length === 0 || loading}
                            btnSize="btn-md" 
                            btnStyle="primary"
                        >Save</Button>
                    </div>
                    <div className="">
                        <Button
                            clicked={cancelAdd}
                            btnSize="btn-md" 
                            btnStyle="default"
                            style={{background:'transparent',color:'#193B68',borderRadius: '5px', boxShadow:'none',padding:'10px 20x',width:'100%',cursor:'pointer'}}>Cancel</Button>
                    </div>           
                </div>
            </div>}


            <div className="mt-4">
                {!isAdding && <AddButton onClick={toggleAddState} ><span className="mr-1">
                    </span> <span>Add</span>
                </AddButton>}
            </div>
           

        </PermissionWrapper>
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


const PermissionWrapper = styled.div`
    background: #FFFFFF;
    border: 1px solid #DFE1E6;
    padding:20px;
    border-radius: 5px;
`;

const Title = styled.h5`
    font-weight: 500;
    font-size: 19px;
    line-height: 24px;
    color: #193B68;
`

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

const Label = styled.label`
    display: flex;
    cursor: pointer;
    font-size: 16px;
    line-height: 18px;
    color: #091E42;
    align-items: center;
    margin: 0 0 15px 0;
`

export default PermissionsPanel

