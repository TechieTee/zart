
import React, { useState } from "react";
import { ProfileSummaryCard } from "../../../components/Admin/ProfileSummaryCard/ProfileSummaryCard";
//import profileImg from "../../../assets/images/police-officer-img.png";
import editIcon from "../../../assets/icons/edit-icon.svg";
import { NavLink } from "react-router-dom";
import backArrow from "../../../assets/icons/arrow-left.svg";
import classes from "./UserManagement.module.css";
import Button from "../../../components/UI/Button/Button";
// import Table from "@components/Admin/UI/Table/Table";
// import { ADMINCONSOLE } from "src/config/ContentType";
// import { ApiEndpoints } from "src/config/Endpoints";
// import { SERVER_REQUEST } from "src/shared/Backend";
import { useParams } from "react-router-dom";
// import { GET } from "src/config/HTTP_Methods";
// import { profileimg } from '@assets/icons/display-picture.svg';
import  principalsService from '@shared/hooks/api/usePrincipalsService';

const GroupX = (props) => {
  const { id } = useParams();
  const [editState, setEditState] = useState(false);
  const groupColumns = [
    {
      Header: <b>Role</b>,
      accessor: "name",
      disableFilters: true,
      style: {
        width: "250px",
      },
    },
    {
      Header: (
        <>
          <span className="mr-3">Description & Permssions</span>
          <Button
            className=""
            btnSize="btn-sm"
            btnStyle="secondary-1-grey"
            clicked={() => setEditState((prevState) => !prevState)}
            style={{ background: "#fff" }}
          >
            <img alt="editicon" src={editIcon} />
            Edit
          </Button>
        </>
      ),
      accessor: "description",
    },
  ];


  const {
    data:principal, 
    isError, 
    isLoading 
  } = principalsService.useFetchPrincipalById(id, {
    staleTime:1000
  });

  if(isLoading){
    return "Loading...."
  }

  if(isError){
    return "Unable to fetch data"
  }

  const principalDetail = principal[0];
  const roleData = principal[0]?.roles?.map((item) => item);
  const namedata = principal[0]?.principalName;
  const name = String(namedata);
  const profileimg = name[0];



  
  return (
    <>
      <div className="mt-0 mb-5">
        <div>
          <NavLink to="/usermanagement">
            <img src={backArrow} alt="back" />
            Back
          </NavLink>
        </div>
      </div>
      <div className="container-fluid m-0 p-0">
        <div className="row m-0">
          <div className="col-xl-5">
            <ProfileSummaryCard
         
              type="group"
              contentObj={{
                name: principalDetail.principalName,
                profileInitials: profileimg,
                status:
                  principalDetail.active === true
                    ? "administrator"
                    : principalDetail.status === false
                    ? "administrator"
                    : "",
                email: principalDetail.email,
                roles: "------",
                usersCount: "------",
                zone: "----",
                state: "------",
                area: "-----",
                division: "------",
              }}
            />
          </div>
          <div className="col-md-7">
            <div className={classes.row1}>
              <h4>Member Of</h4>
              <div>
                <span>----------</span>
              </div>
            </div>

            <div className="mt-5">
              {/* <Table
                pageSize={3}
                tableColumns={groupColumns}
                tableData={roleData || []}
                filterRequired={false}
                sortingRequired={false}
                searchRequired={false}
                searchPlaceholder="Search group"
                columnReordering={false}
                paginationRequired={false}
                dataReRender={true}
              /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GroupX;
