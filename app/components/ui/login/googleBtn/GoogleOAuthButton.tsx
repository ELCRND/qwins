import styles from "./googleOAuthButton.module.scss";

export default function GoogleOAuthButton({
  isDisabled,
}: {
  isDisabled: boolean;
}) {
  const handleClick = () => {
    window.location.href = `${process.env.NEXT_PUBLIC_SERVER_URL}/auth/oauth/google`;
  };

  return (
    <button
      className={`${styles.oauthButton} ${styles.google}`}
      onClick={handleClick}
      type="button"
      disabled={isDisabled}
    >
      Войти через Google
    </button>
  );
}
