import Link from "next/link";
import Logo from "../common/Logo";
import styles from "./header.module.scss";
import ToggleLocale from "./toggleLocale/ToggleLocale";
import ToggleTheme from "./toggleTheme/ToggleTheme";
import AuthBtn from "./authBtn/AuthBtn";

const data = [
  {
    text: "Выделенные сервера",
    path: "/vps",
  },
  {
    text: "Виртуальные сервера",
    path: "/vds",
  },
  {
    text: "Реферальная система",
    path: "/",
  },
  {
    text: "База знаний",
    path: "/",
  },
];

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.container}`}>
        <div className={styles.wrap}>
          <Logo type="gradient" />

          <nav className={styles.navigation}>
            <ul>
              {data.map((l, i) => (
                <Link key={i} href={l.path}>
                  {l.text}
                </Link>
              ))}
            </ul>
          </nav>

          <ToggleTheme />
          <ToggleLocale />
          <AuthBtn />
        </div>
      </div>
    </header>
  );
};

export default Header;
