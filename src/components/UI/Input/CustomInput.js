import React,{memo} from "react";
import { useField } from "formik";
import classes from './Input.module.css';
import CustomLabel from "./CustomLabel";
import PropTypes from 'prop-types'



const CustomInput = memo(({ label, CustomComponent,...props }) => {
  const [field, meta] = useField(props);

  let errorClass = meta.touched && meta.error ? 'app-error-div': '';

  return (
    <React.Fragment>
      
      {label && <CustomLabel htmlFor={props.id}>{label}{props.requiredstar?<span className="text-danger">*</span>:null} {CustomComponent && <CustomComponent />}</CustomLabel>}
      <div style={{display : props.addon ? 'flex': 'block'}}>
        {props.addon ?
              <div >
                  <span className={classes.addon}>{props.addon}</span>
              </div>
              : 
              ''
              }
        <input className={[classes.inputformik, errorClass].join(" ")}  {...field} {...props}   autoComplete="new-password" />
      </div>
      {meta.touched && meta.error ? (
        <span className="app-error">{meta.error}</span>
      ) : null}
    </React.Fragment>
  );
}
)

export default CustomInput;

CustomInput.propTypes = {
label:PropTypes.string,
addon:PropTypes.any,
CustomComponent:PropTypes.elementType,
name:PropTypes.string.isRequired,
requiredstar:PropTypes.string,
id:PropTypes.string.isRequired
}