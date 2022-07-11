import { Fragment } from "react";
import { useRef, useState } from "react";
import classes from "./Rating.module.css";

function Rating(props) {
  const ratingRef = useRef(null);
  const [rating, setRating] = useState(4.5);

  const handleChange = () => {
    const ratingValue = ratingRef.current.value;
    setRating(ratingValue);
    props.onSet(ratingValue);
  }

  return (
    <Fragment>
      <div className={classes.rating}>
        <span>{`${rating}/5`}</span>
        <input onChange={handleChange} ref={ratingRef} type="range" min="1" max="5" step="0.1" defaultValue={rating} />
      </div>
    </Fragment>
  );
}

export default Rating;
