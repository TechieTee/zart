import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from "styled-components";
const Wrapper = styled.div`
    display:inline-block;
    margin: 0 0 20px 0;
`;

const BreadCrumbList = styled.li`
    display: inline;
    margin-right: 15px;
    a{
        color: #505F79;
        font-size: 18px;
        &:hover{
            color: #253858;
            text-decoration-line: underline;
        }

        &:active{
            color: #1B69FB;
        }
    }

    span{
        margin: 0 0 0 15px;
    }

    &:last-child span{
        display:none;
    }
`;

const BreadCrumbWrapper = styled.ul`
  display: inline-block;
  margin: 0;
  padding: 0;

  
`;

function ArrowRight(){
    return (
        <svg width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path 
        d="M1.00017 6.58372L3.58683 3.99706L1.00017 1.41039C0.875331 
        1.28584 0.805176 1.11674 0.805176 0.940391C0.805176 0.764045 
        0.875331 0.594945 1.00017 0.470391C1.26017 0.210391 1.68017 
        0.210391 1.94017 0.470391L5.00017 3.53039C5.26017 3.79039 5.26017
        4.21039 5.00017 4.47039L1.94017 7.53039C1.68017 7.79039 1.26017
        7.79039 1.00017 7.53039C0.746833 7.27039 0.740166 6.84372
        1.00017 6.58372Z" fill="#C1C7D0"/>
        </svg>
    )
}



function BreadCrumb({links}) {
    return (
        <Wrapper>
            <BreadCrumbWrapper>

                {links?.map((item, index) => (
                    <BreadCrumbList key={index}>
                        {item?.icon}
                        <NavLink isActive={(match, location) => {
                            if (!match) {
                                return false;
                            }
                            return item.active;
                            }} to={item.url || '#!'}>
                            {item.title}
                        </NavLink>
                        <span><ArrowRight/></span>
                    </BreadCrumbList>
                ))}

            </BreadCrumbWrapper>
        </Wrapper>
    )
}

BreadCrumb.defaultProps = {
    links:[]
}

export default BreadCrumb

