import React, { Component } from "react";
import PropTypes from "prop-types";

import AccordionSection from "./AccordionSection";
import classes from "./Accordion.module.css";

class Accordion extends Component {
  static propTypes = {
    allowMultipleOpen: PropTypes.bool,
    children: PropTypes.instanceOf(Object).isRequired,
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
            key={child.props.label}
            isOpen={child.props.isOpen}
            label={child.props.label}
            onClick={child.props.toggleAccordion}
            content={child.props.children}
            headerContent={child.props.headerContent}
            showOpenIcon={child.props.showOpenIcon}
            style={child.props.headerStyle}
          />
        ))}
      </div>
    );
  }
}

export default Accordion;
