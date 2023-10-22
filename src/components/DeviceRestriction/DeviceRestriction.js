import React from 'react';
import notallowedImg from '../../assets/images/notallowed.png'

export const DeviceRestriction = (props) => {

    return(

        <section className="mt-5">
            <div className="container h-100">
                <div className="row align-items-center justify-content-center">
                    <div className="col-md-9">
                        <div className="text-center">
                            <img className="mt-5" width="200" src={notallowedImg} alt="Device not allowed" />
                            <h2 className="mt-5">No phones/tablets allowed</h2>
                            <p className="mt-4">Please Visit a Desktop browser to access this application</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}