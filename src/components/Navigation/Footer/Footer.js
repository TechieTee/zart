import React from 'react';
import classes from './Footer.module.css';

const Footer = (props) => {
    const date = new Date().getFullYear()
return(
        <>
        <footer className={["footer", classes.Footer].join(" ")}>
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                       <p className="text-center">Copyright © {date} Hardcore Biometric Systems Inc. All rights reserved.</p>
                    </div>
                   
                </div>
            </div>
            
        </footer>
        </>
    )
}
export default Footer;