import { ReactNode } from "react";

import styles from "./advants.module.scss";

const AdvantsLeftColumn = ({ children }: { children: ReactNode }) => {
  return <div className={styles.left}>{children}</div>;
};

export default AdvantsLeftColumn;
