import React, { Component } from 'react';
import classes from "./Modal.module.css";
import Backdrop from '../BackDrop/Backdrop';
import ReactDOM from 'react-dom'


class Modal extends Component {
    constructor(props){
            super(props);
        this.body=document.querySelector("#app")
    }
    shouldComponentUpdate(nextProps, nextState){
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children
    }

    componentDidUpdate(nextProps,prevProps){
    return       nextProps.show ? this.body.style.overflow = "hidden" : this.body.style.overflow = "scroll"

    }
    
    render(){
        return(
            ReactDOM.createPortal(
              (  <React.Fragment>
                <Backdrop show={this.props.show} close={this.props.modalClosed} /> 
            <div  className={classes.Modal} style={{
                transform:this.props.show ? 'translateY(0)': 'translateY(-100vh)',
                opacity: this.props.show ? '1':'0',
                display:this.props.show ? 'block':'none',
                overflow:'scroll'
            }} >
                <p className={classes.closeBtn} onClick={this.props.modalClosed}> x </p>
                {this.props.children}
            </div>
            </React.Fragment>),
            document.getElementById('app')
        )
        )
    }
    
};
export default Modal;