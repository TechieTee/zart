import classes from "./Button.module.css";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

function useDropdownVisible(initialIsVisible) {
  const [isDropdownVisible, setIsDropdownVisible] = useState(initialIsVisible);
  const ref = useRef(null);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsDropdownVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  });

  return { ref, isDropdownVisible, setIsDropdownVisible };
}

function ButtonDropdown(props) {
  const {
    btnStyleProps,
    label,
    title,
    icon,
    dropDownStyleProps,
    children,
    contentCloseToggle,
    mode,
    defaultIcon,
    titleStyle,
  } = props;
  const { ref, isDropdownVisible, setIsDropdownVisible } = useDropdownVisible(
    false
  );

  const btnStyleClicked = {
    color: "#ffffff",
    background: "#193B68",
  };

  const btnDefaultStyle =
    btnStyleProps === null
      ? { color: "#505F79", background: "#F4F5F7" }
      : btnStyleProps;

  const btnStyle = isDropdownVisible ? btnStyleClicked : btnDefaultStyle;

  function toggleDropdown(e) {
    setIsDropdownVisible((prevState) => !prevState);
  }

  function handleContentClick() {
    if (mode === 0) {
      toggleDropdown();
    }
  }

  useEffect(() => {
    if (contentCloseToggle && mode === 1) {
      setIsDropdownVisible((prevState) => !prevState);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contentCloseToggle]);

  return (
    <div ref={ref} className={classes.BtnDropdownWrapper}>
      <div style={{ width: "fit-content" }}>
        <button
          onClick={toggleDropdown}
          className={classes.btnDropDown}
          style={btnStyle}>
          <span className={titleStyle}>
            {title && title}
            {label && ": "}{" "}
          </span>{" "}
          <span>{label}</span>
          {icon ? icon : <span>{defaultIcon && <ArrowDropDown />}</span>}
        </button>
      </div>
      {isDropdownVisible && (
        <div
          style={dropDownStyleProps}
          onClick={handleContentClick}
          className={classes.DropdownContent}>
          {children}
        </div>
      )}
    </div>
  );
}

function ArrowDropDown() {
  return (
    <svg
      style={{ marginLeft: 12 }}
      width="7"
      height="5"
      viewBox="0 0 7 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.25514 0.256331C0.0916794 0.421617 0 0.6447 0 0.877162C0 1.10962 0.0916794 1.33271 0.25514 1.49799L2.82684 4.09245C3.0176 4.28058 3.26436 4.37421 3.50849 4.37421C3.75262 4.37421 3.995 4.28058 4.18139 4.09245L6.74521 1.50674C6.90846 1.34135 7 1.11831 7 0.885913C7 0.653519 6.90846 0.430478 6.74521 0.265082C6.66486 0.183543 6.56909 0.118793 6.46349 0.0745968C6.35789 0.0304009 6.24455 0.00764143 6.13007 0.00764143C6.01559 0.00764143 5.90225 0.0304009 5.79665 0.0745968C5.69104 0.118793 5.59528 0.183543 5.51493 0.265082L3.50411 2.29252L1.48543 0.256331C1.40489 0.17511 1.30907 0.110642 1.20349 0.0666466C1.09791 0.0226513 0.984664 0 0.870284 0C0.755905 0 0.642657 0.0226513 0.537077 0.0666466C0.431497 0.110642 0.335675 0.17511 0.25514 0.256331Z"
        fill="currentColor"
      />
    </svg>
  );
}

ButtonDropdown.defaultProps = {
  btnStyleProps: { color: "#505F79", background: "#F4F5F7" },
  label: "",
  title: "",
  icon: null,
  dropDownStyleProps: { width: "200px", height: "250px" },
  dropDownContent: null,
  contentCloseToggle: false,
  mode: 0,
  defaultIcon: true,
  titleStyle: {},
};

export default ButtonDropdown;
