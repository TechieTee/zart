import React, { Component } from "react";
import PropTypes from "prop-types";
import classes from "./Accordion.module.css";
import downArrow from "../assets/icons/down-arrow.svg";
import rightArrow from "../assets/icons/right-arrow.svg";
import { AccordionChip } from "./AccordionChip";
class AccordionSection extends Component {
  static propTypes = {
    // children: PropTypes.instanceOf(Object).isRequired,
    isOpen: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    headerContent: PropTypes.element.isRequired,
  };

  // onClick = () => {
  //   this.props.onClick;
  // };

  renderIcon = (icon, onClick) => {
    return (
      icon !== null && (
        <div onClick={onClick} className={classes.iconArea}>
          {<img src={icon} width="30" alt="icon" />}
        </div>
      )
    );
  };

  // shouldComponentUpdate(nextProps, nextState){
  //   return nextProps.isOpen !== this.props.isOpen || nextProps.label !== this.props.label || nextProps.isComplete !== this.props.isComplete
  // }

  render() {
    const {
      onClick,
      props: { isOpen, label, showOpenIcon, style },
    } = this;

    let maxHeight = isOpen ? "10021px" : "0";
    let iconType = isOpen
      ? rightArrow
      : !isOpen && !showOpenIcon
      ? null
      : downArrow;
    let overflow = isOpen && maxHeight === "10021px" ? "visible" : "hidden";
    let opacity = isOpen && maxHeight === "10021px" ? 1 : 0;
    let backgroundColor = isOpen ? "#F8F8F8" : "transparent";

    return (
      <div className={classes.AccordionChild} style={{ backgroundColor }}>
        <div className={classes.customHeader} style={{ cursor: "pointer" }}>
          <div className="row">
            <div className="col-md-11 d-flex " style={style}>
              {this.props.headerContent}
            </div>
            <div className="col-md-1 p-0 justify-content-end text-right">
              {this.renderIcon(iconType, this.props.onClick)}
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
          {this.props.content}
        </div>
      </div>
    );
  }
}

export default AccordionSection;
