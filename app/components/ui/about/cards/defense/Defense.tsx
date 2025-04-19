import Image from "next/image";

import { defenseIcon } from "../icons";

import styles from "../common-cards.module.scss";
import animations from "../common-cards-animation.module.scss";

const Defense = () => {
  return (
    <article className={styles.container}>
      <div className={styles.text}>
        <h2 className={`${styles.title} ${animations["title--show"]}`}>
          Профессиональный комплекс защиты корпоративного уровня для вашего
          бизнеса
        </h2>
        <p
          className={`${styles.description} ${animations["description--show"]}`}
        >
          Наша защитная система в режиме реального времени обнаруживает и
          блокирует более 20 видов DDoS-атак, включая SYN-флуды,
          UDP-амплификации и HTTP-флуды. Автоматизированные алгоритмы
          адаптируются к новым угрозам без вмешательства администратора.
        </p>
        <ul
          className={`${styles.list} ${styles["list-el-2"]} ${animations["list--show"]}`}
        >
          <li className={styles.item}>
            {defenseIcon.defense}
            <h3>Защита до 2 Тбит/с</h3>
            <p>
              Отражение самых мощных DDoS-атак без снижения производительности
              вашего сервера. Наша система справляется даже с самыми сложными
              распределёнными атаками, сохраняя работоспособность вашего проекта
            </p>
          </li>
          <li className={styles.item}>
            {defenseIcon.filtration}
            <h3>Адаптивная фильтрация</h3>
            <p>
              Интеллектуальная система постоянно обучается и автоматически
              подстраивается под новые типы угроз. Вам не нужно беспокоиться о
              ручных настройках — защита работает "из коробки".
            </p>
          </li>
        </ul>
      </div>

      <div className={`${styles.image} ${animations["image--show"]}`}>
        <Image
          src={"/about/about-defense.png"}
          alt="Профессиональный комплекс защиты"
          width={454}
          height={505}
          draggable={false}
        />
      </div>
    </article>
  );
};

export default Defense;
