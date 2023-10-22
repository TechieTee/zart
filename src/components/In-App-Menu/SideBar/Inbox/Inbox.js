import React from "react";
import InboxItem from './InboxItem/InboxItem'
import inboxIcon from "../../../../assets/icons/menu-inbox.svg";
import closeButton from "../../../../assets/icons/close-button.svg";
import classes from "./Inbox.module.css";


let mails = [
    {
        id:'CAS/NPF/A/1236',
        timeStamp:"1614727813",
        link:''

    },
    {
        id:'INC/NPF/A/1236',
        timeStamp:"1343253600000",
        link:''
 
    },
    {
        id:'CAS/NPF/A/1236',
        timeStamp:"1614724282990",
        link:''
    }
]


export default function Inbox({messageList,handleSideBarDrawer}) {
    // const [inbox,setInbox ] = useState(messageList)

  return (
    <div className={classes.inbox}>
      <div className={classes.inboxHeader}>
        <div className={classes.inboxHeaderMain}>
          <img src={inboxIcon} alt="inbox-icon" />
          <h5 className={classes.inboxText}>Inbox </h5>
        </div>

        <div className={classes.closebutton} onClick={handleSideBarDrawer}>
            <img    src={closeButton}  alt={'inbox-close-button'} height={30}/>
        </div>
      </div>


      <ul className={classes.inboxList}>
        {      mails.map((mail,index)=><React.Fragment key={index}><InboxItem mail={mail} /></React.Fragment>)}
      </ul>
    </div>
  );
}