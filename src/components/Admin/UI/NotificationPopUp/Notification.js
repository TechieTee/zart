import React from "react";
import NotificationIcon from "../../../assets/icons/match.svg";
import ArrowRight from "../../../assets/icons/chevron-right.svg";
import Button from "./../Button/Button";
const Notification = ({ closeToast }) => {
  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-2">
              <img src={NotificationIcon} alt="arrow-right-icon" />
            </div>

            <div className="col-md-8">
              <div className="row">
                <div className="col-md-12">
                  4 new match found for 3 enrollment
                </div>
                <div className="col-md-12">
                  <Button btnStyle="primary" btnSize="btn-md" disabled={true}>
                    View <img src={ArrowRight} alt="arrow-right-icon" style={{color:'#18A0FB'}}/>
                  </Button>
                </div>
              </div>
            </div>

            <div className="col-md-2">
              <div onClick={closeToast}>&#x2716;</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notification;
