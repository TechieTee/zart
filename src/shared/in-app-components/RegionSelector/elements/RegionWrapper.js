import React  from 'react'
import RegionItem from './RegionItem';
import styled from 'styled-components';
import CustomSelectBox from '../../../../components/UI/Input/CustomSelectBox';
import { DropDownLoaders } from '../../SkeletonLoaders';

const HeaderWrapper = styled.div`
    width:100%;
    text-align:left;
`

const BackButton = styled.button`
    background: transparent;
    color: #337BFF;
    outline:0;
`

// const LoadingContainer = styled.div`
//     display:flex;
//     justify-content: center;
//     align-items:center;
//     height: 204px;
//     width:100%;
// `

export function ZoneRegionWrapper({
    prevHandler,
    selectHandler,
    data,
    loading,
    error,
    SelectedRegion,
    nextHandler,
    setSearchValue,
    searchValue}) {

       

        return(
            <>
            <HeaderWrapper>
                <CustomSelectBox value={searchValue} onChange={(e) => setSearchValue(e.target.value)}  />
            </HeaderWrapper>
            
            {loading ?
                <DropDownLoaders />
                :
                error ? (
                    <p className="text-center mt-3">Unable to fetch Zones</p>
                ):
                (<>
                <RegionItem 
                    mode="default"
                    title="All Zone"
                    description="Entire NPF"
                    selectHandler={() => selectHandler(SelectedRegion)}
                />
                {data?.map(({zonalCommand}, index)=>(
                    <RegionItem
                        key={index} 
                        mode="navigation"
                        title={zonalCommand.name}
                        description={zonalCommand.description}
                        nextHandler={() => nextHandler(zonalCommand)}
                        selectHandler={() => selectHandler(zonalCommand)}
                    />
                ))}
                </>
                )
            }
            </>
        )
    
}

export function StateRegionWrapper({
    prevHandler,
    selectHandler,
    data,
    loading,
    error,
    SelectedRegion,
    nextHandler}) {


    return(
        <>
            <HeaderWrapper>
                <BackButton onClick={prevHandler}>Back</BackButton>
            </HeaderWrapper>
            {loading ?
                <DropDownLoaders />
                :
                error ?
                <p className="text-center mt-3">Unable to fetch States</p>
                :
                <>
                {SelectedRegion && <RegionItem 
                    mode="default"
                    title={`All in ${SelectedRegion.name}`}
                    description={SelectedRegion.description}
                    selectHandler={() => selectHandler(SelectedRegion)}
                />}
                {data?.map(({stateCommand}, index)=>(
                    <RegionItem
                        key={index} 
                        mode="navigation"
                        title={stateCommand.name}
                        description={stateCommand.description}
                        nextHandler={() => nextHandler(stateCommand)}
                        selectHandler={() => selectHandler(stateCommand)}
                    />
                ))}
                </>
            }
        </>
    )

}


export function AreaRegionWrapper({
    prevHandler,
    selectHandler,
    data,
    loading,
    error,
    SelectedRegion,
    nextHandler}) {

    return(
        <>
        <HeaderWrapper>
            <BackButton onClick={prevHandler}>Back</BackButton>
        </HeaderWrapper>
        {loading ?
            <DropDownLoaders />
            :
            error ?
                <p className="text-center mt-3">Unable to fetch Areas</p>
            :
            <>
            {SelectedRegion && <RegionItem 
                mode="default"
                title={`All in ${SelectedRegion.name}`}
                description={SelectedRegion.description}
                selectHandler={() => selectHandler(SelectedRegion)}
            />}
            {data?.map(({areaCommand}, index)=>(
                <RegionItem
                    key={index} 
                    mode="navigation"
                    title={areaCommand.name}
                    description={areaCommand.description}
                    nextHandler={() => nextHandler(areaCommand)}
                    selectHandler={() => selectHandler(areaCommand)}
                />
            ))}
            </>
        }
        </>
    )

}


export function DivisionRegionWrapper({
    prevHandler,
    selectHandler,
    data,
    loading,
    error,
    SelectedRegion,
    nextHandler}) {

    return(
        <>
        <HeaderWrapper>
            <BackButton onClick={prevHandler}>Back</BackButton>
        </HeaderWrapper>
        {loading ?
                <DropDownLoaders />
            :
            error ?
                <p className="text-center mt-3">Unable to fetch Divisions</p>
            :
            <>
            {SelectedRegion && <RegionItem 
                mode="default"
                title={`All in ${SelectedRegion?.name}`}
                description={SelectedRegion?.description}
                selectHandler={() => selectHandler(SelectedRegion)}
            />}
            {data?.map(({divisionalCommand}, index)=>(
                <RegionItem
                    key={index} 
                    mode="navigation"
                    title={divisionalCommand.name}
                    description={divisionalCommand.description}
                    nextHandler={() => nextHandler(divisionalCommand)}
                    selectHandler={() => selectHandler(divisionalCommand)}
                />
            ))}
            </>
        }
        </>
    )

}

export function StationRegionWrapper({
    prevHandler,
    selectHandler,
    data,
    loading,
    error,
    SelectedRegion,
    nextHandler}) {

    return(
        <>
        <HeaderWrapper>
            <BackButton onClick={prevHandler}>Back</BackButton>
        </HeaderWrapper>
        {loading ?
                <DropDownLoaders />
            :
            error ?
                <p className="text-center mt-3">Unable to fetch Station</p>
            :
            <>
            {SelectedRegion && <RegionItem 
                mode="default"
                title={`All in ${SelectedRegion?.name}`}
                description={SelectedRegion?.description}
                selectHandler={() => selectHandler(SelectedRegion)}
            />}
            {typeof data === 'object' && data?.map(({station}, index)=>(
                <RegionItem
                    key={index} 
                    mode="default"
                    title={station.name}
                    description={station.description}
                    nextHandler={() => nextHandler(station)}
                    selectHandler={() => selectHandler(station)}
                />
            ))}
            {(typeof data === 'undefined' || typeof data === 'string') && <p className="text-center mt-3">No station available for division: {SelectedRegion?.name}</p> }
            </>
        }
        </>
    )

}



