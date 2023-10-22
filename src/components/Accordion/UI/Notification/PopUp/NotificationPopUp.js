import React from "react";
import classes from "./NotificationPopUp.module.css";
import ArrowRight from "../../../assets/icons/arrow-right.svg";
import Button from "../../Button/Button";

const NotificationPopUp = (props, { closeToast }) => {
  return (
    <div className={classes.AlertNotification}>
      <div className="row">
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-2">
              <div className={classes.AlertNotificationImg}>{props.img}</div>
            </div>

            <div className="col-md-8">
              <div className="row" style={{ marginLeft: "0%" }}>
                <div
                  className="col-md-12"
                  style={{ padding: "0px 0px 18px 0px" }}
                >
                  <div className={classes.AlertNotificationText}>
                    {" "}
                    {props.match} <br />
                    {props.matchnum}
                  </div>
                </div>
                <div className="col-md-12">
                  <Button
                    btnStyle="primary"
                    btnSize="btn-md"
                    style={{ padding: "3px 14px" }}
                  >
                    View <img src={ArrowRight} alt="arrow-right-icon" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="col-md-2">
              <div className={classes.Close} onClick={closeToast}>
                {" "}
                {props.close}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationPopUp;
