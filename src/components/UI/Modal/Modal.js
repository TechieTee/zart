import React, { Component,createRef } from 'react';
import classes from "./Modal.module.css";
import Backdrop from '../BackDrop/Backdrop';
import ReactDOM from 'react-dom'


class Modal extends Component {
    constructor(props){
        super(props);
        this.focusableElement = 'a[href],area[href],input:not([disabled]):not([type="hidden"]),select:not([disabled]),textarea:not([disabled]), button:not([disabled]), iframe,  object,   embed,[tabindex="0"], [contenteditable],audio[controls],video[controls],summary,  [tabindex^="0"],[tabindex^="1"],[tabindex^="2"],[tabindex^="3"], [tabindex^="4"],[tabindex^="5"],[tabindex^="6"],[tabindex^="7"],  [tabindex^="8"], [tabindex^="9"]';
        this.body=document.querySelector("#app");
        this.trap = this.trap.bind(this)
        this.modalRef = createRef();
    }
    
    
    
    componentDidMount (){
        this.modalRef.current.addEventListener('keydown',this.trap)
    }
    
    shouldComponentUpdate(nextProps, nextState){
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children
    }
    
    componentDidUpdate(nextProps,prevProps){

        return     nextProps.show ? this.body.style.overflow = "hidden" : this.body.style.overflow = "scroll"

    }
    
    componentWillUnmount(){
        this.body.style.overflow = "scroll"
    }

    trap(e){        
        this.focusableArr  =  this.modalRef.current.querySelectorAll(this.focusableElement
            )
      let firstElement = this.focusableArr[0] && this.focusableArr[0];
      let lastElement  = this?.focusableArr[this?.focusableArr?.length-1] &&  this?.focusableArr[this?.focusableArr?.length-1]
        if (e.keyCode === 9){
            if(e.shiftKey){
                if(document.activeElement === firstElement){
                    e.preventDefault();
                    lastElement.focus()
                }
            }else{
                if(document.activeElement === lastElement){
                    e.preventDefault();
                    firstElement.focus()
                }
            }
        }

    }
    render(){
        return(
            ReactDOM.createPortal(
              (  <React.Fragment>
                <Backdrop show={this.props.show} close={this.props.modalClosed} /> 
            <div   ref={this.modalRef}  className={[classes.Modal,'Modal1'].join(' ')} style={{
                transform:this.props.show ? 'translateY(0)': 'translateY(-100vh)',
                opacity: this.props.show ? '1':'0',
                display:this.props.show ? 'block':'none',
                // overflow:'scroll'
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