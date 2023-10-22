import React from "react";
import styled, { css } from "styled-components";
import {
  typeScale,
  primaryFont,
  light,
  midNeutral,
  primary,
  secondary,
  accent1,
  accent2,
  accent3,
} from "../../utils";

const Button = ({
  backgroundColor,
  type,
  label,
  disabled,
  loading,
  clicked,
  className,
  children,
  ...props
}) => {
  return (
    <ButtonComponent
      type={type || "button"}
      className={[`${className}`]}
      style={backgroundColor && { backgroundColor }}
      onClick={clicked}
      disabled={disabled}
      {...props}
    >
      {label}
      {loading ? (
        <>
          <span
            className="spinner-border spinner-border-sm"
            role="status"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Loading...</span>{" "}
        </>
      ) : (
        children
      )}
    </ButtonComponent>
  );
};

const ButtonComponent = styled.button`
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  outline: none !important;
  font-family: ${primaryFont};
  font-size: ${typeScale.helperText};
  border: 2px solid transparent;
  min-width: 100px;
  transition: background-color 0.2s linear, color 0.2s linear;

  ${(props) =>
    props.btnStyle === "primary"
      ? css`
          color: ${light.default};
          background-color: ${primary.default};

          &:hover {
            background-color: ${primary.inverse};
          }
          &:active {
            background-color: ${primary.dec1};
          }

          &:focus {
            background-color: ${primary.default};
            border: 2px solid ${primary.inverse};
          }
          &:disabled {
            cursor: not-allowed;
            background-color: ${primary.inc1};
          }
        `
      : (props) =>
          props.btnStyle === "default"
            ? css`
                color: ${secondary.default};
                &:hover {
                  background-color: ${light.inc4};
                }
                &:active {
                  background-color: ${primary.inc2};
                  color: ${primary.default};
                }

                &:focus {
                  background-color: ${light.inc2};
                  border: 2px solid ${primary.inverse};
                }
                &:disabled {
                  cursor: not-allowed;
                  background-color: ${light.inc2};
                  color: ${secondary.inc1};
                }
              `
            : (props) =>
                props.btnStyle === "primary-text-link"
                  ? css`
                      background-color: ${light.default};
                      color: ${primary.default};
                      border: none;
                      &:hover {
                        color: ${primary.inverse};
                      }
                      &:active {
                        color: ${primary.dec1};
                      }
                      &:focus {
                        color: ${primary.default};
                        border: 2px solid ${primary.inverse};
                      }
                      &:disabled {
                        cursor: not-allowed;
                        color: ${primary.inc2};
                      }
                    `
                  : (props) =>
                      props.btnStyle === "default-text-link"
                        ? css`
                            background-color: ${light.default};
                            color: ${secondary.default};
                            &:hover {
                              color: ${midNeutral.inc3};
                            }
                            &:active {
                              color: ${primary.default};
                            }

                            &:focus {
                              border: 2px solid ${primary.inverse};
                              color: ${secondary.default};
                            }
                            &:disabled {
                              cursor: not-allowed;
                              color: ${secondary.inc1};
                            }
                          `
                        : (props) =>
                            props.btnStyle === "danger"
                              ? css`
                                  background-color: ${accent1.default};
                                  color: ${light.default};
                                  &:hover {
                                    background-color: ${accent1.inverse};
                                  }
                                  &:active {
                                    background-color: ${accent1.dec1};
                                  }
                                  &:focus {
                                    background-color: ${accent1.default};
                                    border: 2px solid ${primary.inverse};
                                  }
                                  &:disabled {
                                    cursor: not-allowed;
                                    background-color: ${accent1.inc2};
                                    color: ${accent1.inc1};
                                  }
                                `
                              : (props) =>
                                  props.btnStyle === "default-danger"
                                    ? css`
                                        background-color: ${light.default};
                                        color: ${accent1.default};
                                        &:hover {
                                          color: ${accent1.inverse};
                                        }
                                        &:active {
                                          color: ${accent1.dec1};
                                          background-color: ${light.inc2};
                                        }

                                        &:focus {
                                          color: ${accent1.default};
                                          border: 2px solid ${primary.inverse};
                                        }
                                        &:disabled {
                                          cursor: not-allowed;
                                          color: ${accent1.default};
                                        }
                                      `
                                    : (props) =>
                                        props.btnStyle === "success"
                                          ? css`
                                              background-color: ${accent2.default};
                                              color: ${light.default};
                                              &:hover {
                                                background-color: ${accent2.inverse};
                                              }
                                              &:active {
                                                background-color: ${accent2.dec1};
                                              }

                                              &:focus {
                                                background-color: ${accent2.default};
                                                border: 2px solid
                                                  ${primary.inverse};
                                              }
                                              &:disabled {
                                                cursor: not-allowed;
                                                background-color: ${accent2.inc2};
                                                color: ${accent2.inc1};
                                              }
                                            `
                                          : (props) =>
                                              props.btnStyle === "warning"
                                                ? css`
   background-color: ${accent3.default};
   color: ${secondary.default};
           &:hover {
               background-color: ${accent3.inverse};
           }
           &:active {
               background-color: ${accent3.dec1};
           }

           &:focus {
               background-color: ${accent3.default};
               border: 2px solid ${primary.inverse};
           }
           &:disabled {
               cursor: not-allowed;
               color: ${accent3.inc1}
               background-color:${accent3.inc2}; 
           }
   `
                                                : css``}
  // SIZES

   
        ${(props) =>
    props.btnSize === "btn-sm"
      ? css`
          padding: 8px 32px;
          line-height: 16px;
        `
      : (props) =>
          props.btnSize === "btn-md"
            ? css`
                font-size: ${typeScale.paragraph};
                padding: 8px 40px;
                line-height: 24px;
              `
            : (props) =>
                props.btnSize === "btn-lg"
                  ? css`
                      font-size: ${typeScale.header1};
                      padding: 8px 64px;
                      line-height: 48px;
                    `
                  : css`
                      padding: 8px 16px;
                      line-height: 16px;
                    `}

// ICON
${(props) => (props.sizee === "icon" ? css`` : css``)}
`;

export default Button;
