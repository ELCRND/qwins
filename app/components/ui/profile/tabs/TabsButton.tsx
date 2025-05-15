import styles from "./tabs.module.scss";

type Props = {
  text: string;
  value: string;
  isActive: boolean;
  handleClick: (v: string) => void;
};

const TabsButton = ({ text, value, isActive, handleClick }: Props) => {
  return (
    <button
      onClick={() => handleClick(value)}
      className={`${styles.tabButton} ${isActive ? styles.activeTab : ""}`}
    >
      {text}
    </button>
  );
};

export default TabsButton;
