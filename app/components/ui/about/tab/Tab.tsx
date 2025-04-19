import styles from "./tab.module.scss";

type Props = {
  name: string;
  icon: React.ReactNode;
  isActive: boolean;
  handler: VoidFunction;
};

const Tab = ({ name, icon, isActive, handler }: Props) => {
  return (
    <button
      onClick={handler}
      aria-current={isActive}
      className={`${styles.container} ${isActive ? styles.active : false}`}
    >
      {icon}
      <p>{name}</p>
    </button>
  );
};

export default Tab;
