import Thanks from "@/app/components/ui/thanks/Thanks";
import { Metadata } from "next";
import Header from "../components/ui/header/Header";
import Footer from "../components/ui/footer/Footer";

export const metadata: Metadata = {
  title: "Спасибо за заказ",
  description: "Спасибо за заказ",
};

const ThanksPage = () => {
  return (
    <>
      <Header />
      <Thanks />
      <Footer />
    </>
  );
};

export default ThanksPage;
