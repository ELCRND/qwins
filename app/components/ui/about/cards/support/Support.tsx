import Image from "next/image";

import { supportIcon } from "../icons";

import styles from "../common-cards.module.scss";
import animations from "../common-cards-animation.module.scss";

const Support = () => {
  return (
    <article className={styles.container}>
      <div className={styles.text}>
        <h2 className={`${styles.title} ${animations["title--show"]}`}>
          Профессиональная помощь от сертифицированных инженеров
        </h2>
        <p
          className={`${styles.description} ${animations["description--show"]}`}
        >
          Наша служба поддержки, состоящая из сертифицированных инженеров с
          опытом работы от 5 лет, обеспечивает круглосуточную техническую
          поддержку 365 дней в году через многоканальную систему коммуникации
        </p>
        <ul
          className={`${styles.list} ${styles["list-el-2"]} ${animations["list--show"]}`}
        >
          <li className={styles.item}>
            {supportIcon.support}
            <h3>Поддержка 365/24/7</h3>
            <p>
              Наши специалисты работают круглосуточно, без выходных и
              праздников. Независимо от времени суток и вашего часового пояса,
              вы всегда можете рассчитывать на оперативную профессиональную
              помощь.
            </p>
          </li>
          <li className={styles.item}>
            {supportIcon.expertise}
            <h3>Глубокая экспертиза</h3>
            <p>
              В нашей команде работают сертифицированные инженеры с многолетним
              опытом решения сложных технических задач. Мы помогаем не только с
              базовыми вопросами, но и с тонкой настройкой, оптимизацией
              производительности и решением нестандартных проблем.
            </p>
          </li>
        </ul>
      </div>

      <div className={`${styles.image} ${animations["image--show"]}`}>
        <Image
          src={"/about/about-support.png"}
          alt="Профессиональная помощь"
          width={402}
          height={427}
          draggable={false}
        />
      </div>
    </article>
  );
};

export default Support;
