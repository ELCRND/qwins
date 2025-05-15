import { ReactNode } from "react";

import styles from "./advants.module.scss";

const Advants = ({ children }: { children: ReactNode }) => {
  return (
    <div className={`container ${styles.container}`}>
      <h2 className={styles.title}>Преимущества наших серверов</h2>
      <div className={styles.wrap}>{children}</div>
    </div>
  );
};

export default Advants;
