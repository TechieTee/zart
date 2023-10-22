import React, { Component } from "react";
import PropTypes from "prop-types";
import classes from "./Accordion.module.css";
import iconCheck from "../assets/icons/check-circle-green.svg";
import iconError from "../assets/icons/error-icon.svg";
import expandMore from "../assets/icons/expand-more-icon.svg";

class AccordionSection extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Object).isRequired,
    isOpen: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    className: PropTypes.string,
  };

  onClick = () => {
    this.props.onClick(this.props.label);
  };

  renderIcon = (type, isComplete, isError, errorCount) => {
    switch (type) {
      case "circle":
        return (
          <div
            style={{
              background: isComplete ? "transparent" : "#DADADA",
              height: isComplete || isError ? "25px" : "20px",
              width: isComplete || isError ? "25px" : "20px",
            }}
            className={classes.iconArea}
          >
            {isComplete ? (
              <img src={iconCheck} alt="icon" />
            ) : isError && errorCount !== 0 ? (
              <img src={iconError} alt="icon" />
            ) : (
              ""
            )}
          </div>
        );
      case "arrow":
        return (
          <div style={{ margin: "auto 13px" }}>
            <img
              style={{ height: "15px", width: "15px" }}
              src={expandMore}
              alt="expand-more-icon"
            />
          </div>
        );

      default:
        return <div>Not Found</div>;
    }
  };

  // shouldComponentUpdate(nextProps, nextState){
  //   return nextProps.isOpen !== this.props.isOpen || nextProps.label !== this.props.label || nextProps.isComplete !== this.props.isComplete
  // }

  render() {
    const {
      onClick,
      props: {
        isOpen,
        label,
        isComplete,
        description,
        isError,
        errorCount,
        className,
      },
    } = this;
    let maxHeight = isOpen ? "999px" : "0";

    let overflow = isOpen && maxHeight === "999px" ? "visible" : "hidden";
    let opacity = isOpen && maxHeight === "999px" ? 1 : 0;

    return (
      <div className={classes.AccordionChild}>
        <div
          className={[className, classes.Header].join(" ")}
          onClick={onClick}
          style={{ cursor: "pointer" }}
        >
          <div className="row">
            <div className="col-md-4 d-flex">
              {this.renderIcon(
                this.props.NotificationIcon,
                isComplete,
                isError,
                errorCount
              )}

              <h4>{label}</h4>
            </div>
            <div className="col-md-5 d-flex">
              <p className={classes.Description}>{description}</p>
            </div>
            <div className="col-md-3 d-flex justify-content-center">
              {isError ? (
                errorCount !== 0 ? (
                  <p className={classes.Error}>
                    {errorCount +
                      " Field" +
                      (errorCount !== 1 ? "s" : "") +
                      " Required"}
                  </p>
                ) : null
              ) : null}
            </div>
          </div>
        </div>

        <div
          style={{ maxHeight, overflow, opacity }}
          className={
            this.props.EnrollmentFrontPageAccordionBody
              ? classes.FrontPageBody
              : classes.Body
          }
        >
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default AccordionSection;
