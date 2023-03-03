import styles from "./Rating.module.scss";
import { useState } from "react";

export default function Rating() {
  const [selectedRating, setSelectedRating] = useState<number>();
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleSelectedRating(rating: number) {
    setSelectedRating(rating);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsSubmitted(true);
  }

  return isSubmitted ? (
    <div>
      <div className={styles.container}>
        <div className={styles.panel}>
          <div className={styles.thanksPanel}>
            <img
              className={styles.thanksImage}
              src="./illustration-thank-you.svg"
              alt=""
            />
            <h5 className={styles.selectedRating}>
              You selected {selectedRating} out 5
            </h5>
            <h1 className={styles.thanks}>Thank you!</h1>
            <p className={styles.thanksText}>
              We appreciate you taking the time to give a rating. If you ever
              need more support, don't hesitate to get in touch
            </p>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className={styles.container}>
      <form className={styles.panel} onSubmit={handleSubmit}>
        <img className={styles.star} src="/icon-star.svg" alt="" />
        <h1>How did we do?</h1>
        <p>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
        <div className={styles.buttons}>
          {[1, 2, 3, 4, 5].map(rating => (
            <button type="button" onClick={() => handleSelectedRating(rating)}>
              {rating}
            </button>
          ))}
        </div>
        <button
          disabled={selectedRating === undefined}
          type="submit"
          className={styles.submit}
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
}
