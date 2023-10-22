import React, { useState} from "react";
import { Tab } from "../../../components/UI/Tab/Tab";
// import Table from "@components/Admin/UI/Table/Table";
import Groups from "../../../assets/icons/groups-icon.svg";

import styled, { css } from "styled-components";
import { Link } from "react-router-dom";


import principalsService from "@shared/hooks/api/usePrincipalsService";
import {TableLoader} from '@shared/in-app-components/SkeletonLoaders';


// GROUPS COLUMNS
const groupColumns = [
  {
    Header: "Full Name",
    accessor: "full_name",
    disableFilters: true,
  },
  {
    Header: "Email",
    accessor: "email",
  },
  {
    Header: "Members",
    accessor: "members",
  },
  {
    Header: "Description",
    accessor: "description",
  },
];

// USER COLUMNS
const usersColumns = [
  {
    Header: "Full Name",
    accessor: "full_name",
    disableFilters: true,
  },
  {
    Header: "Email",
    accessor: "email",
  },
  {
    Header: "Role",
    accessor: "role",
  },
  {
    Header: "Status",
    accessor: "status",
  },
  {
    Header: "Station ID",
    accessor: "station_id",
  },
];

// TAB TITLE
export const TabTitle = ({ title, icon }) => {
  return (
    <div style={{ display: "flex", marginRight: "10px" }}>
      {" "}
      <img src={Groups} alt="icon" style={{ marginRight: "5px" }} /> {title}
    </div>
  );
};

const UserManagement = () => {
  // TAB SETTINGS
  const [tabSettings, ] = useState({
    tab1: {
      id: "Groups",
      value: <TabTitle title="Groups" icon={"Groups"} />,
    },
    tab2: {
      id: "Users",
      value: <TabTitle title="Users" icon={"Users"} />,
    },
  });
  const [currentTab, setCurrentTab] = useState("Groups");
  const toggleTab = (tab) => {
    setCurrentTab(tab);
  };




  const {data, isError, isLoading } = principalsService.useFetchPrincipals();

  if(isLoading){
    return <TableLoader/>
  }

  if(isError){
    return "Error Occured"
  }

  
  const genericData = data?.map((item, index) => {
    const transformObject = {
      id: item.principal.principalId,
      full_name: item.principal.name,
      email: item.principal.email,
      members: "-",
      gender: "-",
      role: item.roles[0].name,
      status: item.principal.active,
      station_id: "---",
      description: item.roles[0].description,
      group: item.principal.group,
    };
  return transformObject;
  
});
  let groupData = []
  let userData = []
  if(data.length!== 0){
     groupData = genericData?.filter((item) => item.group === true)
      userData = genericData?.filter((item) => item.group === false).map((item) =>{

      return {
        ...item,
        full_name:  <TextBlock title={item.full_name}><Link to={"/usermanagement/userx/" + item.id}>{item.full_name}</Link></TextBlock>,
        email: <TextBlock title={item.email}>{item.email}</TextBlock>,
        status: item.status ? (
          <StatusComponent status="active">Active</StatusComponent>
        ) : (
          <StatusComponent status="inactive">Inactive</StatusComponent>
        ),
        user_name: (
          <Link to={"/usermanagement/userx/" + item.id}>{item.user_name}</Link>
        ),
      };
    });
      };
  
      console.log({genericData})

  return (
    <>
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
              currentTab === "Groups" ? "active" : "",
            ].join(" ")}
            id=""
            role="tabpanel"
            aria-labelledby="upcoming-tab"
          >
            <div>
              <div className="row">
                <div className="col-md-12">
                  {/* <Table
                    pageSize={30}
                    tableColumns={groupColumns}
                    tableData={groupData}
                    filterRequired={false}
                    sortingRequired={false}
                    searchRequired={true}
                    searchPlaceholder="Search group"
                    columnReordering={true}
                    paginationRequired={false}
                    dataReRender={true}
                  /> */}
                </div>
              </div>
            </div>
          </div>
          <div
            className={[
              "tab-pane",
              "fade",
              "show",
              currentTab === "Users" ? "active" : "",
            ].join(" ")}
            id=""
            role="tabpanel"
            aria-labelledby="past-tab"
          >
            <div>
              <div className="row">
                <div className="col-md-12">
                  {/* <Table
                    pageSize={6}
                    tableColumns={usersColumns}
                    tableData={userData}
                    filterRequired={false}
                    sortingRequired={false}
                    searchRequired={true}
                    searchPlaceholder="Search user"
                    columnReordering={true}
                    paginationRequired={false}
                    dataReRender
                  /> */}
                </div>
              </div>
            </div>
          </div>
        </Tab>
      </div>
    </>
  );
};


const TextBlock = styled.span`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin:0;
    display:block;
`

const StatusComponent = styled.div`
  padding: 0px 7px;
  border-radius: 4px;
  width: fit-content;

  ${(props) =>
    props.status === "active"
      ? css`
          background: #eafbf1;
          color: #27b360;
        `
      : (props) =>
          props.status === "inactive"
            ? css`
                background: #fff6e6;
                color: #e69502;
              `
            : (props) =>
                props.status === "suspended"
                  ? css`
                      background: #f0f2f6;
                      color: #6780a2;
                    `
                  : css`
                      background: none;
                      color: #fff;
                    `}
`;

export default UserManagement;
