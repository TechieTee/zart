import React from "react";
import classes from "./InboxItem.module.css";
import caseIcon from '../../../../../assets/icons/case-inbox.svg'
import managementIcon from '../../../../../assets/icons/incidence-inbox.svg'



const iconList = {
'INC':managementIcon,
'CAS':caseIcon

};

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];
export default function InboxItem({mail}) {
 
//  console.log(mail.id.substring(0,3))
 
    const formatDate = (date) => {
    let mailDate = new Date(date * 1000);
    let presentDate = new Date().setHours(0, 0, 0, 0);
    let tempMailDate = new Date(date * 1000).setHours(0, 0, 0, 0);
    // console.log(tempMailDate,presentDate)
    if (presentDate === tempMailDate) {
      return mailDate.toLocaleTimeString().replace(/(.*)\D\d+/, "$1");
    }

    return `${monthNames[mailDate.getMonth()]} ${mailDate.getDay()}`;
  };

  return (
    <li className={classes.inboxMessage}>
        <dl className={classes.dl}>
        <dt className={classes.inboxText}><span style={{paddingRight:'6px'}}><img  src={iconList[mail.id.substring(0,3)]} alt="inboxIcon" height={20} /></span><span>{mail.id}</span></dt>
        <dd className={classes.dd}>shared With You</dd>
        </dl>
      <time className={classes.timeStamp}>{formatDate(mail.timeStamp)}</time>
    </li>
  );
}
