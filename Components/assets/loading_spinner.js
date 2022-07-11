import classes from "./loading_spinner.module.css";

function LoadingSpinner() {
  return (
    <div className={classes.ldsring}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default LoadingSpinner;
