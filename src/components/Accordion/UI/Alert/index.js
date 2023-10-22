import React from "react";
import { toast } from "react-toastify";
import PropTypes from "prop-types";
import infoIcon from "../../assets/icons/info-icon.svg";
import errorIcon from "../../assets/icons/error-icon-m.svg";
import warningIcon from "../../assets/icons/warning-icon-m.svg";
import successIcon from "../../assets/icons/success-icon-m.svg";
import { ToastWrapper } from "./styles";
import Button from "../Button/Button";

/*
    # --------------- #
    # Prop Types Def  #
    # --------------- #
*/
const propTypes = {
  variant: PropTypes.oneOf(["info", "success", "warn", "error"]),
  msg: PropTypes.string,
  actionButton: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
};

const defaultProps = {
  msg: "You have a new notification",
  actionButton: [],
};

function renderModalIcon({ variant }) {
  switch (variant) {
    case "warn":
      return <img className="mr-3" src={warningIcon} alt="warning-icon" />;
    case "error":
      return <img className="mr-3" src={errorIcon} alt="error-icon" />;
    case "info":
      return <img className="mr-3" src={infoIcon} alt="info-icon" />;
    case "success":
      return <img className="mr-3" src={successIcon} alt="success-icon" />;

    default:
      break;
  }
}

function AlertBody({ variant, msg, actionButton }) {
  return (
    <ToastWrapper>
      <div className="header">
        {renderModalIcon({ variant })}
        <div>
          <h3>{msg}</h3>
          <div className="footer mt-3">
            {actionButton?.map((item) => {
              return (
                <Button style={{ padding: "6px 23px" }} key={item.id} {...item}>
                  {item.children}
                </Button>
              );
            })}
          </div>
        </div>
      </div>
    </ToastWrapper>
  );
}

function alert(variant, { msg, actionButton, config }) {
  toast[variant](
    <AlertBody variant={variant} actionButton={actionButton} msg={msg} />,
    config
  );
}

AlertBody.propTypes = propTypes;
AlertBody.defaultProps = defaultProps;

export default {
  success: (...args) => alert("success", ...args),
  info: (...args) => alert("info", ...args),
  warn: (...args) => alert("warn", ...args),
  error: (...args) => alert("error", ...args),
};
