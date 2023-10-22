import classes from "./ProfileLabel.module.css";
import React from "react";
import arrowDown from "../../assets/icons/nav-arrow-down.svg";

function ProfileLabel({ status, type }) {
  const mainClass = type === "group" ? classes.neutral : classes[status];

  if (type === "group") {
    return null;
  }
  return (
    <div className={[classes.ProfileLabelWrapper, mainClass].join(" ")}>
      <span>{status}</span>
    </div>
  );
}

export default ProfileLabel;
