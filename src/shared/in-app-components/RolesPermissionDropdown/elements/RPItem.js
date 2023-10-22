import React from 'react'
import styled from 'styled-components';


function RPItem({title, description, click}) {
    return (
        <ItemWrapper onClick={click}>
            <ContentWrapper className="mr-4">
                <h5>{title}  
                </h5>
                <p>{description}</p>
            </ContentWrapper>

        </ItemWrapper>
    )
}

function PermissionItem({title, description}) {
    return (
        <ItemWrapper >
            <ContentWrapper className="mr-4">
                <h5>{title} : {description}</h5>
                
            </ContentWrapper>

        </ItemWrapper>
    )
}

const ItemWrapper = styled.div`
    padding:12px 10px;
    background:#fff;
    display:flex;
    align-items:center;
    justify-content: space-between;
    cursor:pointer;
    width:100%;
    // box-shadow: inset 0px -1px 0px #EEEEEE;
    
    // &:hover{
    //     background: #F4F5F7;
    //     box-shadow: inset 0px -1px 0px #EEEEEE;
    // }
    // &:last-child{
    //     box-shadow: none;
    // }
    
`;

const ContentWrapper = styled.div`
    text-align:left;
    h5{
        color: #37445C;
        font-size: 16px;
        line-height: 18px;
        margin: 0 0 5px 0;
    }
    p{
        color: #6780A2;
        font-weight: normal;
        font-size: 12px;
        line-height: 16px;
        margin:0;
    }
`;

RPItem.defaultProps={
    title:"",
    description:"",
    click: () => null
}

export  {
    RPItem,
    PermissionItem
}
