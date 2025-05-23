import { useState } from "react";
import { ordersService } from "@/app/services/orders";

import { useAuth } from "@/app/store/auth-store";

import styles from "./paymentModal.module.scss";
import { toast } from "sonner";
import { Server } from "@/lib/mockServers";

type Props = {
  product: Server;
  onClose: () => void;
};

export default function PaymentModal({ product, onClose }: Props) {
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handlePayment = async () => {
    if (!user) {
      toast.warning("Пожалуйста авторизуйтесь");
      return;
    }
    setIsLoading(true);
    setError(null);

    try {
      const response = await ordersService.create({
        userId: user?.id,
        serverId: product.id,
        serverName: product.name,
        totalPrice: product.pricePerMonth,
      });

      if (!response.ok) {
        toast.error((await response.json()).message);
        return;
      }

      const paymentData = await response.json();

      if (
        paymentData.confirmation &&
        paymentData.confirmation.confirmation_url
      ) {
        window.location.href = paymentData.confirmation.confirmation_url;
      }
    } catch (err) {
      console.error("Payment error:", err);
      setError((err as string) || "Произошла ошибка при оплате");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <h2>Оформление заказа</h2>
        <p>
          <strong>Продукт:</strong> {product.name}
        </p>
        <p>
          <strong>CPU:</strong> {product.cpuModel} (x{product.cpuCores})
        </p>
        <p>
          <strong>RAM:</strong> {product.ramGb} ГБ
        </p>
        <p>
          <strong>Диск:</strong> {product.diskGb} ГБ
        </p>
        <p>
          <strong>Сумма:</strong> {product.pricePerMonth} $/мес
        </p>

        <div id="payment-container" className={styles.paymentContainer}>
          {error && <div className={styles.error}>{error}</div>}
          <button
            onClick={handlePayment}
            disabled={isLoading}
            className={`regular-button ${styles.payButton}`}
          >
            {isLoading ? "Обработка..." : "Перейти к оплате"}
          </button>
        </div>
      </div>
    </div>
  );
}
