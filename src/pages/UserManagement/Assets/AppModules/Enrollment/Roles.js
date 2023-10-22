import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styled, { css } from "styled-components";
// import Table from "@components/Admin/UI/Table/Table";
import Button from '../../../../../components/UI/Button/Button';
import DialogModal from "../../../../../components/UI/Modal/DialogModal/index";
const RoleText = styled.div`
  display: block;
  width: fit-content;

  span {
    color: #505f79;
    width: fit-content;
  }
  a {
    &:hover {
      text-decoration: underline;
      width: fit-content;
    }
  }

  p {
    margin: 0;
    height: 25px;
    width: fit-content;
  }
  p {
    :first-child {
      color: #193b68;
      width: fit-content;
    }
    :last-child {
      color: #505f79;
      width: fit-content;
    }
  }
`;

const PermissionLabel = styled.div`
  background: #f4f5f7;
  border-radius: 3px;
  display: inline-block;
  padding: 5px 9px;
  color: #505f79;
`;

const usersColumns = [
  {
    Header: "Assets",
    accessor: "asset_name",
    disableFilters: true,
    style: {
      width: "20%",
    },
  },
  {
    Header: "Roles",
    accessor: "roles",
    disableFilters: true,
  },
];

const tableData = [
  {
    id: 1,
    asset_name: <PermissionLabel>Zone 1: View</PermissionLabel>,
    roles: (
      <RoleText>
        <Link to={"/usermanagement/edit-role-permission/enrollment/" + 1}>
          <p>Enrollment - Zone 1</p>
        </Link>
      </RoleText>
    ),
  },

  {
    id: 2,
    asset_name: <PermissionLabel>Zone 2: View</PermissionLabel>,
    roles: (
      <RoleText>
        <Link to={"/usermanagement/edit-role-permission/enrollment/" + 1}>
          <p>Enrollment - Zone 2</p>
        </Link>
      </RoleText>
    ),
  },
  {
    id: 3,
    asset_name: <PermissionLabel>Zone 3: View</PermissionLabel>,
    roles: (
      <RoleText>
        <Link to={"/usermanagement/edit-role-permission/enrollment/" + 1}>
          <p>Enrollment - Zone 3</p>
        </Link>
      </RoleText>
    ),
  },
  {
    id: 4,
    asset_name: <PermissionLabel>Lagos: View</PermissionLabel>,
    roles: (
      <RoleText>
        <Link to={"/usermanagement/edit-role-permission/enrollment/" + 1}>
          <span>Enrollment - Lagos Div3</span>
        </Link>{" "}
        ,{" "}
        <Link to={"/usermanagement/edit-role-permission/enrollment/" + 1}>
          <span>Enrollment - Lagos Div3</span>
        </Link>
      </RoleText>
    ),
  },
];

function EnrollmentAssets(props) {
  const [assetModal, setAssetModal] = useState(false);
  const [data, setData] = useState(tableData);

  const AssetModalHandler = () => {
    setAssetModal(!assetModal);
  };
  const closeModal = () => {
    setAssetModal(false);
  };

  const actionButton = [
    {
      id: 23,
      className: "mr-3",
      btnStyle: "danger",
      btnSize: "btn-sm",
      children: "Delete",
    },
    {
      id: 223,
      btnStyle: "default",
      btnSize: "btn-sm",
      children: "Cancel",
      clicked: closeModal,
    },
  ];

  const rowConfig = [
    {
      type: "warning",
      clickHandler: AssetModalHandler,
      tooltipText: "",
      content: (
        <Button
          btnSize="btn-sm"
          btnStyle="danger"
          clicked={props.deleteUsers}
          style={{
            color: "#DE350B",
            background: "#F8D7CE",
            marginTop: "-10px",
          }}
        >
          Delete
        </Button>
      ),
      styles: { padding: "4px 0" },
    },
  ];

  return (
    <div>
      {/* <Table
        pageSize={5}
        actionIconConfig={rowConfig}
        filterRequired={false}
        sortingRequired={false}
        searchRequired={true}
        searchPlaceholder="Search"
        columnReordering={false}
        paginationRequired={true}
        tableColumns={usersColumns}
        tableData={tableData}
        selectionRequired={false}
        dataReRender={true}
        rowDeletionRequired={false}
      /> */}

      <DialogModal
        isOpen={assetModal}
        iconStyle={"error"}
        modalSize={"sm"}
        actionButton={actionButton}
        toggleModal={AssetModalHandler}
        ModalTitle={
          <h3 style={{ color: "#193B68", fontSize: "25px" }}>Delete Asset</h3>
        }
      >
        {" "}
        <DeleteAssetModal />
      </DialogModal>
    </div>
  );
}
export default EnrollmentAssets;

const DeleteAssetContent = styled.div`
  span {
    color: #42526e;
    font-weight: 500;
  }
`;

const DeleteAssetModal = () => {
  return (
    <DeleteAssetContent>
      Asset would be deleted from the following Roles
      <ul>
        <li>
          {" "}
          <span>Enrollment</span>-Lagos Div2,
        </li>
        <li>
          {" "}
          <span>Enrollment</span>-Lagos Div3
        </li>
      </ul>
    </DeleteAssetContent>
  );
};
