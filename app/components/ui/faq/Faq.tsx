import AccordionItem from "./accordionItem/AccordionItem";
import Cta from "./cta/Cta";
import styles from "./faq.module.scss";

const data = [
  {
    id: "01",
    question: "Какой сервер выбрать: виртуальный или выделенный?",
    answer:
      "Виртуальный сервер (VPS) предоставляет выделенную часть ресурсов физического сервера с гарантированной производительностью, что оптимально для большинства веб-проектов, включая корпоративные сайты, интернет-магазины и системы управления контентом. Выделенный сервер предлагает эксклюзивный доступ ко всем ресурсам физического оборудования и рекомендуется для высоконагруженных проектов, таких как игровые серверы, сложные вычисления и обработка больших данных, где требуется максимальная производительность и полный контроль над оборудованием.",
  },
  {
    id: "02",
    question: "Какие меры безопасности предусмотрены?",
    answer:
      "Наши серверы защищены многоуровневой системой безопасности, включающей автоматическую защиту от DDoS-атак мощностью до 2 Тбит/с, которая работает круглосуточно без необходимости дополнительной настройки. Виртуализация KVM обеспечивает полную изоляцию серверов, исключая влияние соседних виртуальных машин. Дополнительно доступны услуги резервного копирования данных по запросу с возможностью восстановления на определенную точку времени.",
  },
  {
    id: "03",
    question: "Как быстро активируется сервер после оплаты?",
    answer:
      "Виртуальные серверы (VPS) активируются автоматически в течение нескольких минут после оплаты, позволяя сразу приступить к работе. Выделенные серверы требуют физической подготовки оборудования и настраиваются в течение 1-2 часов после оформления заказа. В обоих случаях вы получаете полный доступ к серверу сразу после завершения процесса активации.",
  },
  {
    id: "04",
    question: "Можно ли изменить конфигурацию сервера после покупки?",
    answer:
      "Для виртуальных серверов (VPS) доступно масштабирование ресурсов (CPU, RAM, дискового пространства) в любой момент без перезагрузки сервера и простоев в работе. Выделенные серверы также поддерживают апгрейд оборудования, но для физической замены компонентов может потребоваться кратковременная остановка сервера (обычно не более 15-30 минут). ",
  },
  {
    id: "05",
    question: "Предусмотрен ли возврат средств?",
    answer:
      "Мы предоставляем возврат средств в случае, если сервер не соответствует заявленным техническим характеристикам или не подходит для ваших задач. Исключение составляют специальные промотарифы RZ-1 и G-1, на которые не распространяется политика возврата средств. Возврат осуществляется в течение 3 рабочих дней после подачи запро",
  },
];

const Faq = () => {
  return (
    <section className={styles.faq}>
      <div className={`container ${styles.container}`}>
        <div className={styles.wrap}>
          <h2 className={styles.title}>
            Ответы на <b>частозадаваемые</b> вопросы
          </h2>

          <p className={styles.description}>
            В этом разделе мы постарались максимально подробно ответить на
            вопросы, которые чаще всего возникают у наших клиентов при выборе
            тарифа, настройке сервера или решении технических задач
          </p>

          <ul className={styles.list}>
            {data.map((el) => (
              <AccordionItem
                key={el.id}
                question={el.question}
                answer={el.answer}
              />
            ))}
          </ul>

          <Cta />
        </div>
      </div>
    </section>
  );
};

export default Faq;
