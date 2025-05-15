"use client";

import { useRouter } from "next/navigation";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import { authService } from "@/app/services/auth";

import { AuthRequestType, UserType } from "@/app/types";

export const useAuth = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  // Запрос для получения данных пользователя
  const {
    data: user,
    isLoading,
    error,
  } = useQuery<UserType | null>({
    queryKey: ["auth", "user"],
    queryFn: async () => {
      try {
        const userData = await authService.getProfile();
        return userData || null;
      } catch (err) {
        return null;
      }
    },
    staleTime: 1000 * 60 * 14, // 14 минут
    gcTime: 1000 * 60 * 15, // 15 минут (должен быть > staleTime)
    retry: false,
    initialData: undefined, // Явно указываем, что начальных данных нет
  });

  // Мутация для входа
  const loginMutation = useMutation({
    mutationFn: (credentials: AuthRequestType) =>
      authService.login(credentials),
    onSuccess: (res) => {
      queryClient.setQueryData(["auth", "user"], res.user);
      toast.success(res.message || "Login successful");
      router.push("/profile");
      router.refresh();
    },
    onError: (error: Error) => {
      toast.error(error.message || "Login failed");
    },
  });

  // Мутация для регистрации
  const registerMutation = useMutation({
    mutationFn: (credentials: AuthRequestType) =>
      authService.register(credentials),
    onSuccess: (res) => {
      queryClient.setQueryData(["auth", "user"], res.user);
      toast.success("Registration successful");
      router.push("/profile");
      router.refresh();
    },
    onError: (error: Error) => {
      toast.error(error.message || "Registration failed");
    },
  });

  // Мутация для выхода
  const logoutMutation = useMutation({
    mutationFn: () => authService.logout(),
    onSuccess: (res) => {
      queryClient.setQueryData(["auth", "user"], null);
      queryClient.clear();
      toast.success(res.message || "Logged out successfully");
      router.push("/login");
      router.refresh();
    },
    onError: (error: Error) => {
      toast.error(error.message || "Logout failed");
    },
  });

  return {
    isAuth: !!user,
    isLoading,
    user,
    error,
    login: loginMutation.mutateAsync,
    register: registerMutation.mutateAsync,
    logout: logoutMutation.mutateAsync,
  };
};
