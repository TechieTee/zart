import React, { Component } from "react";
import PropTypes from "prop-types";

import AccordionSection from "./AccordionSection";
import classes from "./Accordion.module.css";

class Accordion extends Component {
  static propTypes = {
    allowMultipleOpen: PropTypes.bool,
    children: PropTypes.instanceOf(Object).isRequired,
    className: PropTypes.string,
  };

  constructor(props) {
    super(props);

    const openSections = {};

    this.props.children.forEach((child) => {
      if (child.props.isOpen) {
        openSections[child.props.label] = true;
      }
    });

    this.state = { openSections };
  }

  onClick = (label) => {
    const {
      props: { allowMultipleOpen },
      state: { openSections },
    } = this;

    const isOpen = !!openSections[label];

    if (allowMultipleOpen) {
      this.setState({
        openSections: {
          ...openSections,
          [label]: !isOpen,
        },
      });
    } else {
      this.setState({
        openSections: {
          [label]: !isOpen,
        },
      });
    }
  };

  // shouldComponentUpdate(nextProps, nextState){
  //   return nextState.openSections !== this.state.openSections
  // }

  render() {
    const {
      onClick,
      props: { children },
      state: { openSections },
    } = this;

    return (
      <div classes={classes.AccordionWrapper}>
        {children.map((child) => (
          <AccordionSection
            NotificationIcon={this.props.iconType}
            key={child.props.label}
            isOpen={!!openSections[child.props.label]}
            label={child.props.label}
            onClick={onClick}
            isComplete={child.props.isComplete}
            description={child.props.description}
            isError={child.props.isError}
            errorCount={child.props.errorCount}
            className={this.props.className}
          >
            {child.props.children}
          </AccordionSection>
        ))}
      </div>
    );
  }
}

export default Accordion;
