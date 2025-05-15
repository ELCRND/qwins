"use client";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "sonner";

import { ordersService } from "@/app/services/orders";

import styles from "./thanks.module.scss";
import Link from "next/link";

const Thanks = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const order = searchParams.get("order") || "";

  const [rating, setRating] = useState<number | null>(null);
  const [comment, setComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmitFeedback = async () => {
    if (!rating) {
      toast.warning("Пожалуйста, поставьте оценку");
      return;
    }

    setIsSubmitting(true);

    const res = await ordersService.sendReview({
      orderId: order,
      rating,
      comment,
    });

    if (res.ok) {
      setSubmitSuccess(true);
      toast.success((await res.json()).message);
    } else {
      toast.error((await res.json()).message);
    }

    setIsSubmitting(false);
  };

  useEffect(() => {
    ordersService.confirm(order);
  }, [order]);

  return (
    <section className={`container ${styles.container}`}>
      <div className={styles.card}>
        <h1 className={styles.title}>Спасибо за оплату!</h1>
        <p className={styles.message}>
          Ваш платеж успешно обработан. Мы ценим ваш выбор!
        </p>

        {!submitSuccess ? (
          <div className={styles.feedbackSection}>
            <h2 className={styles.subtitle}>Оцените наш сервис</h2>

            <div className={styles.ratingContainer}>
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  className={`${styles.star} ${
                    rating && star <= rating ? styles.filled : ""
                  }`}
                  onClick={() => setRating(star)}
                  type="button"
                >
                  ★
                </button>
              ))}
            </div>

            <textarea
              className={styles.textarea}
              placeholder="Ваш комментарий (необязательно)..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />

            <button
              className={`regular-button ${styles.submitButton}`}
              onClick={handleSubmitFeedback}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Отправка..." : "Отправить отзыв"}
            </button>
          </div>
        ) : (
          <div className={styles.successMessage}>
            <p>Спасибо за ваш отзыв!</p>
          </div>
        )}

        <Link
          href={"/profile"}
          className={`regular-button ${styles.profileButton}`}
        >
          Перейти в профиль
        </Link>
      </div>
    </section>
  );
};

export default Thanks;
