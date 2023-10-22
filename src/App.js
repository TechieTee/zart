import React, { useEffect, useState, lazy, Suspense } from "react";

import { Switch, Route, Redirect } from "react-router";
import { RouteGuard } from "./config/Route";
import { DeviceRestriction } from "./components/DeviceRestriction/DeviceRestriction";
// import Node from "./pages/ControlPanel/Nodes/index";
import { Layout } from "./Layout/Layout";
// import { Table } from '../src/components/Admin/UI/Table/Table'
import dashboardIcon from "./assets/icons/dashboard-icon.svg";
import assetIcon from "./assets/icons/users-icon.svg";
import deskTopIcon from "./assets/icons/users-icon.svg";
import userManagementIcon from "./assets/icons/user-management.svg";
import rolesIcon from "./assets/icons/role-icon.svg";

// import AppModuleUrlChecker from './shared/hoc/AppModuleUrlChecker';

const Dashboard = lazy(() => import("./pages/Dashboard"));
// const UserManagement = lazy(() =>
//   import("./pages/UserManagement/UserManagement/UserManagement")
// );
// const UserX = lazy(() => import("./pages/UserManagement/UserManagement/Userx"));
// const GroupX = lazy(() =>
//   import("./pages/UserManagement/UserManagement/GroupX")
// );
// const RolesAndPermissions = lazy(() =>
//   import("./pages/UserManagement/Roles_N_Permissions")
// );
// const Assets = lazy(() => import("./pages/UserManagement/Assets"));
// // const RoleX = lazy(() => import('./pages/UserManagement/Roles_N_Permissions/RoleX/RoleX'));
// // const RoleXPage = AppModuleUrlChecker(RoleX);
// const RoleXPage = lazy(() =>
//   import("./pages/UserManagement/Roles_N_Permissions/RoleX/RoleX")
// );

const routes = [
  {
    path: "/",
    exact: true,
    component: Dashboard,
    guarded: false,
  },
  // {
  //   path: "/usermanagement",
  //   exact: true,
  //   component: UserManagement,
  //   guarded: false,
  // },
  // {
  //   path: "/usermanagement/userx/:id",
  //   component: UserX,
  //   guarded: false,
  // },

  // {
  //   path: "/usermanagement/groupx/:id",
  //   component: GroupX,
  //   guarded: false,
  // },
  // {
  //   path: "/roles-permissions",
  //   component: RolesAndPermissions,
  //   guarded: false,
  //   exact: true,
  // },
  // {
  //   path: "/usermanagement/assets",
  //   component: Assets,
  //   guarded: false,
  // },
  // {
  //   path: "/roles-permissions/create/:id",
  //   render: (props) => <RoleXPage {...props} />,
  //   guarded: false,
  // },
  // {
  //   path: "/roles-permissions/edit/:id",
  //   render: (props) => <RoleXPage {...props} />,
  //   guarded: false,
  //   exact: true,
  // },
  // {
  //   path: "/usermanagement/edit-role",
  //   exact: true,
  //   component: EditRole,
  //   guarded: false,
  // },

  // {
  //   path: "/controlpanel/node",
  //   component: Node,
  //   guarded: false,
  // },
];


const links = {
  "header": {
    icon: "",
    text: "Switch Module",
    subText: "Payroll Management",

    sublinks: [{
      text: "System Administration",
      to: "#"
    }, {
      text: "People Management",
      to: "#"
    }, {
      text: "Payroll Management",
      to: "#"
    },
    {
      text: "Self Service",
      to: "#"
    },

    ]
  },
  "primary": [
    {
      text: "Dashboard",
      icon: "",
      to: "#"
    },
    {
      text: "Payroll Activities",
      icon: "",
      sublinks: [
        {
          text: "Payroll run",
          to: "#"

        },
        {
          text: "Payroll Reversal",
          to: "#"
        },
        {
          text: "Payroll History",
          to: "#"
        },
        {
          text: "Payroll Lock",
          to: "#"
        },
        {
          text: "Enable Payslip",
          to: "#"
        },

        {
          text: "Payroll log",
          to: "#"
        },
        {
          text: "Payroll Approval",
          to: "#"
        },

      ]

    },
    {
      text: "Salary Structure",
      icon: "",
      to: "#"

    },
    {
      text: "Element Setup",
      icon: "",
      subLink: [
        {
          text: "Elements",
          to: "/"
        },
        {
          text: "Balance",
          to: "#"
        }
      ]
    },
    {
      text: "Employees",
      icon: "",
      to: "#"
    },
  ],
  "secondary": [{
    text: "Payroll Settings",
    sublinks: [
      {
        text: "Payroll Option",
        to: "#"
      }, {
        text: "Deduction Acccount Setup"
        ,
        to: "#"
      },
      {
        text: "Variation Portal Period",
        to: "#"
      }, {
        text: "Paygroup Setup",
        to: "#"
      }
    ]
  }, {
    text: "My Account",
    icon: "",
    to: "#"
  }
    , {
    text: "Logout",
    icon: "",
    to: "#"
  }
  ]
}

export const App = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const updateState = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateState);

    return () => {
      window.removeEventListener("resize", updateState);
    };
  }, []);

  let TempLoader = (
    <div className="row justify-content-center vh-100">
      <h4>Loading...</h4>
    </div>
  );

  if (width > 1200) {
    return (
      <Layout links={links}>
        <Suspense fallback={TempLoader}>
          <Switch>
            {routes.map((route, i) =>
              route.guarded ? (
                <RouteGuard key={i} {...route} />
              ) : (
                <Route key={i} {...route} />
              )
            )}
            <Redirect
              to={{
                pathname: "/",
                state: {
                  from: "/",
                },
              }}
            ></Redirect>
          </Switch>
        </Suspense>
      </Layout>
    );
  } else {
    return <DeviceRestriction />;
  }
};
export default App;