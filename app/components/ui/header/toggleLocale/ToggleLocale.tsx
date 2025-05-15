"use client";
import { ReactNode, useState } from "react";

import { localeOptions } from "./data";

import styles from "./toggleLocale.module.scss";

const ToggleLocale = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState(localeOptions[0].flag);

  const changeLocale = (flag: ReactNode) => {
    setIsOpen(false);
    setValue(flag);
  };
  return (
    <div className={styles.container}>
      <button onClick={() => setIsOpen((p) => !p)} className={styles.btn}>
        {value}
      </button>
      <ul className={`${styles.list} ${isOpen ? styles.open : ""}`}>
        {localeOptions.map((option) => (
          <li
            key={option.value}
            onClick={() => changeLocale(option.flag)}
            className={styles.localeRu}
          >
            {option.flag}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToggleLocale;
