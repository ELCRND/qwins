import styles from "./googleOAuthButton.module.scss";

export default function GoogleOAuthButton() {
  const handleClick = () => {
    const authWindow = window.open(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/auth/oauth/google`
    );
  };

  return (
    <button
      className={`${styles.oauthButton} ${styles.google}`}
      onClick={handleClick}
      type="button"
    >
      Войти через Google
    </button>
  );
}
