import React from "react";
import NavIconLink from "./NavIconLink";
import classes from "./NavIcon.module.css";

export default function NavIcon({ iconDetails, sideBarDrawer }) {
  const { to, icon, tooltip } = iconDetails;

  if (tooltip !== "Inbox") return <NavIconLink iconDetails={iconDetails} />;

  return (
    <>
      <div className={classes.iconcontainer} onClick={sideBarDrawer}>
        {
          <div to={to}>
            <span className={classes.iconContent}>
              <img
                src={icon}
                alt={tooltip}
                height={30}
                className={classes.icon}
              />
            </span>
            {tooltip && <span className={classes.tooltip}>{tooltip}</span>}
          </div>
        }
      </div>
    </>
  );
}