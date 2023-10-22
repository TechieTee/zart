import React from "react";
import Button from "./../UI/Button/Button";
import deleteIcon from "../assets/icons/delete-icon.svg";
import styled, { css } from "styled-components";

const ImageOverlay = styled.div`
  justify-content: center;
  align-items: center;
  background: #eb575736;
  cursor: pointer;
  border-radius: 5px;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9;
  display: none;
`;

const PrintDeleteOverlay = styled.div`
  justify-content: center;
  align-items: flex-end;
  background: #eb575736;
  cursor: pointer;
  border-radius: 5px;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9;
  display: none;
`;

const UnavailableOverlay = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  text-align: center !important;
  background: rgba(235, 87, 87, 0.9);
  cursor: pointer;
  border-radius: 5px;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9;
`;

const ShowMarkedContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(235, 87, 87, 0.9);
  text-align: center;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9;

  ${(props) =>
    props.sidebar &&
    css`
      background: #e6aba3 !important;
    `}

  ${(props) =>
    props.printUnavailable &&
    css`
      background: #f1d8d5;
      color: #ee7869;
      margin: auto;
    `}

z-index: 2;
  cursor: pointer;
  border-radius: 5px;
`;

const CapturePrintContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  border: 1.5px solid #18a0fb;
  text-align: center;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9;

  ${(props) => props.printStatus && css``}

  z-index: 2;
  cursor: pointer;
  border-radius: 5px;
`;

const SubParentWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  cursor: pointer;
  overflow: hidden;
`;

const ParentWrapper = styled.div`
  ${(props) =>
    (props.deleteWrapper &&
      css`
        &:hover ${ImageOverlay} {
          display: flex;
        }
      `) ||
    (props.mark &&
      css`
        &:hover ${UnavailableOverlay} {
          display: flex;
        }
      `) ||
    (props.printDeleteWrapper &&
      css`
        &:hover ${PrintDeleteOverlay} {
          display: flex;
        }
      `)}
`;

const printDesc = {
  marginTop: "-12px",
  fontSize: "12px",
  background: "#FFF",
  color: "rgb(24, 160, 251)",
  padding: "0px 10px",
  textTransform: "capitalize",
};
const printDesc2 = {
  marginTop: "-10px",
  fontSize: "12px",
  background: "#FFF",
  color: "rgb(24, 160, 251)",
  padding: "0px 10px",
  textTransform: "capitalize",
};

const print = {
  background: "#EFEFEF",
  opacity: "0.5",
  borderRadius: "5px",
  height: "70%",
  width: "90%",
  margin: "3px",
};
const print2 = {
  background: "#C4C4C4",
  opacity: "0.5",
  borderRadius: "5px",
  height: "100%",
  width: "92%",
  margin: "3px",
};

const cancelMark = {
  border: "none",
  outline: "none",
  color: "rgba(225, 225, 225, 0.8)",
  background: "transparent",
};
const cancelPrintMark = {
  border: "none",
  outline: "none",
  color: "#EE7869",
  background: "transparent",
};

const sideBarText = { color: " rgba(235, 87, 87, 0.9)", margin: "auto" };
const printButton = { margin: "5px 0", padding: "10px 26px" };
const printButton2 = {
  margin: "5px 0",
  width: "94%",
  fontSize: "14px",
  padding: "10px",
};
const printStatusButtonText = { fontSize: "12px" };
const printImageDeleteButton = {
  width: "100%",
  textAlign: "center",
  padding: "11px 0px",
  borderRadius: "5px",
};
const innerPrint = {
  background: "#D6D6D6",
  /* opacity: 0.5; */
  borderRadius: "5px",
  height: "57%",
  width: " 68%",
  textAlign: "center",
  margin: "21px auto",
};

const markTypeStyle = {
  fontSize: "27px",
  color: "#fff",
};

const alignCenter = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const ImageWrapper = (props) => (
  <>
    <ParentWrapper
      deleteWrapper={props.deleteWrapper}
      printDeleteWrapper={props.printDeleteWrapper}
      mark={props.mark}
    >
      <SubParentWrapper>{props.children}</SubParentWrapper>

      {/* Delete Wrapper */}
      {props.deleteWrapper && (
        <ImageOverlay className={props.id + "overlay-container"}>
          <Button
            clicked={props.delete}
            btnStyle="danger"
            btnSize="btn-md"
            type="submit"
          >
            <img className="ml-4" src={deleteIcon} alt="icon-delete" /> Delete
          </Button>
        </ImageOverlay>
      )}

      {/* Delete Wrapper */}
      {props.printDeleteWrapper && (
        <PrintDeleteOverlay className={props.id + "printDelete-container"}>
          <Button
            clicked={props.deletePrintImage}
            style={printImageDeleteButton}
            btnStyle="danger"
            btnSize="btn-md"
            type="submit"
          >
            {" "}
            {props.printDeleteWrapperIcon ? (
              <img src={deleteIcon} alt="icon-delete" />
            ) : (
              "Delete"
            )}
          </Button>
        </PrintDeleteOverlay>
      )}

      {/* Hover to mark */}
      {props.mark && (
        <UnavailableOverlay className={props.id + "unavailable-container"}>
          {props.markType === 1 ? (
            <h5
              onClick={props.initiateMark}
              style={{ color: "#fff", fontSize: "16px" }}
            >
              Mark as Unavailable
            </h5>
          ) : (
            <h5 style={markTypeStyle} onClick={props.initiateMark}>
              &#215;
            </h5>
          )}
        </UnavailableOverlay>
      )}

      {/* Marked as unavailable */}
      {props.showMark && (
        <ShowMarkedContainer
          sidebar={props.sidebar}
          printUnavailable={props.printUnavailable}
          className={props.id + "unavailable-container"}
        >
          {props.sidebar ? (
            <h3 style={sideBarText}>&#215;</h3>
          ) : props.printUnavailable ? (
            <>
              <div>
                <div style={alignCenter}>
                  <h5
                    style={{ fontSize: "27px" }}
                    onClick={props.cancelPrintMark}
                  >
                    &#215;
                  </h5>
                </div>
                {props.printUnavailableType !== 1 ? (
                  <>
                    <br />
                    <br />
                    <button
                      onClick={props.cancelPrintMark}
                      style={cancelPrintMark}
                    >
                      Cancel
                    </button>
                  </>
                ) : null}
              </div>
            </>
          ) : (
            <>
              <div>
                <h5 onClick={props.clicked} style={{ color: "#fff" }}>
                  Marked as Unavailable
                </h5>
                <br />
                <br />
                <button onClick={props.cancelMark} style={cancelMark}>
                  Cancel
                </button>
              </div>
            </>
          )}
        </ShowMarkedContainer>
      )}

      {/* Toggle Print Capture */}
      {props.CapturePrint && (
        <CapturePrintContainer
          printStatus={props.printStatus}
          className={props.id + "unavailable-container"}
        >
          {props.printStatus ? (
            <>
              <div style={props.singleCapture ? printDesc2 : printDesc}>
                {props.printDesc}
              </div>
              <div
                onClick={props.toggleSingleMode}
                style={props.singleCapture ? print2 : print}
              >
                {props.printMode === 1 && <div style={innerPrint}></div>}
              </div>
              <Button
                btnStyle="danger"
                disabled={true}
                btnSize="btn-sm"
                style={
                  props.singleCapture
                    ? {
                        ...printButton,
                        cursor: "not-allowed",
                        padding: "11px 38px !important",
                        margin: "5px 0",
                      }
                    : printButton2
                }
                type="submit"
              >
                <h6 style={{ ...printStatusButtonText, margin: 0 }}>
                  Unavailable
                </h6>
              </Button>
            </>
          ) : (
            <>
              <div style={props.singleCapture ? printDesc2 : printDesc}>
                {props.printDesc}
              </div>
              <div
                onClick={props.toggleSingleMode}
                style={props.singleCapture ? print2 : print}
              >
                {props.printMode === 1 && <div style={innerPrint}></div>}
              </div>
              <Button
                clicked={!props.isCaptured ? props.capture : null}
                disabled={props.isLoading || props.isCaptured}
                btnStyle="primary"
                btnSize="btn-sm"
                type="submit"
                style={printButton2}
              >
                {props.captureText
                  ? props.captureText
                  : props.isLoading
                  ? "Capturing..."
                  : props.isCaptured
                  ? "Captured"
                  : "Capture"}
              </Button>
            </>
          )}
        </CapturePrintContainer>
      )}
    </ParentWrapper>
  </>
);

export default ImageWrapper;
