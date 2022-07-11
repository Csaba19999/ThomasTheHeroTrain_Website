import NewReviewForm from "../../Components/review/NewReviewForm";
import classes from "./NewReview.module.css";

function NewReview() {
    return (
        <div className={classes.newReview}>
            <h1>Új értékelés</h1>
            <NewReviewForm />
        </div>
    );
}

export default NewReview;