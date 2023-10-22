import React from "react";
import classes from "./NotificationDropDown.module.css";
import ElipseBlue from "../../../assets/icons/ellipse_blue.svg";
import MatchIcon from "../../../assets/icons/match.svg";
import ActiveMatchIcon from "../../../assets/icons/active-match.svg";

const NotificationItem = (props) => {

  let newicon= <img src={ElipseBlue} alt="elipse-blue-icon" />
   let activeicon= <img src={ActiveMatchIcon} alt="arrow-right-icon" />
   let inactiveicon= <img src={MatchIcon} alt="arrow-right-icon" />
  return (
    <div
      className={
        props.New 
          ? classes.NewNotificationResultItem
          : classes.NotificationResultItem
      }
    >
      <div className="col-md-12">
        <div className="row">
          <div
            className={props.New ? classes.ActiveIcon : classes.InactiveIcon}
          >
            {newicon}
          </div>

          <div className={classes.MatchIcon}>
            {props.New ? activeicon : inactiveicon}
          </div>

          <div className={classes.NotificationText}>
            {props.match} <br />
            {props.matchnum}
          </div>

          <div className={classes.NotificationTime}>{props.time}</div>
        </div>
      </div>
    </div>
  );
};

export default NotificationItem;
