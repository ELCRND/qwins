import Image from "next/image";

import { equipmentIcon } from "../icons";

import styles from "../common-cards.module.scss";
import animations from "../common-cards-animation.module.scss";

const Equipment = () => {
  return (
    <article className={styles.container}>
      <div className={styles.text}>
        <h2 className={`${styles.title} ${animations["title--show"]}`}>
          Высокопроизводительные решения на базе последних технологий
        </h2>
        <p
          className={`${styles.description} ${animations["description--show"]}`}
        >
          Мы используем серверные платформы последнего поколения, оснащенные
          высокопроизводительными процессорами Intel Xeon Scalable 4-го
          поколения и AMD EPYC с тактовой частотой до 4.4 ГГц, которые работают
          в паре с ультраскоростными NVMe-накопителями Samsung PM1735 емкостью
          до 30 ТБ и поддерживают сетевые подключения 100 Гбит/с на базе
          современных контроллеров Mellanox ConnectX-6 с поддержкой RDMA, что
          обеспечивает минимальные задержки и максимальную пропускную
          способность для любых высоконагруженных задач.
        </p>
        <ul
          className={`${styles.list} ${styles["list-el-3"]} ${animations["list--show"]}`}
        >
          <li className={styles.item}>
            {equipmentIcon.cpu}
            <h3>до 64 ядер и 2TB RAM на сервер</h3>
            <p>
              Мощные процессоры обеспечивают высокую вычислительную
              производительность даже для самых требовательных задач.
            </p>
          </li>
          <li className={styles.item}>
            {equipmentIcon.ssd}
            <h3>Скорость SSD</h3>
            <p>
              Использование высокоскоростных NVMe-накопителей гарантирует
              минимальные задержки ввода-вывода.
            </p>
          </li>
          <li className={styles.item}>
            {equipmentIcon.updates}
            <h3>Регулярное обновление</h3>
            <p>
              Мы постоянно модернизируем наш серверный парк, заменяя
              оборудование каждые 2-3 года.
            </p>
          </li>
        </ul>
      </div>

      <div className={`${styles.image} ${animations["image--show"]}`}>
        <Image
          src={"/about/about-equipment.png"}
          alt="Высокопроизводительные решения"
          width={469}
          height={476}
          draggable={false}
        />
      </div>
    </article>
  );
};

export default Equipment;
