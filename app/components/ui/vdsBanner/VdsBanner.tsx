import Image from "next/image";
import Banner from "../common/banner/Banner";

import styles from "./vdsBanner.module.scss";

const VdsBanner = () => {
  return (
    <Banner>
      <h1 className={styles.title}>Мощные VDS под любые задачи</h1>
      <Image
        src={"/vds/vds-banner.png"}
        alt="Мощные VPS"
        width={344}
        height={309}
        draggable={false}
        className={styles.img}
      />
    </Banner>
  );
};

export default VdsBanner;
