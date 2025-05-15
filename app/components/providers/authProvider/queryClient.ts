// app/providers.tsx
"use server";

import { authService } from "@/app/services/auth";
import { QueryClient } from "@tanstack/react-query";
import { cache } from "react";

// Создаем инстанс QueryClient с возможностью кэширования
const getQueryClient = cache(
  async () =>
    new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
          retry: false,
          staleTime: 60 * 1000, // 1 минута
          initialData: await authService.getProfile(),
        },
      },
    })
);

export default getQueryClient;
