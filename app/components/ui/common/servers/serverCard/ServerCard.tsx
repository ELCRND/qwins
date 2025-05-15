import { memo } from "react";
import Image from "next/image";

import { ProductsType } from "@/app/types";

import styles from "./serverCard.module.scss";
import Tooltip from "../../tolltip/Tooltip";

function getImagePath(type: string, price: number) {
  if (type === "vps") {
    return price < 200
      ? "/vps/vps-server-1.png"
      : price < 400
      ? "/vps/vps-server-2.png"
      : "/vps/vps-server-3.png";
  }

  return price < 200
    ? "/vds/vds-server-1.png"
    : price < 400
    ? "/vds/vds-server-2.png"
    : "/vds/vds-server-3.png";
}

function getImageSize(type: string) {
  if (type === "vps") {
    return { width: 175, height: 135 };
  }

  return { width: 140, height: 152 };
}

type Props = ProductsType & {
  type: string;
  isAuth: boolean;
  isFavorite: boolean;
  onOrderClick?: () => void;
};

const ServerCard = memo(function ServerCard({
  id,
  name,
  cpuModel,
  cpuCores,
  ramGb,
  diskGb,
  isAvailable,
  pricePerMonth,
  type,
  isAuth,
  isFavorite,
  onOrderClick,
}: Props) {
  const imgPath = getImagePath(type, pricePerMonth);

  const { width, height } = getImageSize(type);

  return (
    <article className={`${styles.container} `}>
      <div className={styles.image}>
        <Image
          src={imgPath}
          alt={cpuModel}
          width={width}
          height={height}
          draggable={false}
        />
      </div>
      <h2 className={styles.title}>{name}</h2>
      <dl className={styles.specs}>
        <div className={styles.specRow}>
          <dt>CPU</dt>
          <dd>{cpuModel}</dd>
        </div>
        <div className={styles.specRow}>
          <dt>Кол-во виртуальных ядер</dt>
          <dd>x {cpuCores}</dd>
        </div>
        <div className={styles.specRow}>
          <dt>ОЗУ</dt>
          <dd>{ramGb} ГБ</dd>
        </div>
        <div className={styles.specRow}>
          <dt>Дисковое пространство</dt>
          <dd>{diskGb} ГБ</dd>
        </div>
      </dl>
      <button
        type="button"
        className={`regular-button ${styles.btn}`}
        onClick={onOrderClick}
      >
        Заказать за {pricePerMonth}$ в месяц
      </button>
      <Tooltip serverId={id} isAuth={isAuth} isFavorite={isFavorite} />
    </article>
  );
});

export default ServerCard;
