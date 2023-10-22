import React, { useState }  from 'react'
import styled from 'styled-components';
// import { Tab } from "@components/UI/Tab/Tab";
import EnrollmentAssets from './Roles';

const TabHeader = styled.p`
    font-size: 21px;
    margin: 0px 25px;
`

function RA_Enrollment(props) {

    const [tabSettings, setTabSettings] = useState({
        tab1: {
          id: "roles",
          value: <TabHeader>Roles</TabHeader>,
        },
        tab2: {
          id: "assets",
          value: <TabHeader>Assets</TabHeader>,
        },
      });
    
    const [currentTab, setCurrentTab] = useState("roles");

    const toggleTab = (tab) => setCurrentTab(tab);

    return (
        <section>
            <div className="row">
                <div className="col-md-12">
                <EnrollmentAssets {...props} />
                {/* <Tab
                  currentTab={currentTab}
                  settings={tabSettings}
                  toggleTab={(id) => toggleTab(id)}
                >
                  <div
                    className={[
                      "tab-pane",
                      "fade",
                      "show",
                      currentTab === "roles" ? "active" : "",
                    ].join(" ")}
                    id=""
                    role="tabpanel"
                    aria-labelledby="roles"
                  >
                    
                  </div>
                  <div
                    className={[
                      "tab-pane",
                      "fade",
                      "show",
                      currentTab === "assets" ? "active" : "",
                    ].join(" ")}
                    id=""
                    role="tabpanel"
                    aria-labelledby="assets"
                  >
                    
                  </div>
                </Tab> */}
                </div>
            </div>
        </section>
    )
}


export default RA_Enrollment

