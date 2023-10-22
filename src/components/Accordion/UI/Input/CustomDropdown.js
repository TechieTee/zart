import React, { memo } from 'react'
import Select from 'react-select'
import { useFormikContext, useField } from 'formik'
import PropTypes from 'prop-types'

import CustomLabel from './CustomLabel'
import { shallowEqual } from '../../assets/shared/Methods'

const CustomDropdown = memo(
	({
		options,
		label,
		borderStyle,
		formatOptionLabel = [],
		onChange,
		...props
	}) => {
		const { setFieldValue, setFieldTouched } = useFormikContext()
		const [field, meta] = useField(props)

		const customStyles = {
			option: (provided, state) => ({
				...provided,
				padding: '10px 15px',
				fontSize: '14px',
			}),
			control: (provided, state) => ({
				...provided,
				fontSize: '15px',
				// position:'relative',
				// zIndex: 1,
				border:
					meta.touched && meta.error
						? '1px solid  #EB5757'
						: borderStyle || '1px solid #E0E0E0',
				background: meta.touched && meta.error ? '#FFF3F1' : '#fff',
				padding: '7px 1px',
				cursor: options.length === 0 ? 'not-allowed' : '',
			}),
			singleValue: (provided, state) => {
				const opacity = state.isDisabled ? 0.5 : 1
				const transition = 'opacity 300ms'

				return { ...provided, opacity, transition }
			},
		}

		const { name, dependable, loadOption, disabled } = props
		/**
		 * Will manually set the value belong to the name props in the Formik form using setField
		 */
		const handleOptionChange = (selection) => {
			setFieldValue(name, selection)
			onChange && onChange(selection)
			dependable && loadOption(selection)
		}
		/**
		 * Manually updated the touched property for the field in Formik
		 */
		const updateBlur = () => {
			setFieldTouched(name, true)
		}

		const hideDropdownIndicator = disabled && { DropdownIndicator: () => null }

		return (
			<React.Fragment>
				{label && (
					<CustomLabel htmlFor={props.id}>
						{label}
						{props.requiredstar ? <span className='text-danger'>*</span> : null}
					</CustomLabel>
				)}
				<Select
					styles={customStyles}
					options={options}
					placeholder={props.placeholder}
					{...field}
					onBlur={updateBlur}
					onChange={handleOptionChange}
					formatOptionLabel={formatOptionLabel}
					components={{
						IndicatorSeparator: () => null,
						...hideDropdownIndicator,
					}}
					isDisabled={disabled}
					{...props}
				/>
				{meta.touched && meta.error ? (
					<span className='app-error'>{meta.error.value}</span>
				) : null}
			</React.Fragment>
		)
	},
	(prevProps, nextProps) => {
		return shallowEqual(prevProps, nextProps)
	},
)

export default CustomDropdown

CustomDropdown.propTypes = {
	options: PropTypes.array.isRequired,
	name: PropTypes.string.isRequired,
	label: PropTypes.string,
	placeholder: PropTypes.string,
	disabled: PropTypes.bool,
	loadOption: PropTypes.func,
	dependable: PropTypes.bool,
	id: PropTypes.string.isRequired,
}
