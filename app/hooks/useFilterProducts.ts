import { useState } from "react";
import { toast } from "sonner";

import { getMockServers, Server } from "@/lib/mockServers";

export const useFilterProducts = () => {
  const [isLoading, setIsLoading] = useState(false);

  const getProductsByFilter = async (
    queryString: string
  ): Promise<Server[] | null> => {
    try {
      setIsLoading(true);

      const params = new URLSearchParams(queryString);
      const filters = {
        isAvailable: params.get("isAvailable") === "true" ? true : undefined,
        cpuManufacturer: params.get("cpuManufacturer") as
          | "INTEL"
          | "AMD"
          | undefined,
        cpuMinCores: params.get("cpuMinCores")
          ? parseInt(params.get("cpuMinCores") as string)
          : undefined,
        cpuMaxCores: params.get("cpuMaxCores")
          ? parseInt(params.get("cpuMaxCores") as string)
          : undefined,
        ramMinGb: params.get("ramMinGb")
          ? parseInt(params.get("ramMinGb") as string)
          : undefined,
        ramMaxGb: params.get("ramMaxGb")
          ? parseInt(params.get("ramMaxGb") as string)
          : undefined,
        diskMinGb: params.get("diskMinGb")
          ? parseInt(params.get("diskMinGb") as string)
          : undefined,
        diskMaxGb: params.get("diskMaxGb")
          ? parseInt(params.get("diskMaxGb") as string)
          : undefined,
        diskType: params.get("diskType") as "SSD" | "HDD" | "NVMe" | undefined,
        location: params.get("location") as
          | "GERMANY"
          | "FINLAND"
          | "RUSSIA"
          | "NETHERLANDS"
          | "ESTONIA"
          | undefined,
        minPrice: params.get("minPrice")
          ? parseFloat(params.get("minPrice") as string)
          : undefined,
        maxPrice: params.get("maxPrice")
          ? parseFloat(params.get("maxPrice") as string)
          : undefined,
        sortByPrice: params.get("sortByPrice") as "asc" | "desc" | undefined,
        take: params.get("take")
          ? parseInt(params.get("take") as string)
          : undefined,
      };

      await new Promise((resolve) => setTimeout(resolve, 300));

      // Получаем отфильтрованные данные
      const filteredData = getMockServers(filters);

      setIsLoading(false);
      return filteredData;
    } catch (error) {
      console.error(error);
      toast.error("Произошла ошибка при загрузке данных");
      setIsLoading(false);
      return null;
    }
  };

  return { isLoading, getProductsByFilter };
};
