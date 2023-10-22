import React from 'react'
import styled, { css } from 'styled-components';

function ArrowLongRight(params) {
    return(
        <svg width="25" height="25" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.089 8.25287H3.83154C3.41904 8.25287 3.08154 8.59037 3.08154 9.00287C3.08154 9.41537
         3.41904 9.75287 3.83154 9.75287H12.089V11.0954C12.089 11.4329 12.494 11.5979 12.7265 11.3579L14.8115 
         9.26537C14.954 9.11537 14.954 8.88287 14.8115 8.73287L12.7265 6.64037C12.494 6.40037 12.089 6.57287 
         12.089 6.90287V8.25287Z" fill="#6780A2"/>
        </svg>
    )
}




function RegionItem({mode, title, description, selectHandler, nextHandler}) {
    return (
        <ItemWrapper>
            <ContentWrapper className="mr-4">
                <h5>{title}
                    {mode === 'navigation' && <span><SelectButton onClick={selectHandler} withTitle={true}>Select</SelectButton></span>}
                </h5>
                <p>{description}</p>
            </ContentWrapper>
            <div>
                {mode === 'default' &&
                    <SelectButton onClick={selectHandler} withTitle={false}>Select</SelectButton>
                }
                {mode === 'navigation' && 
                    <span onClick={nextHandler}><ArrowLongRight  /></span>
                }
                
            </div>
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
    box-shadow: inset 0px -1px 0px #EEEEEE;
    
    &:hover{
        background: #F4F5F7;
        box-shadow: inset 0px -1px 0px #EEEEEE;
    }
    &:last-child{
        box-shadow: none;
    }
    
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

const SelectButton = styled.button`
    background: transparent;
    
    outline:0;
    ${props => props.withTitle ? css`
        font-size: 14px;
        color: #C0C5CF;
        &:hover{
            color: #337BFF;
        }
    `: css`
        color: #337BFF;
    `}
`

RegionItem.defaultProps = {
    mode: "default",
    title:"",
    description:"",
    nextHandler: () => null,
    selectHandler: () => null
}

export default RegionItem

