import React, { useState } from "react";
// import { toast } from "react-toastify";
import classes from "./Navigation.module.css";
import notificationDark from "../../../assets/icons/notification-dark-icon.svg";
import settingsIcon from "../../../assets/icons/settings-icon.svg";
import profileImg from "../../../assets/images/profile-img.png";
import Button from "../../UI/Button/Button";
import NotificationDropDown from "../../UI/Notification/DropDown/NotificationDropDown";
// import NotificationPopUp from "../../UI/Notification/PopUp/NotificationPopUp";
// import ActiveMatchIcon from "../../../assets/icons/active-match.svg";

const Navigationitems = (props) => {
  const [notification, setNotification] = useState(false);

  // toast( <NotificationPopUp
  //   img={<img src={ActiveMatchIcon} alt="arrow-right-icon" />}
  //   match="10 new match found"
  //   matchnum=" for 3 enrollment"
  //   close="&#x2716;"
  // />);

  let attachedClasses = ["app-navbar", "navbar-collapse"];
  let attachedClasses_2 = ["navbar-nav"];
  if (props.device === "mobile") {
    attachedClasses = [classes.AppNavbar, "app-navbar", "navbar-collapse"];
    attachedClasses_2 = [classes.Nav, "navbar-nav"];
  }

  let Navigation = (
    <React.Fragment>
      <div onClick={() => setNotification(!notification)}>
        <Button btnStyle="notificationBtn">
          <img src={notificationDark} className="mr-2" alt="notification" />
          Notification <span className="ml-1">(2)</span>
        </Button>
      </div>
      {notification ? (
        <div className={classes.overlayNav}>
          <NotificationDropDown
            match="10 new match found"
            matchnum=" for 3 enrollment"
            time="3 min ago"
          />
        </div>
      ) : (
        ""
      )}
      {/* <Navigationitem styleType="Login" link='/login' >Login</Navigationitem>
            <Navigationitem styleType="Signup" link='/sign-up' >Signup</Navigationitem> */}
      <div className={[classes.profileIcon, "ml-5 mt-1"].join(" ")}>
        <img src={profileImg} alt="profileImg" />
      </div>
      <div
        className={[classes.settingsIcon, "ml-5 mt-1"].join(" ")}
        onClick={props.toggleSettings}
      >
        <img src={settingsIcon} className="mr-2" alt="settingsicon" />
      </div>
    </React.Fragment>
  );

  return (
    <div className={attachedClasses.join(" ")} id="navbarNav">
      <ul className={attachedClasses_2.join(" ")}>{Navigation}</ul>
    </div>
  );
};

export default Navigationitems;
