import { ReactNode } from "react";

import styles from "./rowReviews.module.scss";

type Props = {
  children: ReactNode;
  direction: "left" | "right";
};

const RowReviews = ({ children, direction }: Props) => {
  return (
    <div className={styles.container}>
      <ul className={`${styles.track} ${styles[direction]}`}>{children}</ul>
    </div>
  );
};

export default RowReviews;
