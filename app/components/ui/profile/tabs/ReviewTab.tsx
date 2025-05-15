import Link from "next/link";

import { UserReviews } from "@/app/types";

import styles from "./tabs.module.scss";

type Props = {
  reviews: UserReviews[];
};

const ReviewTab = ({ reviews }: Props) => {
  return (
    <div className={styles.reviewsList}>
      {reviews && reviews?.length > 0 ? (
        <ul className={styles.reviewsContainer}>
          {reviews.map((review: any) => (
            <li key={review.id} className={styles.reviewItem}>
              <div className={styles.ratingContainer}>
                {Array.from({ length: review.rating }).map((_, i) => (
                  <span key={i} className={styles.star}>
                    ★
                  </span>
                ))}
              </div>
              <p className={styles.reviewProduct}>{review.comment}</p>
              <Link
                href={`/products/${review.serverId}`}
                className={`regular-button ${styles.reviewToProduct}`}
              >
                К товару
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className={styles.emptyMessage}>Вы еще не оставляли отзывов</p>
      )}
    </div>
  );
};

export default ReviewTab;
