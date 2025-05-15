import Thanks from "@/app/components/ui/thanks/Thanks";
import { Metadata } from "next";
import Header from "../components/ui/header/Header";
import Footer from "../components/ui/footer/Footer";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Спасибо за заказ",
  description: "Спасибо за заказ",
};

const ThanksPage = () => {
  return (
    <>
      <Header />
      <Suspense>
        <Thanks />
      </Suspense>
      <Footer />
    </>
  );
};

export default ThanksPage;
