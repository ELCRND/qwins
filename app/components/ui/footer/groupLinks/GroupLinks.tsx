import { ReactNode } from "react";
import styles from "./groupLinks.module.scss";
import Link from "next/link";

type Props = {
  title: string;
  links: {
    name: string;
    path: string;
  }[];
};

const GroupLinks = ({ title, links }: Props) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <ul className={styles.list}>
        {links.map((l, i) => (
          <li key={l.path + i}>
            <Link href={l.path}>{l.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GroupLinks;
