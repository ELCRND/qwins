import { OrdersCreateRequestType, OrdersReviewRequestType } from "../types";

export const ordersService = {
  async create(body: OrdersCreateRequestType) {
    return await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/orders/create`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      credentials: "include",
    });
  },

  async confirm(orderId: string) {
    return await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/orders/confirm`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ orderId }),
      credentials: "include",
    });
  },

  async sendReview(body: OrdersReviewRequestType) {
    return await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/orders/add-review`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
        credentials: "include",
      }
    );
  },
};
