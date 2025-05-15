import { Metadata } from "next";
import Login from "../components/ui/login/Login";

export const metadata: Metadata = {
  title: "Авторизация",
  description: "Войти или зарегистрироваться",
};

const LoginPage = () => {
  return (
    <>
      <Login />
    </>
  );
};

export default LoginPage;
