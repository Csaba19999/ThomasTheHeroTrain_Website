import classes from "./Review.module.css";

function Review(props) {
  return (
    <div className={classes.review}>
      <div className={classes.image}>
        <img
          src={props.profileImage}
          alt={"profileImg_"+props.name}
        />
      </div>
      <h4 className={classes.userName}>{props.name}</h4>
      <p className={classes.userDescription}>{props.description}</p>
      <span className={classes.date}>{props.date}</span>
      <p className={classes.score}>
        <span>{props.rating}/5</span>
      </p>
    </div>
  );
}

export default Review;
