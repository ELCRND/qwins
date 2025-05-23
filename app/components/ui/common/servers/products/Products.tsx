import { useState } from "react";
import { FixedSizeGrid as Grid } from "react-window";
import ServerCard from "../serverCard/ServerCard";
import styles from "./products.module.scss";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";
import { useAuth } from "@/app/store/auth-store";
import { Server } from "@/lib/mockServers";

const PaymentModal = dynamic(
  () => import("@/app/components/ui/common/paymentModal/PaymentModal"),
  {
    ssr: false,
  }
);

const Products = ({ data }: { data: Server[] }) => {
  const { isAuth, user } = useAuth();
  const isFavorite = (id: string) => {
    return !!user?.Favorite[0].servers.find((el) => el.id === id);
  };

  const path = usePathname().replace(/\W/g, "");
  const [selectedProduct, setSelectedProduct] = useState<Server | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const cols = 4;
  const rows = Math.ceil(data.length / cols);
  const itemWidth = 270;
  const itemHeight = 453;
  const containerHeight = 2 * itemHeight;

  const handleOrderClick = (product: Server) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const Cell = ({
    columnIndex,
    rowIndex,
    style,
  }: {
    columnIndex: number;
    rowIndex: number;
    style: React.CSSProperties;
  }) => {
    const index = rowIndex * cols + columnIndex;
    if (index >= data.length) return null;

    const product = data[index];

    return (
      <div
        className={` ${styles.item}`}
        style={{ ...style, width: itemWidth - 20, height: itemHeight - 20 }}
      >
        <ServerCard
          {...product}
          type={path}
          isAuth={isAuth}
          isFavorite={isFavorite(product.id)}
          onOrderClick={() => handleOrderClick(product)}
        />
      </div>
    );
  };

  return (
    <>
      <Grid
        columnCount={cols}
        columnWidth={itemWidth}
        height={containerHeight}
        rowCount={rows}
        rowHeight={itemHeight}
        width={cols * itemWidth + 10}
        className={styles.grid}
        itemData={data}
      >
        {Cell}
      </Grid>

      {isModalOpen && selectedProduct && (
        <PaymentModal product={selectedProduct} onClose={handleCloseModal} />
      )}
    </>
  );
};

export default Products;
