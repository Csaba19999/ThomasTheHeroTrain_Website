import Review from "./Review";
import classes from "./Reviews.module.css";
import { Fragment } from "react";
import Link from "next/link";

function Reviews(props) {
  const { reviews } = props;

  return (
    <Fragment>
      <div className={classes.reviews}>
        <section className={classes.reviewHolder}>
          {reviews.map((review) => (
            <Review
              key={review.id}
              id={review.id}
              name={review.name}
              date={review.date}
              description={review.description}
              rating={review.rating}
              profileImage={review.profileImage}
            />
          ))}
        </section>
      </div>
      <div className={classes.newReviewButton}>
        <Link href={"/NewReview"}>Új értékelés</Link>
      </div>
    </Fragment>
  );
}

export default Reviews;
