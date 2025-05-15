import GroupLinks from "./groupLinks/GroupLinks";

import styles from "./footer.module.scss";
import Logo from "../common/Logo";
import Link from "next/link";
import Image from "next/image";

const data = [
  {
    title: "Услуги",
    links: [
      {
        name: "Виртуальные серверы",
        path: "",
      },
      {
        name: "Виртуальный хостинг",
        path: "",
      },
      {
        name: "Выделенные серверы",
        path: "",
      },
    ],
  },
  {
    title: "Контакты",
    links: [
      {
        name: "help@qwins.co",
        path: "",
      },
      {
        name: "Поддержка в Telegram",
        path: "",
      },
      {
        name: "Бот в Telegram для заказа услуг",
        path: "",
      },
    ],
  },
  {
    title: "Социальные сети",
    links: [
      {
        name: "Telegram",
        path: "",
      },
      {
        name: "VK",
        path: "",
      },
    ],
  },
  {
    title: "Информация",
    links: [
      {
        name: "База знаний",
        path: "",
      },
      {
        name: "О дата-центре",
        path: "",
      },
      {
        name: "Состояние доступности услуг",
        path: "",
      },
    ],
  },
];

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <div className={styles.top}>
          {data.map((el) => (
            <GroupLinks key={el.title} title={el.title} links={el.links} />
          ))}
        </div>

        <div className={styles.bottom}>
          <div className={styles.logo}>
            <Logo />
          </div>

          <div className={styles.legal}>
            <p className={styles.copyright}>
              QWINS LTD. Company number: 16072422 Все права защищены
            </p>
            <Link href={""}>Условия предоставления услуг</Link>
            <Link href={""}>Политика конфиденциальности</Link>
          </div>

          <div className={styles.payments}>
            <Image
              src={"/footer/visa-logo.svg"}
              alt="visa"
              width={49}
              height={20}
            />
            <Image
              src={"/footer/mir-logo.svg"}
              alt="mir"
              width={49}
              height={13}
            />
            <Image
              src={"/footer/masterCard-logo.svg"}
              alt="master card"
              width={41}
              height={24}
            />
            <Image
              src={"/footer/ethereumClassic-logo.svg"}
              alt="ethereum classic"
              width={15}
              height={24}
            />
            <Image
              src={"/footer/bitcoin-logo.svg"}
              alt="bitcoin"
              width={25}
              height={24}
            />
            <Image
              src={"/footer/zcash-logo.svg"}
              alt="zcash"
              width={25}
              height={24}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
