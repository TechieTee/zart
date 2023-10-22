import React, { useState, useEffect } from "react";
import { useFormikContext } from "formik";
import CustomLabel from "./CustomLabel";
import classes from "./Input.module.css";
import CreatableSelect from "react-select/creatable";
import PropTypes from "prop-types";

const createOption = (label) => ({ label, value: label });
const components = {
  DropdownIndicator: null
}


const CustomMultiInput = ({ label,id,name,placeholder,options, ...props }) => {
  // Uncomment to utilise ,commented due to typeError
  const { setFieldValue,initialValues,setFieldError,touched,errors,setFieldTouched } = useFormikContext();
  const [value, setValue] = useState([]);
  const [ inputValue,setInputValue] = useState('') 
  
  const customStyles = 
      {
       
        control: (provided, state) => ({
          ...provided,
          fontSize: "15px",
          border:touched[name] && errors[name] ? '1px solid  #EB5757' : "1px solid #E0E0E0",
          background:touched[name] && errors[name] ? '#FFF3F1':  "#fff",
          padding: "7px 1px",
          cursor:"",
          boxShadow:'none'
        }),
        singleValue: (provided, state) => {
          const opacity = state.isDisabled ? 0.5 : 1;
          const transition = "opacity 300ms";

          return { ...provided, opacity, transition };
        },
      }
  


  const handleKeyDown = event => {

    let keys = [13,9,188];
    let  keypressed =   event?.which;
    if (keys.includes(keypressed)) {
      event.preventDefault();
      event.stopPropagation();
      if(value?.find(element=>element.label === inputValue) !== undefined) setFieldError(name,"You can't add duplicate data")
      if(inputValue !== '' && value?.find(element=>element.label === inputValue) === undefined){
      
        setValue((preValue)=> ([...preValue,createOption(inputValue)]));
        setInputValue('');
        
      }

    }
    
    
  }
  
  
  useEffect(()=>{setValue(initialValues[name])},[])
  useEffect(()=>{
    // commented due to typeError , 
    value &&  setFieldValue(name,value.map(item=>item.value))
  }
  ,[value]) 

  const handleChange = (val,action)=>{
      setValue(val)
  }

  const handleInputChange  =(inputValue)=>{
    setFieldTouched(name,true)
    setInputValue(inputValue)
  }

  return (
    <div className={classes.inputContainer}>
      <CustomLabel htmlFor={id}>
        {label}
        {props.requiredstar ? <span className='text-danger'>*</span> : null}
      </CustomLabel>
      <CreatableSelect 
      placeholder={placeholder}
      inputValue={inputValue}
      components={components}
      styles={customStyles}
      id={id}
      name={name}isClearable
      
      isMulti
      menuIsOpen = {false}
      onInputChange={handleInputChange}
      onChange={handleChange}
      value={value}
      onKeyDown={handleKeyDown}
      
      />
    {touched[name] && errors[name] ? (
        <span className="app-error">{errors[name]}</span>
      ) : null}

      </div>
  
  );
  
};

CustomMultiInput.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  options: PropTypes.array.isRequired,
  requiredstar:PropTypes.bool
};


export default CustomMultiInput;

