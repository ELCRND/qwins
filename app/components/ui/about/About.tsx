"use client";
import Tab from "./tab/Tab";
import Cards from "./cards/Cards";

import { tabs } from "./data";

import styles from "./about.module.scss";
import { useState } from "react";
import Image from "next/image";

const About = () => {
  const [currentCard, setCurrentCard] = useState(tabs[2].tabName);

  return (
    <section className={styles.about}>
      <div className={`container ${styles.container}`}>
        <h2 className={styles.title}>Почему нас выбирают</h2>

        <div className={`${styles.tabs}`}>
          {tabs.map((tab) => (
            <Tab
              key={tab.tabName}
              name={tab.name}
              icon={tab.icon}
              isActive={tab.tabName === currentCard}
              handler={() => {
                setCurrentCard(tab.tabName);
              }}
            />
          ))}
        </div>

        <Cards currentCard={currentCard} />

        <Image
          src={"/about/about-bg-top.png"}
          alt="decoration"
          width={571}
          height={574}
          className={styles.decorationTop}
        />
        <Image
          src={"/about/about-bg-bottom.png"}
          alt="decoration"
          width={662}
          height={659}
          className={styles.decorationBottom}
        />
      </div>
    </section>
  );
};

export default About;
