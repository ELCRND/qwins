import { UserFavorites } from "@/app/types";
import styles from "./tabs.module.scss";
import Link from "next/link";

type Props = {
  favorites: UserFavorites["servers"];
};

const FavoritesTab = ({ favorites }: Props) => {
  console.log(favorites);
  return (
    <div className={styles.ordersList}>
      {favorites?.length > 0 ? (
        <ul className={styles.ordersContainer}>
          {favorites.map((f: any) => (
            <li key={f.id} className={styles.orderItem}>
              <p className={styles.orderStatus}> {f.name}</p>
              <p className={styles.orderNumber}>
                Id сервера #<Link href={`/products/${f.id}`}>{f.id}</Link>
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p className={styles.emptyMessage}>У вас пока нет избранных товаров</p>
      )}
    </div>
  );
};

export default FavoritesTab;
