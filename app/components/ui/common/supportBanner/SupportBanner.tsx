import Link from "next/link";

import styles from "./supportBanner.module.scss";

const SupportBanner = () => {
  return (
    <section className={`container ${styles.container}`}>
      <div className={styles.wrap}>
        <h3 className={styles.title}>Нет подходящего сервера?</h3>
        <p className={styles.description}>
          Напиши нам, наша поддержка работает круглосуточно
        </p>
        <Link href="#" className={`regular-button ${styles.link}`}>
          <span> Перейти</span>
          <svg
            width="17"
            height="16"
            viewBox="0 0 17 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.1553 4.21484L14.0401 8.09964L10.1553 11.9844"
              stroke="white"
              strokeWidth="1.28"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3.15991 8.1001H13.9311"
              stroke="white"
              strokeWidth="1.28"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default SupportBanner;
