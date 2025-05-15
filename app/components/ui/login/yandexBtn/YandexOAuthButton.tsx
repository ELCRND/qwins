import styles from "./yandexOAuthButton.module.scss";

export default function YandexOAuthButton({
  isDisabled,
}: {
  isDisabled: boolean;
}) {
  const handleClick = () => {
    window.location.href = `${process.env.NEXT_PUBLIC_SERVER_URL}/oauth/yandex`;
  };

  return (
    <button
      className={`${styles.oauthButton} ${styles.yandex}`}
      onClick={handleClick}
      type="button"
      disabled={isDisabled}
    >
      Войти через Яндекс
    </button>
  );
}
