import React from 'react';
import classes from './Card.module.css';
import Skeleton from 'react-loading-skeleton';

const Card = (props) => {

    return(
        <>
            <div className={classes.wrapper}>
                {props.email ? <div className={classes.profileImg}></div> : <Skeleton duration={0.48} circle={true} height={60} width={60}  />}
                <div className={classes.info}>
                    <p>{props.firstname ?  props.firstname +' '+props.lastname :<Skeleton duration={0.48} />}</p>
                    <h6>{props.email || <Skeleton duration={0.48}   />}</h6>
                </div>
                <div className={classes.actions}>
                    {props.email ?
                    <>
                     <button><i className="fa fa-pencil" aria-hidden="true"></i></button>
                     <button><i className="fa fa-trash" aria-hidden="true"></i></button>
                     </> 
                     :  
                        <>
                        <Skeleton duration={0.48} circle={true} height={30} width={30}  />
                        <Skeleton duration={0.48} circle={true} height={30} width={30}  />
                        </>
                    }
                </div>
            </div>
        </>
    )
}

export default Card;