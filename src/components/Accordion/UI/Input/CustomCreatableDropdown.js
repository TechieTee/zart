import React  ,{useMemo} from "react";
import CreatableSelect from "react-select/creatable";
import { useFormikContext, useField } from "formik";
import CustomLabel from "./CustomLabel";
import PropTypes from 'prop-types'
  
const CustomCreatableDropdown = 
  ({ options, label,disableDropdown, ...props }) => {
    const { setFieldValue, setFieldTouched } = useFormikContext();
    const [field, meta] = useField(props);
    const { name, dependable, loadOption } = props;
    const actualOption = useMemo(()=>options,[options])

    const disable =   disableDropdown &&   {   DropdownIndicator:() =>  null}
    const customStyles = 
      {
        option: (provided, state) => ({
          ...provided,
          padding: "10px 15px",
          fontSize: "14px",
        }),
        control: (provided, state) => ({
          ...provided,
          fontSize: "15px",
          border:
            meta.touched && meta.error
              ? "1px solid  #EB5757"
              : "1px solid #E0E0E0",
          background: meta.touched && meta.error ? "#FFF3F1" : "#fff",
          padding: "7px 1px",
        }),
        singleValue: (provided, state) => {
          const opacity = state.isDisabled ? 0.5 : 1;
          const transition = "opacity 300ms";

          return { ...provided, opacity, transition };
        },
      }
   
    

    /**
     * Will manually set the value belong to the name props in the Formik form using setField
     */
    const handleOptionChange = (selection) => {
        setFieldValue(name, selection);

        dependable && loadOption(selection);
      }
    ;
    /**
     * Manually updated the touched property for the field in Formik
     */
    const updateBlur =() => {
      setFieldTouched(name, true);
    };

    return (
      <React.Fragment>
        <CustomLabel htmlFor={props.id}>
          {label}
          {props.requiredstar ? <span className="text-danger">*</span> : null}
        </CustomLabel>
        <CreatableSelect
          styles={customStyles}
          options={actualOption}
          {...field}
          {...props}
          isMulti = {props.isMulti ? true : false }
          onBlur={updateBlur}
          onChange={handleOptionChange}
          components={{
            IndicatorSeparator: () => null,
            ...disable
           
          }}
          formatCreateLabel={(value)=>`Add "${value}"`}
        />
        {meta.touched && meta.error ? (
          <span className="app-error">{meta.error.value}</span>
        ) : null}
      </React.Fragment>
    );
  };   


export default CustomCreatableDropdown;


CustomCreatableDropdown.propTypes = {
  options:PropTypes.array.isRequired,
  name:PropTypes.string.isRequired,
  label:PropTypes.string,
  placeholder:PropTypes.string,
  isMulti:PropTypes.bool
}