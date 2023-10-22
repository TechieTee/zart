import React from "react";
import classes from "./ProfileSummaryCard.module.css";
import ProfileLabel from "./ProfileLabel/ProfileLabel";

export const ProfileSummaryCard = ({ type, contentObj }) => {
  const {
    name,
    // profileimage,
    profileInitials,
    status,
    email,
    roles,
    usersCount,
    zone,
    state,
    stationId,
    userid,
    groupid,
    address,
    members,
    description,
    activityTime,
    rank,
  } = contentObj;

  return (
    <div className={classes.container}>
      <div className={classes.row1}>
        <div className={classes.profileImg}>
          <div className={classes.FirstLetter}>
            <h1>{profileInitials}</h1>
          </div>
        </div>
        <div className={classes.profileBio}>
          <h3> {type !== "group" ? name : `${name} - ${state}`}</h3>
          {type !== "group" ? <h4>{rank}</h4> : <h4>{description}</h4>}
          <h6>{type !== "group" ? userid : groupid}</h6>
          <ProfileLabel type={type} status={status} />
        </div>
      </div>
      <div className={classes.row2}>
        {type === "group" && (
          <div className={classes.ccH2}>
            <h5 className={classes.subHeader}>Members</h5>
            <div className={classes.content}>{members}</div>
          </div>
        )}
        <div className={classes.ccH}>
          <h5 className={classes.subHeader}>Email</h5>
          <div className={classes.content}>{email}</div>
        </div>
        <div className={classes.ccH}>
          <h5 className={classes.subHeader}>Station ID</h5>
          <div className={classes.content}>{stationId}</div>
        </div>
        <div className={classes.ccH}>
          <div className={classes.content} style={{ fontSize: "12px" }}>
            {address}
          </div>
        </div>
      </div>

      {/* <div className={classes.row3}>
        <div>
          <h5 className={classes.subHeader}>Zone</h5>
          <div className={classes.content}>{zone}</div>
        </div>
        <div>
          <h5 className={classes.subHeader}>State</h5>
          <div className={classes.content}>{state}</div>
        </div>
        <div>
          <h5 className={classes.subHeader}>Area</h5>
          <div className={classes.content}>{area}</div>
        </div>
        <div>
          <h5 className={classes.subHeader}>Division</h5>
          <div className={classes.content}>{division}</div>
        </div>
      </div> */}

      {type !== "group" ? (
        <div className={classes.cardFooter}>
          <hr
            style={{
              borderTop: "1px solid rgba(25, 59, 104, 0.5)",
              width: "100%",
            }}
          />
          <div>
            <span>Last activity: </span>
            <span>{activityTime}</span>
          </div>
        </div>
      ) : null}
    </div>
  );
};
