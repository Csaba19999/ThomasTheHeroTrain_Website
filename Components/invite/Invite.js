import classes from "./Invite.module.css";
import { useState } from "react";
function Invite(){

  const [copyClicked, setCopyClicked] = useState(false);
  const copyText = "https://discord.com/api/oauth2/authorize?client_id=830753364466991125&permissions=545393212912&scope=bot";

  const copyToClipboardHandeler = () => {
    navigator.clipboard.writeText(copyText);
    setCopyClicked(true);
    setTimeout(() => {
      setCopyClicked(false);
    }
    , 1000);
  }

    return(
        <div className={classes.thomasInvite}>
          <div id="inviteLink" className={`${classes.thomasLink} ${copyClicked && classes.clicked}`}>{copyText}</div>
          <button onClick={copyToClipboardHandeler} className={classes.copy}>Másolás</button>
        </div>
    );
}

export default Invite;