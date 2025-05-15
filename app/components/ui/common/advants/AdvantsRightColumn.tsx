import { ReactNode } from "react";

import styles from "./advants.module.scss";

const AdvantsRightColumn = ({ children }: { children: ReactNode }) => {
  return <div className={styles.right}>{children}</div>;
};

export default AdvantsRightColumn;
