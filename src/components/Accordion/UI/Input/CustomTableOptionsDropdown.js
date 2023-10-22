import React, { useEffect, useRef, useState } from 'react';
import Table from '../../Admin/UI/Table/Table';
import classes from './Input.module.css';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

function useDropdownVisible(initialIsVisible) {
  const [isDropdownVisible, setIsDropdownVisible] = useState(initialIsVisible);
  const ref = useRef(null);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsDropdownVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  });

  return { ref, isDropdownVisible, setIsDropdownVisible };
}

function SearchIcon({ color }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.1866 11.2216H12.9766L17.2166 
        15.4816C17.6266 15.8916 17.6266 16.5616 17.2166 
        16.9716C16.8066 17.3816 16.1366 17.3816 15.7266 
        16.9716L11.4766 12.7216V11.9316L11.2066 
        11.6516C9.80656 12.8516 7.89656 13.4716 
        5.86656 13.1316C3.08656 12.6616 0.866562 
        10.3416 0.526562 7.54157C0.0065625 3.31157 
        3.56656 -0.248427 7.79656 0.271573C10.5966 
        0.611573 12.9166 2.83157 13.3866 5.61157C13.7266 
        7.64157 13.1066 9.55157 11.9066 10.9516L12.1866 
        11.2216ZM2.47656 6.72157C2.47656 9.21157 4.48656 
        11.2216 6.97656 11.2216C9.46656 11.2216 11.4766 9.21157 
        11.4766 6.72157C11.4766 4.23157 9.46656 2.22157 6.97656 2.22157C4.48656 2.22157 2.47656
        4.23157 2.47656 6.72157Z"
        fill={color}
      />
    </svg>
  );
}

function CancelIcon() {
  return (
    <svg
      style={{ margin: '-1px 0px 0px -4px' }}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 10C0 4.47 4.47 0 10 0C15.53 0 20 4.47 20 10C20 15.53 15.53 20 10 20C4.47 20 0 15.53 0 10ZM12.89 
            14.3C13.28 14.69 13.91 14.69 14.3 14.3C14.68 13.91 14.68 13.27 14.3 12.89L11.41 10L14.3 7.11C14.69
            6.72 14.69 6.09 14.3 5.7C13.91 5.31 13.28 5.31 12.89 5.7L10 8.59L7.11 5.7C6.72 5.31 6.09 5.31 5.7 5.7C5.51275 
            5.88683 5.40751 6.14048 5.40751 6.405C5.40751 6.66952 5.51275 6.92317 5.7 7.11L8.59 10L5.7 12.89C5.51275 
            13.0768 5.40751 13.3305 5.40751 13.595C5.40751 13.8595 5.51275 14.1132 5.7 14.3C6.09 14.69 6.72 14.69 
            7.11 14.3L10 11.41L12.89 14.3Z"
        fill="#505F79"
      />
    </svg>
  );
}

const ChipSet = ({
  styleType,
  data,
  removeOptions,
  setInputFocus,
  labelKey,
  position,
}) => {
  return data?.map((item, index) => (
    <p
      key={index}
      className={
        position === 'left' ? 'ml-1 mb-0 d-inline-block' : 'mb-0 d-inline-block'
      }>
      <span
        // onClick={() => setInputFocus.current.focus()}

        className={[classes.CustomChipSetVal, classes[styleType]].join(' ')}>
        <span>{item[labelKey]}</span>
        <span>
          <i
            onMouseDown={() => {
              // setInputFocus.current.focus();
              removeOptions(index);
            }}
            className="ml-2">
            &times;
          </i>
        </span>
      </span>
    </p>
  ));
};

//const InputSpinner =  <>  <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span><span className="sr-only">Loading...</span></>;

const useFocus = () => {
  const htmlElRef = useRef(null);
  const setFocus = () => {
    htmlElRef.current && htmlElRef.current.focus();
  };

  return [htmlElRef, setFocus];
};

export default function CustomTableOptionsDropdown({
  labelKey,
  placeholder,
  styleType,
  options,
  selectOptions,
  searchValue,
  setSearchValue,
  removeOptions,
  tableHeaderConfig,
  tableDataConfig,
}) {
  const [inputRef, setInputFocus] = useFocus();
  const [isFocus, setIsFocus] = useState(false);
  const [position, setPosition] = useState('left');
  const { ref, isDropdownVisible, setIsDropdownVisible } = useDropdownVisible(
    false
  );

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  function handleFocus() {
    setIsFocus(true);
    setPosition('right');
  }

  function handleBlur() {
    if (searchValue === '' && options.length === 0) {
      setPosition('left');
    }
    if (isDropdownVisible) {
      setIsFocus(true);
    } else {
      setIsFocus(false);
    }
  }

  function clearInput() {
    setSearchValue('');
    setIsFocus(false);
    setPosition('left');
    removeOptions(-1);
  }

  function handleSelect(e) {
    inputRef.current.focus();

    selectOptions(e);
    setIsDropdownVisible((prevState) => !prevState);
  }

  useEffect(() => {
    if (isFocus) {
      inputRef.current.focus();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFocus]);

  useEffect(() => {
    if (searchValue !== '') {
      setIsDropdownVisible(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);

  return (
    <div
      onClick={() => {
        setIsFocus(true);
        // inputRef.current.focus();
        setInputFocus();
      }}
      className={[classes.CustomTableOptionsDropdown, classes[styleType]].join(
        ' '
      )}>
      {/* <ContentEditable
                html={optVal + `<div contenteditable="true">tt${setValue.current}</div>`} // innerHTML of the editable div
                disabled={false} // use true to disable edition
                onChange={handleChange} // handle innerHTML change
            /> */}
      <div
        style={{ padding: position === 'left' ? '0 0 0 16px' : '0 16px 0 0' }}
        className={classes.optSect}>
        <div className={classes.inputSect}>
          {position === 'left' && (
            <IconWrapper position="left">
              <SearchIcon color="#A5ADBA" />
            </IconWrapper>
          )}

          {options.length !== 0 && (
            <ChipSet
              removeOptions={removeOptions}
              data={options}
              setInputFocus={inputRef}
              styleType="default"
              labelKey={labelKey}
              position={position}
            />
          )}

          {(options.length === 0 || isFocus) && (
            <input
              value={searchValue}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              ref={inputRef}
              placeholder={options?.length === 0 ? placeholder : ''}
              type="text"
            />
          )}

          {position === 'right' && searchValue === '' && options.length === 0 && (
            <IconWrapper position="right">
              <SearchIcon color="#505F79" />
            </IconWrapper>
          )}

          {((position === 'right' && searchValue !== '') ||
            options.length !== 0) && (
            <IconWrapper onClick={clearInput} position="right">
              <CancelIcon />
            </IconWrapper>
          )}
        </div>
      </div>
      {searchValue !== '' &&
      tableDataConfig?.length !== 0 &&
      isDropdownVisible ? (
        <div ref={ref} className={classes.customDropdownOptions}>
          <h3>{tableDataConfig?.length} results</h3>
          <Table
            pageSize={6}
            tableColumns={tableHeaderConfig}
            tableData={tableDataConfig}
            filterRequired={false}
            sortingRequired={false}
            searchRequired={false}
            columnReordering={false}
            paginationRequired={true}
            getRowObjectRequired={true}
            getRowObjectHandler={handleSelect}
            dataReRender={true}
          />
        </div>
      ) : null}
    </div>
  );
}

const IconWrapper = styled.div`
  text-align: center;
  position: absolute;
  cursor: pointer;
  height: 100%;
  display: flex;
  align-items: center;

  ${(props) =>
    props.position === 'left'
      ? css`
          left: 8px;
          top: 0px;
        `
      : css`
          right: 8px;
          top: 0px;
        `}
`;

CustomTableOptionsDropdown.propTypes = {
  labelKey: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  styleType: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  selectOptions: PropTypes.func.isRequired,
  searchValue: PropTypes.string.isRequired,
  setSearchValue: PropTypes.func.isRequired,
  removeOptions: PropTypes.func.isRequired,
  tableHeaderConfig: PropTypes.array.isRequired,
  tableDataConfig: PropTypes.array.isRequired,
};
