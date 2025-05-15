import Image from "next/image";
import Advants from "../common/advants/Advants";
import AdvantsLeftColumn from "../common/advants/AdvantsLeftColumn";
import AdvantsRightColumn from "../common/advants/AdvantsRightColumn";

import styles from "./vpsAdvants.module.scss";

const VpsAdvant = () => {
  return (
    <Advants>
      <AdvantsLeftColumn>
        <div className={styles.l_item_1}>
          <h3>Готовые шаблоны развертывания</h3>
          <p>
            Мгновенная установка популярных CMS, серверных панелей и готовых
            окружений в один клик для быстрого старта проектов без ручной
            настройки.
          </p>
          <Image
            src={"/vps/vps-advants-templates.png"}
            alt="шаблоны развертывания"
            width={326}
            height={114}
            draggable={false}
          />
        </div>
        <div className={styles.l_item_2}>
          <h3>Высокоскоростные NVMe-диски</h3>
          <p>
            SSD-накопители с минимальной задержкой (0.1 мс) и высокой скоростью
            чтения/записи (до 3,500 МБ/с), что ускоряет работу приложений и баз
            данных.
          </p>
          <Image
            src={"/vps/vps-advants-NVMe.png"}
            alt="NVMe-диски"
            width={385}
            height={195}
            draggable={false}
          />
        </div>
      </AdvantsLeftColumn>

      <AdvantsRightColumn>
        <div className={styles.r_item_1}>
          <h3>Гарантированные CPU, RAM и SSD без общего использования</h3>
        </div>
        <div className={styles.r_item_2}>
          <h3>Гибкость</h3>
          <p>Масштабирование мощности в пару кликов без перезагрузки</p>
          <svg
            width="280"
            height="167"
            viewBox="0 0 280 167"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M-6 167L30.607 129.131C41.7599 117.593 60.6307 118.941 70.0306 131.946V131.946C79.5757 145.153 98.8268 146.299 109.872 134.319L125.039 117.869C136.793 105.121 158.053 111.223 161.256 128.265V128.265C163.712 141.327 177.495 148.885 189.829 143.934L207.174 136.97C220.118 131.774 223.541 115.041 213.678 105.178V105.178C201.968 93.4677 209.324 73.4128 225.83 72.0525L252.002 69.8954C265.561 68.778 276.67 58.677 279.068 45.2858L287 1"
              stroke="white"
            />
          </svg>
        </div>
        <div className={styles.r_item_3}>
          <h3>Автобэкапы</h3>
          <p>Регулярное резервное копирование с простым восстановлением</p>
        </div>
        <div className={styles.r_item_4}>
          <h3>Полный контроль</h3>
          <p>
            Свободная установка любого ПО, настройка серверного окружения и
            управление параметрами безопасности
          </p>
          <Image
            src={"/vps/vps-advants-control.png"}
            alt="NVMe-диски"
            width={230}
            height={234}
            draggable={false}
          />
        </div>
      </AdvantsRightColumn>
    </Advants>
  );
};

export default VpsAdvant;
