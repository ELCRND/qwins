import { useState } from "react";

import { toast } from "sonner";

import { ProductsType } from "../types";

export const useFilterProducts = () => {
  const [isLoading, setIsLoading] = useState(false);

  const getProductsByFilter = async (
    queryString: string
  ): Promise<ProductsType[] | null> => {
    try {
      setIsLoading(true);
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/product-server?${queryString}`
      );

      if (!res.ok) {
        const errorData = await res.json();
        const errorMessages: string[] = Array.isArray(errorData.message)
          ? errorData.message
          : [errorData.message || "Произошла ошибка при загрузке данных"];

        errorMessages.forEach((msg) => toast.error(msg));
        setIsLoading(false);

        throw new Error(errorMessages.join("\n"));
      }

      const data = await res.json();
      setIsLoading(false);

      return data;
    } catch (error) {
      console.error(error);
      setIsLoading(false);

      return null;
    }
  };

  return { isLoading, getProductsByFilter };
};
