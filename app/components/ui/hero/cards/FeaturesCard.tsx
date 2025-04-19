import Image from "next/image";
import styles from "./featureCard.module.scss";
import Link from "next/link";

type Props = {
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
  imageSrc: string;
  imageAlt: string;
  imgWidth: number;
  imgheight: number;
};

export const FeatureCard = ({
  title,
  description,
  linkText,
  linkHref,
  imageSrc,
  imageAlt,
  imgWidth,
  imgheight,
}: Props) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
      <Link href={linkHref} className={`${styles.link} regular-button`}>
        {linkText}
      </Link>

      <div className={styles.image}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={imgWidth}
          height={imgheight}
          draggable={false}
        />
      </div>
    </div>
  );
};
