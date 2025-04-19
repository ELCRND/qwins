import Link from "next/link";
import styles from "./hero.module.scss";
import Image from "next/image";
import { FeatureCard } from "./cards/FeaturesCard";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={`${styles.container} container`}>
        <h1 className={styles.title}>
          Облачные серверы нового поколения для вашего бизнеса
        </h1>
        <p className={styles.description}>
          В 3 раза быстрее обычного хостинга! Выделенные ресурсы, защита от DDoS
          и бесплатная миграция ваших проектов. Неограниченная пропускная
          способность и техподдержка за 2 минуты.
          <br /> Попробуйте и убедитесь сами!
        </p>
        <Link href="/order" className={`${styles.button} regular-button`}>
          Заказать сервера
        </Link>

        <div className={styles.features}>
          <FeatureCard
            title="Выделенные серверы"
            description="Мощные автономные решения с полным контролем, идеально подходящие для крупных бизнес-приложений"
            linkText="Доступные тарифы"
            linkHref="vds"
            imageSrc="/hero/hero-server.png"
            imageAlt="Выделенные серверы"
            imgWidth={200}
            imgheight={251}
          />

          <FeatureCard
            title="Виртуальные серверы"
            description="Экономичное решение на основе виртуализации, обеспечивающее высокую производительность"
            linkText="Доступные тарифы"
            linkHref="vps"
            imageSrc="/hero/hero-virtual-server.png"
            imageAlt="Виртуальные серверы"
            imgWidth={200}
            imgheight={220}
          />
        </div>

        <div className={styles.image}>
          <Image
            src="/hero/hero-img.png"
            alt="Серверы"
            width={519}
            height={658}
            priority
            draggable={false}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
