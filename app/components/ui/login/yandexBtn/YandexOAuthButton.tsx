import styles from "./yandexOAuthButton.module.scss";

export default function YandexOAuthButton() {
  const handleClick = () => {
    // Здесь будет логика авторизации через Яндекс
    window.location.href = `${process.env.NEXT_PUBLIC_SERVER_URL}/oauth/yandex`;
  };

  return (
    <button
      className={`${styles.oauthButton} ${styles.yandex}`}
      onClick={handleClick}
      type="button"
    >
      Войти через Яндекс
    </button>
  );
}
