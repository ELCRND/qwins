import Image from "next/image";
import Banner from "../common/banner/Banner";

import styles from "./vpsBanner.module.scss";

const VpsBanner = () => {
  return (
    <Banner>
      <h1 className={styles.title}>Мощные VPS под любые задачи</h1>
      <Image
        src={"/vps/vps-banner.png"}
        alt="Мощные VPS"
        width={494}
        height={306}
        draggable={false}
        className={styles.img}
      />
    </Banner>
  );
};

export default VpsBanner;
