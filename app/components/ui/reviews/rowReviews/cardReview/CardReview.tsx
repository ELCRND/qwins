import Image from "next/image";
import { TypeReview } from "../../Reviews";

import styles from "./cardReview.module.scss";

const CardReview = ({ review }: { review: TypeReview }) => {
  return (
    <li className={styles.container}>
      <div className={styles.wrap}>
        <Image
          src={"reviews/review-icon.svg"}
          alt="like"
          width={18}
          height={18}
        />
        <h3 className={styles.title}>{review.author}</h3>
        <span className={styles.date}>{review.date}</span>
      </div>

      <p className={styles.text}>{review.text}</p>
    </li>
  );
};

export default CardReview;
