import styles from "./accordionItem.module.scss";

type Props = {
  question: string;
  answer: string;
};

const AccordionItem = ({ question, answer }: Props) => {
  return (
    <li className={styles.container}>
      <details name="faq" className={styles.details}>
        <summary className={styles.legend}>
          <h3 className={styles.question}>{question}</h3>
          <div className={styles.mark}></div>
        </summary>
      </details>

      <div className={styles.wrap}>
        <div className={styles.content}>
          <p className={styles.answer}>{answer}</p>
        </div>
      </div>
    </li>
  );
};

export default AccordionItem;
