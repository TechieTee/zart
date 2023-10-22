import React, { useEffect, useState } from "react";

const CustomFilterMenuItem = ({
  handleItemSelection,
  item,
  initialCheck,
  ...otherProps
}) => {
  const [checked, setChecked] = useState(false);
  const [itemList, setItemList] = useState(false);

  useEffect(() => {
    const filterItem = (itemValue) => {
      if (typeof itemValue === "string") {
        return setItemList(item);
      } else {
        const data = item.filter((value) => {
          return !React.isValidElement(value);
        });

        setItemList(data);
      }
    };
    filterItem(item);
  }, [item]);
  return (
    <div
      style={{
        fontWeight: checked ? "500" : "400",
        display: "flex",
        alignItems: "baseline",
        color: checked ? "#193B68" : "#63768E",
        margin: "6px 8px",
      }}>
      <label onClick={(e) => e.stopPropagation()} htmlFor={item}>
        <input
          id={itemList}
          type="checkbox"
          defaultChecked={initialCheck}
          onChange={(e) => {
            e.stopPropagation();
            handleItemSelection(e.target.checked, item);
            setChecked(!checked);
          }}
          {...otherProps}
        />

        <span
          style={{
            marginLeft: "12px",
          }}>
          {itemList}
        </span>
      </label>
    </div>
  );
};

export default CustomFilterMenuItem;
