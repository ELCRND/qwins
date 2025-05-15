import { UserOrders } from "@/app/types";

import styles from "./tabs.module.scss";

type Props = {
  orders: UserOrders[];
};

const OrdersTab = ({ orders }: Props) => {
  return (
    <div className={styles.ordersList}>
      {orders?.length > 0 ? (
        <ul className={styles.ordersContainer}>
          {orders.map((order: any) => (
            <li key={order.id} className={styles.orderItem}>
              <p className={styles.orderNumber}>Id заказа #{order.id}</p>
              <p className={styles.orderStatus}>{order.status}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className={styles.emptyMessage}>У вас пока нет заказов</p>
      )}
    </div>
  );
};

export default OrdersTab;
