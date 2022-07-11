import classes from "./Commands.module.css";
import CommandsList from "../../Components/commands/CommandsList";

function Commands() {
  return (
    <div className={classes.commandsBox}>
      <h1>Parancsok</h1>
      <div className={classes.parancsok}>
        <CommandsList />
      </div>
    </div>
  );
}

export default Commands;
