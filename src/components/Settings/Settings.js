import React, { useState, useRef } from "react";
import classes from "./Settings.module.css";
import { Tab } from "../UI/Tab/Tab";
import UsbDeviceIcon from "../assets/icons/usb-device-icon.svg";
import DeviceSettings from "./DeviceSettings/DeviceSettings";
import styled from "styled-components"

const StatusWrapper = styled.div`
    height: ${props => props.height || "200px"};
`;

const Settings = (props) => {
  const {
    deviceConfig: {faceConfig, irisConfig, printConfig},
    isDeviceLoading
  } = props;
  const [tabSettings, setTabSettings] = useState({
    tab1: {
      id: "device-settings",
      value: <img src={UsbDeviceIcon} alt="usb-device-icon" />,
    },
    tab2: {
      id: "",
      value: "",
    },
  });


  const [currentTab, setCurrentTab] = useState("device-settings");

  const toggleTab = (tab) => {
    console.log("toggled " + tab);
    setCurrentTab(tab);
  };




  return (
    <>
      <div className={classes.ModalOverlay}></div>
      <div className={classes.ModalContent}>
        <div className={["row", classes.Modal].join(" ")}>
          <div className="col-md-12">
            <div className={["row", classes.Tab].join(" ")}>
              <div className={["row", classes.Header].join(" ")}>
                <div className="col-md-12">
                  <p>Settings</p>
                  <span onClick={props.closeSetting}>&#x2716;</span>
                </div>
              </div>
              <div className="col-md-12" style={{ padding: "0px" }}>
                <Tab
                  currentTab={currentTab}
                  settings={tabSettings}
                  toggleTab={(id) => toggleTab(id)}
                >
                  <div
                    className={[
                      "tab-pane",
                      "fade",
                      "show",
                      currentTab === "device-settings" ? "active" : "",
                    ].join(" ")}
                    id=""
                    role="tabpanel"
                    aria-labelledby="device-settings"
                  >
                    <div className={classes.Devices} style={{WebkitBoxShadow: 'inset rgb(100 124 155 / 30%) 0px 2px 9px'}}>
                      
                        {isDeviceLoading ? 
                        <StatusWrapper>
                          <p className="mt-5 mb-4 text-center">Loading...</p>
                        </StatusWrapper>
                        :
                        
                        <DeviceSettings
                          faceConfig={faceConfig}
                          irisConfig={irisConfig}
                          PrintConfig={printConfig}
                        />
                          }
                    </div>
                  </div>
                  <div
                    className={[
                      "tab-pane",
                      "fade",
                      "show",
                      currentTab === "past" ? "active" : "",
                    ].join(" ")}
                    id=""
                    role="tabpanel"
                    aria-labelledby="past-tab"
                  >
                    Next
                  </div>
                </Tab>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
