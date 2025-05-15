"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { useAuth } from "@/app/store/auth-store";

import GoogleOAuthButton from "./googleBtn/GoogleOAuthButton";
import YandexOAuthButton from "./yandexBtn/YandexOAuthButton";

import { AuthRequestType } from "@/app/types";

import styles from "./login.module.scss";

const loginSchema = z.object({
  email: z.string().email("Некорректный email"),
  password: z.string().min(6, "Пароль должен быть не менее 6 символов"),
});

const registerSchema = loginSchema
  .extend({
    name: z.string().min(2, "Имя должно быть не менее 2 символов"),
    passwordRepeat: z.string(),
  })
  .refine((data) => data.password === data.passwordRepeat, {
    message: "Пароли не совпадают",
    path: ["passwordRepeat"],
  });

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const { isLoading, login, register } = useAuth();

  const {
    register: registerForm,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<AuthRequestType>({
    resolver: zodResolver(isLogin ? loginSchema : registerSchema),
  });

  const onSubmit = async (data: AuthRequestType) => {
    if (isLoading) return;

    isLogin ? await login(data) : await register(data);

    reset();
  };

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
    reset();
  };

  return (
    <section className={styles.login}>
      <div className={`container  ${styles.container}`}>
        <div className={styles.wrap}>
          <h1 className={styles.title}>{isLogin ? "Вход" : "Регистрация"}</h1>

          <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            {!isLogin && (
              <label htmlFor="name" className={styles.password}>
                <span>Имя пользователя</span>
                <input id="name" type="text" {...registerForm("name")} />
                {"name" in errors && (
                  <span className={styles.error}>{errors.name?.message}</span>
                )}
              </label>
            )}

            <label htmlFor="email" className={styles.email}>
              <span>Email</span>
              <input id="email" type="email" {...registerForm("email")} />
              {errors.email && (
                <span className={styles.error}>{errors.email.message}</span>
              )}
            </label>

            <label htmlFor="password" className={styles.password}>
              <span>Пароль</span>
              <input
                id="password"
                type="password"
                {...registerForm("password")}
              />
              {errors.password && (
                <span className={styles.error}>{errors.password.message}</span>
              )}
            </label>

            {!isLogin && (
              <label htmlFor="passwordRepeat" className={styles.password}>
                <span>Подтверждение пароля</span>
                <input
                  id="passwordRepeat"
                  type="password"
                  {...registerForm("passwordRepeat")}
                />
                {"passwordRepeat" in errors && (
                  <span className={styles.error}>
                    {errors.passwordRepeat?.message}
                  </span>
                )}
              </label>
            )}

            <button
              className={`regular-button ${styles.submit}`}
              type="submit"
              disabled={isLoading}
            >
              {isLoading
                ? "Подождите..."
                : isLogin
                ? "Войти"
                : "Зарегистрироваться"}
            </button>
          </form>

          <div className={styles.divider}>или</div>

          <div className={styles.oauthButtons}>
            <GoogleOAuthButton />
            <YandexOAuthButton />
          </div>

          <div className={styles.togglerForm}>
            <button type="button" onClick={toggleAuthMode} disabled={isLoading}>
              {isLogin
                ? "Нет аккаунта? Зарегистрироваться"
                : "Уже есть аккаунт? Войти"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
