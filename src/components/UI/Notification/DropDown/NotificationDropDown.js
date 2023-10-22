import React from "react";
import NotificationDropDownItem from "./NotificationDropDownItem";
import classes from "./NotificationDropDown.module.css";

const NotificationDropDown = (props) => {
  return (
    <div className={classes.NotificationResult}>
      <NotificationDropDownItem
        New={true}
        match={props.match}
        matchnum={props.matchnum}
        time={props.time}
      />
      <NotificationDropDownItem
        match={props.match}
        matchnum={props.matchnum}
        time={props.time}
      />
    </div>
  );
};

export default NotificationDropDown;
