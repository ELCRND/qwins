import Image from "next/image";

import { performanceIcon } from "../icons";

import styles from "../common-cards.module.scss";
import animations from "../common-cards-animation.module.scss";

const Performance = () => {
  return (
    <article className={styles.container}>
      <div className={styles.text}>
        <h2 className={`${styles.title} ${animations["title--show"]}`}>
          Комплексный подход к безопасности и надежности
        </h2>
        <p
          className={`${styles.description} ${animations["description--show"]}`}
        >
          Мы реализовали географически распределенную инфраструктуру с
          автоматической репликацией данных между тремя независимыми
          дата-центрами уровня Tier III+, где каждые 60 минут создаются
          инкрементные бэкапы с возможностью восстановления на любую точку
          времени, а все передаваемые и хранимые данные защищены многоуровневой
          системой шифрования, включающей AES-256 для хранилищ, TLS 1.3 для
          трафика и индивидуальные ключи доступа для каждого клиента
        </p>
        <ul
          className={`${styles.list} ${styles["list-el-2"]} ${animations["list--show"]}`}
        >
          <li className={styles.item}>
            {performanceIcon.cod}
            <h3>Репликация между ЦОД</h3>
            <p>
              Ваши данные автоматически реплицируются между несколькими
              географически распределенными дата-центрами. Это обеспечивает
              защиту от региональных сбоев, стихийных бедствий и других
              масштабных инцидентов, которые могут повлиять на работу отдельного
              дата-центра
            </p>
          </li>
          <li className={styles.item}>
            {performanceIcon.control}
            <h3>Контроль физического доступа</h3>
            <p>
              Наши дата-центры оборудованы многоуровневыми системами
              безопасности, включая биометрическую идентификацию, круглосуточное
              видеонаблюдение и вооруженную охрану.
            </p>
          </li>
        </ul>
      </div>

      <div className={`${styles.image} ${animations["image--show"]}`}>
        <Image
          src={"/about/about-performance.png"}
          alt="Комплексный подход"
          width={476}
          height={434}
          draggable={false}
        />
      </div>
    </article>
  );
};

export default Performance;
