import { ReactNode } from "react";

import styles from "./banner.module.scss";

const Banner = ({ children }: { children: ReactNode }) => {
  return (
    <div className={`container `}>
      <div className={styles.wrap}>{children}</div>
    </div>
  );
};

export default Banner;
