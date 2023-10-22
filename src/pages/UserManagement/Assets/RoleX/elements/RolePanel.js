import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import Button from '../../../../../components/UI/Button/Button';
import { Form, Formik, useField } from 'formik';
// import CustomInput from '@components/UI/Input/CustomInput';
import * as Yup from "yup";
// import CustomTextArea from '@components/UI/Input/CustomTextArea';
import { useHistory } from 'react-router';

const RoleWrapper = styled.div`
    background: #ECF4FF;
    border-radius: 5px;
    padding: 20px
`;

const RoleLabel = styled.p`
    text-transform: capitalize;
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    color: #193B68;
    margin:0;
`
const RoleDescription = styled.p`
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: #505F79;
    text-transform:capitalize;
    margin:0;
`

const EditBtn = styled.button`
    background: transparent;
    border: 0;
    outline:0;
    color: #1B69FB;
    &:focus{
        outline:0; 
    }
`;






const schema = Yup.object().shape({
    roleName: Yup.string().required('Role Name is required'),
    roleDescription: Yup.string().required('Role Description is Required'), 
});



const DeleteText = styled.span`
    color: #DE350B;
    font-weight: 500;
    cursor:pointer
    span:first-child{
        color:#000;
        svg{
            margin: -3px 0px 0 0;
        }
        
    }
`





function DeleteIcon() {

    return(
        <svg style={{margin:'-3px 0px 0 0'}} width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M6.86016 0.193333L7.3335 0.666667H9.00016C9.36683 0.666667 
            9.66683 0.966667 9.66683 1.33333C9.66683 1.7 9.36683 2 9.00016 2H1.00016C0.633496 2 0.333496 1.7 0.333496
            1.33333C0.333496 0.966667 0.633496 0.666667 1.00016 0.666667H2.66683L3.14016 0.193333C3.26016 0.0733333
            3.4335 0 3.60683 0H6.3935C6.56683 0 6.74016 0.0733333 6.86016 0.193333ZM1.00016 10.6667C1.00016 11.4 1.60016
            12 2.3335 12H7.66683C8.40016 12 9.00016 11.4 9.00016 10.6667V4C9.00016 3.26667 8.40016 2.66667 7.66683
            2.66667H2.3335C1.60016 2.66667 1.00016 3.26667 1.00016 4V10.6667ZM3.1135 5.44667C3.3735 5.18667 3.7935 
            5.18667 4.0535 5.44667L5.00016 6.39333L5.94683 5.44667C6.20683 5.18667 6.62683 5.18667 6.88683 
            5.44667C7.14683 5.70667 7.14683 6.12667 6.88683 6.38667L5.94016 7.33333L6.88683 8.28C7.14683 
            8.54 7.14683 8.96 6.88683 9.22C6.62683 9.48 6.20683 9.48 5.94683 9.22L5.00016 8.27333L4.0535
            9.22C3.7935 9.48 3.3735 9.48 3.1135 9.22C2.98866 9.09545 2.91851 8.92635 2.91851 8.75C2.91851
            8.57366 2.98866 8.40456 3.1135 8.28L4.06016 7.33333L3.1135 6.38667C2.8535 6.13333 2.8535
            5.70667 3.1135 5.44667Z" fill="currentColor"/>
        </svg>
    )
}



function RolePanel(props) {

    const { mode } = props;
    const history = useHistory();
    const [currentmode, setCurrentMode] = useState(null); //Mode 1 means CREATE mode 0 means EDIT
    const [roleName, setRoleName] = useState('');
    const [roleDescription, setRoleDescription] = useState('');
    const [loading, setLoading] = useState(false);


    useEffect(() => setCurrentMode(mode), [mode]);

    function toggleCreateMode(){
        setCurrentMode(1)
    }
    function toggleEditMode(){
        if(mode === 1){
            history.goBack()
        }else{
        setCurrentMode(0)
        }
    }

    function handleSubmit(values){
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
            setRoleName(values.roleName)
            setRoleDescription(values.roleDescription)
            toggleEditMode()
        },1000)
    }

    const initialValues = {
        roleName: roleName || '',
        roleDescription: roleDescription || ''
    }

  

    return (
        <>
        {currentmode === 1 &&
            <RoleWrapper>
                <div className="">
                    <Formik 
                        initialValues={initialValues}
                        validationSchema={schema}
                        enableReinitialize={true}
                        onSubmit={(values, actions) => {
                            actions.setSubmitting(false);
                            handleSubmit(values)
                        }}
                        
                    >
                        {({values, isSubmitting, errors}) => (
                            <Form>
                                <div>
                                    <div>
                                        <CustomInput
                                            label="Role Name"
                                            id="roleName"
                                            name="roleName"
                                            placeholder="Role Name"
                                            type="text"
                                            
                                        />
                                    </div>
                                    <div className="mt-3">
                                        <CustomTextArea 
                                            label="Role Description"
                                            id="roleDescription"
                                            name="roleDescription"
                                            placeholder="Role Description"
                                            rows="3"
                                            col="5"
                                            
                                        />
                                    </div>
                                    <div className="text-center w-100 mt-3 d-flex">
                                        <div className="w-100 mr-4">
                                        <Button
                                            loading={loading}
                                            disabled={loading}
                                            type="submit"
                                            btnSize="btn-lg" 
                                            btnStyle="primary"
                                            style={{padding:'10px 0',width:'100%'}}>Save</Button>
                                        </div>
                                        <div  className="w-100">
                                            <div
                                                onClick={toggleEditMode}
                                                style={{background:'transparent',color:'#193B68',borderRadius: '5px', boxShadow:'none',padding:'10px 0',width:'100%',cursor:'pointer'}}>
                                                    {mode === 1 ? 'Discard' : 'Cancel' }
                                                </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </RoleWrapper>
        }
        {currentmode === 0 && 
            <>
            <RoleWrapper>
                <div className="d-flex justify-content-between align-items-start">
                    <RoleLabel>{roleName || 'Role Name'}</RoleLabel>
                    <EditBtn onClick={toggleCreateMode}>Edit</EditBtn>
                </div>
                <div className="mt-3">
                    <RoleDescription>{roleDescription || 'Role Description'}</RoleDescription>
                </div>
            </RoleWrapper>
            {(roleName !== '' && roleDescription !== '') && 
            <div className="mt-3">
                <Button
                    btnStyle="default"
                    btnSize="btn-sm"
                    style={{boxShadow:'none'}}
                    >
                    <DeleteText>
                        <span className="mr-2"><DeleteIcon /></span>
                        <span>Delete Role</span>
                    </DeleteText>
                </Button>
            </div>
            }
            </>
        }
        </>
    )
}



export default RolePanel

