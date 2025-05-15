import Image from "next/image";

import Advants from "../common/advants/Advants";
import AdvantsLeftColumn from "../common/advants/AdvantsLeftColumn";
import AdvantsRightColumn from "../common/advants/AdvantsRightColumn";

import styles from "./vdsAdvants.module.scss";

const VdsAdvant = () => {
  return (
    <Advants>
      <AdvantsLeftColumn>
        <div className={styles.l_item_1}>
          <h3>Выделенный IP-адрес и подсеть</h3>
          <p>
            Возможность получить статический IP или целую подсеть IPv4/IPv6 для
            организации сложной сетевой инфраструктуры, VPN-решений или хостинга
            множества проектов с уникальными адресами.
          </p>
        </div>
        <div className={styles.l_item_2}>
          <h3>Производительность уровня dedicated</h3>
          <p>
            Мощные процессоры (Intel Xeon/ AMD EPYC) и быстрая SSD-память
            обеспечивают обработку ресурсоемких задач: 1С, CRM, игровые серверы.
          </p>
          <Image
            src={"/vds/vds-advants-performance.png"}
            alt="NVMe-диски"
            width={241}
            height={240}
            draggable={false}
          />
        </div>
      </AdvantsLeftColumn>

      <AdvantsRightColumn>
        <div className={styles.r_item_1}>
          <h3>Выделенные физические ресурсы</h3>
          <p>Фиксированные CPU/RAM без "соседей" на железе.</p>
          <Image
            src={"/vds/vds-advants-resources.png"}
            alt="шаблоны развертывания"
            width={186}
            height={130}
            draggable={false}
          />
        </div>
        <div className={styles.r_item_2}>
          <h3>Встроенная защита</h3>
          <p>Автоматическая фильтрация DDoS-атак.</p>
        </div>
        <div className={styles.r_item_3}>
          <h3>Свобода настройки</h3>
          <p>Установка своей ОС и тонкая оптимизация.</p>
        </div>
        <div className={styles.r_item_4}>
          <h3>Круглосуточный контроль</h3>
          <p>
            Система отслеживает нагрузку, температурные режимы и сетевую
            активность, предупреждая о возможных сбоях заранее.
          </p>
          <svg
            width="171"
            height="223"
            viewBox="0 0 171 223"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M94.8889 1L1 185.8H85.5L76.1111 309L170 124.2H85.5L94.8889 1Z"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </AdvantsRightColumn>
    </Advants>
  );
};

export default VdsAdvant;
