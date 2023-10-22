import React, { useState, useEffect, useRef } from "react";

import chevronDown from "../../../assets/icons/chevron-down.svg";
import classes from "../Table.module.css";
import FilterCustomMenuItem from "./FilterCustomMenuItem";

const FilterCustomMenu = ({
  items,
  handleItemSelection,
  columnHeader,
  columnId,
}) => {
  const [show, setShow] = useState(false);
  const [defaultCheck, setDefaultCheck] = useState(true);
  const [selectedList, setSelectedList] = useState([]);

  const menuRef = useRef();
  const toggleView = () => {
    setShow(!show);
  };

  const defaultItem = `All  ${columnHeader}`;

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);

  const handleOutsideClick = (e) => {
    !menuRef?.current?.contains(e.target) && setShow(false);
  };

  useEffect(() => {
    selectedList.length === 0 && setDefaultCheck(true);
  }, [selectedList]);

  const handleSelection = (selected, id) => {
    if (selected === true) {
      setDefaultCheck(false);
      setSelectedList([id, ...selectedList]);
    } else if (selected === false) {
      setSelectedList(selectedList.filter((filter) => filter !== id));
    }

    handleItemSelection(columnId, id);
  };

  const handleSelectedItemDisplay = (data) => {
    let dataList = data.map((values) => {
      if (typeof values === "string") {
        return values;
      } else {
        const value = values.filter((value) => !React.isValidElement(value));
        return value[0];
      }
    });
    return dataList;
  };

  return (
    <>
      <div
        ref={menuRef}
        style={{
          position: "relative",
          display: "inline-block",
        }}
        onClick={toggleView}>
        <div>
          {" "}
          <span>
            {defaultCheck ? (
              <span style={{ margin: "0 10px" }}> {defaultItem} </span>
            ) : (
              <span style={{ margin: "0 5px" }}>
                {handleSelectedItemDisplay(selectedList)?.join(",  ")}
              </span>
            )}
          </span>{" "}
          <span className={classes.filterIcon} style={{ cursor: "pointer" }}>
            {" "}
            <img width={15} src={chevronDown} alt="" />
          </span>
        </div>
        <div
          className={classes.filterMenuDropdownWrapper}
          style={{
            display: show ? "inline-block" : "none",
          }}>
          <div
            style={{
              fontWeight: defaultCheck ? "500" : "400",
              display: "flex",
              alignItems: "baseline",
              color: defaultCheck ? "#193B68" : "#63768E",
              margin: "8px",
            }}>
            <label htmlFor={defaultItem} style={{ cursor: "pointer" }}>
              <input
                id={defaultItem}
                type="checkbox"
                checked={defaultCheck}
                readOnly
              />
              <span style={{ padding: " 0 8px" }}> {defaultItem}</span>
            </label>
          </div>
          <hr style={{ color: "#DADADA", margin: "0" }} />
          <div
            style={{
              margin: "4px 0",
            }}>
            {items.map((item, id) => (
              <FilterCustomMenuItem
                key={`${item} ${id}`}
                handleItemSelection={handleSelection}
                item={item}
                initialCheck={false}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterCustomMenu;
