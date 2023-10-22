import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

function withRegionSelectorWrapper(WrappedComponent, currentSlide) {

    const Wrapper = props => {
        const [headerContent, setHeaderContent] = useState(0);

        function renderHeaderContent(val) {
            switch (val) {
                case 0:
                    return "Search"          
                default:
                    return "Back";
            }
        }

        useEffect(()=>{
           setHeaderContent(currentSlide)
        },[currentSlide])
  
        // props['counter'] = counter;
        // props['setCounter'] = setCounter;

        return(
            <>
            {renderHeaderContent(headerContent)}
            <WrappedComponent {...props} />
            </>
        )
    }

    return Wrapper
}


export default withRegionSelectorWrapper

