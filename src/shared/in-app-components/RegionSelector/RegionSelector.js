import React, { useRef, useState } from 'react'
import styled, { css } from 'styled-components'
import { AreaRegionWrapper, DivisionRegionWrapper, StateRegionWrapper, StationRegionWrapper, ZoneRegionWrapper } from './elements/RegionWrapper';
import configurationService from '@shared/hooks/api/useConfigurationService';
function RegionSelector({onSelect}) {
    
    const containerRef = useRef(null);

    /*
        # ---------------- #
        # Component States #
        # ---------------- #
    */
    const [currentSlide, setCurrentSlide] = useState(0);
    const [searchValue, setSearchValue] = useState('');

    const [selectedZone, setSelectedZone] = useState(null);
    const [selectedState, setSelectedState] = useState(null);
    const [selectedArea, setSelectedArea] = useState(null);
    const [selectedDivision, setSelectedDivision] = useState(null);
    

    /*
        # --------------- #
        # API Defs #
        # --------------- #
    */
    const {
        isLoading:loadingZones,
        isError:loadingZonesError,
        data:zonesData
    } = configurationService.useFetchZones({staleTime: 1.8e+6});

    const {
        isLoading:loadingStates,
        isError:loadingStatesError,
        data:statesData
    } = configurationService.useFetchStateCommand(selectedZone?.id, {staleTime: 1.8e+6, enabled: !!selectedZone?.id});

    const {
        isLoading:loadingAreas,
        isError:loadingAreasError,
        data:areasData
    } = configurationService.useFetchAreaCommand(selectedState?.id, {staleTime: 1.8e+6, enabled: !!selectedState?.id});

    const {
        isLoading: loadingDivisions,
        isError: loadingDivisionsError,
        data: divisionsData
    } = configurationService.useFetchDivisionalCommand(selectedArea?.id, {staleTime: 1.8e+6, enabled: !!selectedArea?.id});

    const {
        isLoading: loadingStations,
        isError: loadingStationsError,
        data: stationsData
    } = configurationService.useFetchStationCommand(selectedDivision?.id, {staleTime: 1.8e+6, enabled: !!selectedDivision?.id});



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

    const carouselItemArray = [
        {
            id:1,
            component: 
            <ZoneRegionWrapper
                data={zonesData}
                loading={loadingZones}
                error={loadingZonesError}
                nextHandler={loadStates}
                prevHandler={prevSlide}
                selectHandler={selectAsset}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />
        },
        {
            id:2,
            component: 
            <StateRegionWrapper 
                data={statesData}
                loading={loadingStates}
                error={loadingStatesError}
                SelectedRegion={selectedZone}
                nextHandler={loadAreas}
                prevHandler={prevSlide}
                selectHandler={selectAsset} 
            />
        },
        {
            id:3,
            component: <AreaRegionWrapper 
                data={areasData}
                loading={loadingAreas}
                error={loadingAreasError}
                SelectedRegion={selectedState} 
                nextHandler={loadDivisions}
                prevHandler={prevSlide}
                selectHandler={selectAsset} 
            />
        },
        {
            id:4,
            component: <DivisionRegionWrapper 
                data={divisionsData}
                loading={loadingDivisions}
                error={loadingDivisionsError}
                SelectedRegion={selectedArea}
                nextHandler={loadStations}
                prevHandler={prevSlide}
                selectHandler={selectAsset} 
            />
        },
        {
            id:5,
            component: <StationRegionWrapper 
                data={stationsData}
                loading={loadingStations}
                error={loadingStationsError}
                SelectedRegion={selectedDivision}
                selectHandler={selectAsset}  
                prevHandler={prevSlide}  
            />
        },
    ]

    


    /*
    ***** NOTE: The functions below are going to have a parameter of id to fetch data where id === id param. 
    For example, the setSelectedZone function is used to set the currently selected region which shows at the top of
    the dropdown. 
    */

    function loadStates(params) {
        setSelectedZone(params);
        nextSlide();
    }

    function loadAreas(params) {
        
        setSelectedState(params)
        nextSlide();
    }

    function loadDivisions(params) {
        setSelectedArea(params)
        nextSlide();
    }

    function loadStations(params) {
        setSelectedDivision(params)
        nextSlide();
    }

    function selectAsset(params) {
        onSelect(params)
    }
    


    return (
        <div >
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
                        <CarouselItem key={item.id} position={position}>
                            {item.component}
                        </CarouselItem>
                    )
                })}
            </CarouselSection>

            
        </div>
    )
}

RegionSelector.propTypes = {

}

const CarouselSection = styled.section`
    margin: 5px 0;
    position: relative;
    width: 100%;
    height: 311px;
    max-height: 311px;
    text-align: center;
    overflow: auto;
    padding: 0 5px;
    background: #FAFBFC;
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
`

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
        height: 100%;
    ` }

    ${props => props.position === 'next' && css`
    transform: translateX(100%);
        height:0;
    ` }

    ${props => props.position === 'prev' && css`
      
    transform: translateX(-100%);
        height:0;
    ` }
`



export default React.memo(RegionSelector)

