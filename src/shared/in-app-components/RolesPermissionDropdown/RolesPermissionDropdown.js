import React, { useEffect, useRef, useState } from 'react'
import styled, { css } from 'styled-components'
// import { UserAssetPermissionsData, UserRolesData } from './DummyData';
import { PermissionsWrapper, RolesWrapper } from './elements/RPWrapper';
import principalsService from '@shared/hooks/api/usePrincipalsService';
import rolesService from '@shared/hooks/api/useRolesService';


function useDropdownVisible(initialIsVisible) {
    const [isDropdownVisible, setIsDropdownVisible] = useState(initialIsVisible);
    const ref = useRef(null);

    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setIsDropdownVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    });

    return { ref, isDropdownVisible, setIsDropdownVisible };
}

function useMountedRef(initialValue){
    const componentIsMounted = useRef(initialValue)
    useEffect(() => {
        componentIsMounted.current = true;
        return () => {
            componentIsMounted.current = false
        }
    }, [])

    return componentIsMounted
}

function RolesPermissionDropdown({position, onClick, children, rolesData, id:principalId}) {
    
    /*
        # ---------------- #
        # Component States #
        # ---------------- #
    */
    const [currentSlide, setCurrentSlide] = useState(0);
    const {ref, isDropdownVisible, setIsDropdownVisible} = useDropdownVisible(false);
    const componentIsMounted = useMountedRef(false);
    // const [assetPermission, setAssetPermission] = useState([]);
    // const [roles, setRoles] = useState([]);
    const [selectedRole, setSelectedRole] = useState({});
    const containerRef = useRef(null);
    const checkIfApiCall = principalId && componentIsMounted

    /*
        # ---------------- #
        # Queries #
        # ---------------- #
    */

    const {
        data:principalData, 
        isError:principalError, 
        isLoading:principalLoading, 
        // isFetching:principalIsFetching
    } = principalsService.useFetchPrincipalById(
        principalId,
        {
        staleTime: 1000,
        enabled: !!checkIfApiCall,
        
    });


    const {
        data:assetsPermissionsData, 
        isError:assetsPermissionsError, 
        isLoading:assetsPermissionsLoading, 
        // isFetching:assetsPermissionsFetching
    } = rolesService.useFetchAssetsPermissionsInRole(
        selectedRole?.roleId,
        {
        staleTime: 1000,
        enabled: !!selectedRole?.roleId,
        
    });

    
  
    // const EnhancedRegionSelector = withRegionSelectorWrapper(RegionItem, currentSlide);
    
    const nextSlide = () => {
        if(currentSlide+1 !== carouselItemArray.length){
            containerRef.current.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth"
              });
            setCurrentSlide(oldIndex => {
                let index = oldIndex + 1;
                return index
            })
        }
    }
    const prevSlide = () => {
        if(currentSlide !== 0){
            setCurrentSlide(oldIndex => {
                let index = oldIndex - 1;
                return index
            })
        }
        
    }

    function toggleDropdown() {
        setIsDropdownVisible(prevState => !prevState)
        onClick();
    }

    function loadAssetPermission(data) {
        setSelectedRole(data)
        nextSlide();
    }

    

    const roleData = principalData?.map((item, index)=>{
        return {
            ...item.roles[0]
        }
    })

    const assetPermissionTableData = assetsPermissionsData?.map((item, index) => (
        {
            assets: item?.assetPermissions[0]?.assetName,
            permissions:item?.assetPermissions[0]?.permissionName
        }
    ))

    const carouselItemArray = [
        {
            id:1,
            component: 
            <RolesWrapper 
            data={roleData}
            loading={principalLoading}
            error={principalError}
            nextHandler={loadAssetPermission}
            closeDropdown={toggleDropdown} />
        },
        {
            id:2,
            component: 
            <PermissionsWrapper 
            data={assetPermissionTableData} 
            loading={assetsPermissionsLoading}
            error={assetsPermissionsError}
            selectedRole={selectedRole} 
            prevHandler={prevSlide}
            closeDropdown={toggleDropdown}  />
        }
    ]



    return (
        <>
        <DropdownWrapper ref={ref} position={position}>
        <div  style={{display:'inline-grid'}}>
            <DropdownText title={children} onClick={toggleDropdown} >{children}</DropdownText>
        </div>
            {isDropdownVisible && <DropdownContent>
                <CarouselSection ref={containerRef}>
                    {carouselItemArray.map((item, index) => {
                        let position = 'next';

                        if (index === currentSlide) {
                            position = 'active'
                        }
                        if (
                            index === currentSlide - 1 ||
                            (currentSlide === 0 && index === carouselItemArray.length - 1)
                        ) {
                            position = 'prev'
                        }
                    return ( 
                            <CarouselItem key={index} position={position}>
                                {item.component}
                            </CarouselItem>
                        )
                    })}
                </CarouselSection>
            </DropdownContent>}
        </DropdownWrapper>

        </>
        
    )
}

const DropdownText = styled.p`
    padding: 7px 10px;
    border-radius: 3px;
    border-radius: 3px;
    transition: background 0.1s ease-out 0s, box-shadow 0.15s cubic-bezier(0.47, 0.03, 0.49, 1.38) 0s;
    position: relative;
    margin:0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    &:hover, :active, focus{
        text-decoration: underline;
    }
`

const DropdownWrapper = styled.div`
    outline: 0;
    border: none;
    font-size: 14px;
    width: fit-content;
    position: relative;
`

const DropdownContent = styled.div`
    position: relative;
    inset: 0px auto auto 0px;
    background-color: white;
    border-radius: 4px;
    box-shadow: rgb(9 30 66 / 13%) 0px 0px 0px 1px, rgb(9 30 66 / 13%) 0px 4px 11px;
    z-index: 510;
    position: absolute;
    display: block;
    top: 100%;
    ${props => props.position === 'left' ? css`
        left:0;
    ` 
    :
    css`
        left:auto;
    `
    }
    right: 0;
    border-top: 0;
    background: #FFFFFF;
    box-shadow: 0px 3px 5px rgba(9, 30, 66, 0.2), 0px 0px 1px rgba(9, 30, 66, 0.31);
    border-radius: 3px;
    transition: all 0.5s;
    z-index: 2;
    padding: 10px;
    margin-left: 5px;
    margin-top: 5px;
    overflow: hidden;
    width: 550px;
    height:270px
`

const CarouselSection = styled.section`
    margin: 5px 0;
    position: relative;
    width: 100%;
    height: 220px;
    max-height: 220px;
    overflow: auto;
    padding: 0 5px;
    background: #ffffff;
    overflow-x: hidden;
    
    &::-webkit-scrollbar-track{
        background-color: #EBECF0;
    }
    
    &::-webkit-scrollbar{
        width: 5px;
    }
    
    &::-webkit-scrollbar-thumb{
        border-radius: 100px;
        background-color: #A1A9B7;
    }
`;



const CarouselItem = styled.article`
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: all 0.2s linear;
    padding: 0 6px 0 0;

    ${props => props.position === 'active' && css`
        opacity: 1;
        transform: translateX(0);
    ` }

    ${props => props.position === 'next' && css`
    transform: translateX(100%);
        
    ` }

    ${props => props.position === 'prev' && css`
      
    transform: translateX(-100%);
    ` }
`;

RolesPermissionDropdown.defaultProps = {
    position:"right"
}

export default RolesPermissionDropdown

