import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router';
import { appTypeParamChecker } from '../Method';

function AppModuleUrlChecker(WrappedComponent) {

    const AppChecker = props => {
        const [isValid, setIsValid] = useState(true)
        const { type } = props.match.params;

        useEffect(()=>{
            if(!type || !appTypeParamChecker(type)){
                setIsValid(false)
            }
        },[type])

        if(!isValid){
            return <Redirect
                to={{
                    pathname: "/",
                    state: {
                        from: "/",
                    },
                }}
            ></Redirect>
        }

        return (
            <WrappedComponent {...props} />
        )
    }

    return AppChecker;
    
}

export default AppModuleUrlChecker

