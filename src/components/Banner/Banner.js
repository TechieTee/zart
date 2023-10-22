import React from 'react'; 
// import Button from '../UI/Button/Button';
import classes from './Banner.module.css';


const Banner = (props) => {
    return(
        <section className={classes.header}>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 align-items-center">
                        <h4 className="align-items-center">{props.title}</h4>
                    </div>

                    <div className="col-md-6">
                        <div className=" pull-right">
                            {/* <Button clicked={props.btnAction} btnStyle={props.btnStyle}><i className="fa fa-plus" aria-hidden="true"></i> {props.btnTitle}</Button> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner;