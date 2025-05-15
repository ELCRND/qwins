"use client";
import { UserType } from "@/app/types";

import styles from "./tabs.module.scss";
import { useRouter } from "next/navigation";

type Props = {
  user: UserType | null;
};

const ProfileTab = ({ user }: Props) => {
  const router = useRouter();
  return (
    <div className={styles.profileInfo}>
      <div className={styles.infoItem}>
        <h3 className={styles.infoLabel}>Имя пользователя</h3>
        <p className={styles.infoValue}>{user?.username || "Не указано"}</p>
      </div>
      <div className={styles.infoItem}>
        <h3 className={styles.infoLabel}>Email</h3>
        <p className={styles.infoValue}>{user?.email}</p>
      </div>
      <button
        onClick={() => router.push("/profile/edit")}
        className={`regular-button ${styles.editButton}`}
      >
        Редактировать профиль
      </button>
    </div>
  );
};

export default ProfileTab;
