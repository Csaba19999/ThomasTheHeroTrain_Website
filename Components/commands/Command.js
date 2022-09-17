import classes from "./Command.module.css";
import { Fragment, useState } from "react";

function Command(props) {
  const [copyClicked, setCopyClicked] = useState(false);

  let wordCommand = props.command.split(" ");
  let coloredComand = [];
  coloredComand.push(<span  className={classes.fel} style={{ color: "red" }}>{"/"}</span >);
  for (let i = 0; i < wordCommand.length; i++) {
    if (wordCommand[i] === "@username") {
      coloredComand.push(<span  style={{ color: "green" }}>{wordCommand[i]}</span >);
      coloredComand.push(<span>&nbsp;</span>);
    } else if (wordCommand[i] === "YoutubeLink") {
      coloredComand.push(<span  style={{ color: "blue" }}>{wordCommand[i]}</span >);
      coloredComand.push(<span>&nbsp;</span>);
    } else if (wordCommand[i] === "cím") {
      coloredComand.push(<span  style={{ color: "purple" }}>{wordCommand[i]}</span >);
      coloredComand.push(<span>&nbsp;</span>);
    } else if (wordCommand[i] === "sorszám") {
      coloredComand.push(<span  style={{ color: "orange" }}>{wordCommand[i]}</span >);
      coloredComand.push(<span>&nbsp;</span>);
    } else {
      coloredComand.push(<span  style={{ color: "black" }}>{wordCommand[i]}</span >);
      coloredComand.push(<span>&nbsp;</span>);
    }
  }

  const copyToClipboard = () => {
    const copyText = "!"+props.command;
    navigator.clipboard.writeText(copyText);
    setCopyClicked(true);
    setTimeout(() => {
      setCopyClicked(false);
    }, 1000);
  };

  return (
    <Fragment>
      <div className={classes.vagon}>
        <img className={classes.top} src="./img/top.png" />
        <div className={classes.commandBox}>
          <h3>{props.title}</h3>
          <div className={classes.commandBoxSmall}>
            <section>
              <ol className={`${copyClicked && classes.clicked}`}>
                <li>{coloredComand}</li>
              </ol>
              <button className={classes.copy} onClick={copyToClipboard}>
                Másolás
              </button>
            </section>
            <p>{props.description}</p>
          </div>
        </div>
        <img className={classes.train} src="./img/wheels.png" />
      </div>
    </Fragment>
  );
}
export default Command;
