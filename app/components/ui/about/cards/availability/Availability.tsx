import Image from "next/image";

import { availabilityIcon } from "../icons";

import styles from "../common-cards.module.scss";
import animations from "../common-cards-animation.module.scss";

const Availability = () => {
  return (
    <article className={styles.container}>
      <div className={styles.text}>
        <h2 className={`${styles.title} ${animations["title--show"]}`}>
          Гарантированная доступность инфраструктуры с резервными каналами
        </h2>
        <p
          className={`${styles.description} ${animations["description--show"]}`}
        >
          Мы обеспечиваем бесперебойную работу благодаря дублированию сетевых
          маршрутов и автоматическому переключению на резервное оборудование при
          любых сбоях.
        </p>
        <ul
          className={`${styles.list} ${styles["list-el-3"]} ${animations["list--show"]}`}
        >
          <li className={styles.item}>
            {availabilityIcon.sla}
            <h3>SLA 99.99%</h3>
            <p>
              Юридически закреплённые гарантии доступности ваших сервисов. Мы
              несём ответственность за бесперебойную работу вашего проекта.
            </p>
          </li>
          <li className={styles.item}>
            {availabilityIcon.recovery}
            <h3>Мгновенное восстановление</h3>
            <p>
              Автоматический переход на резервные мощности при любых неполадках.
              Ваши пользователи даже не заметят сбоев в работе.
            </p>
          </li>
          <li className={styles.item}>
            {availabilityIcon.danger}
            <h3>Прогноз нагрузок</h3>
            <p>
              Система заранее выделяет дополнительные ресурсы при обнаружении
              роста трафика, предотвращая возможные перегрузки.
            </p>
          </li>
        </ul>
      </div>

      <div className={`${styles.image} ${animations["image--show"]}`}>
        <Image
          src={"/about/about-availability.png"}
          alt="Гарантированная доступность"
          width={497}
          height={505}
          draggable={false}
        />
      </div>
    </article>
  );
};

export default Availability;
