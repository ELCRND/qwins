"use client";

import Link from "next/link";

import { useAuth } from "@/app/store/auth-store";

import styles from "./authBtn.module.scss";

const AuthBtn = () => {
  const { isAuth, isLoading } = useAuth();
  return (
    <Link
      href={isAuth ? "/profile" : "/login"}
      className={`${styles.authBtn} ${isLoading ? styles.disabled : ""}`}
      aria-disabled={isLoading}
      onClick={(e) => isLoading && e.preventDefault()}
    >
      {isLoading ? "Загрузка..." : isAuth ? "Профиль" : "Войти"}
    </Link>
  );
};

export default AuthBtn;
