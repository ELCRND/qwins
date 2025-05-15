import { Metadata } from "next";

import Header from "../components/ui/header/Header";
import Footer from "../components/ui/footer/Footer";
import VdsBanner from "../components/ui/vdsBanner/VdsBanner";
import VdsAdvant from "../components/ui/vdsAdvants/VdsAdvants";
import Servers from "../components/ui/common/servers/Servers";
import SupportBanner from "../components/ui/common/supportBanner/SupportBanner";

import { ProductsType } from "../types";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "VDS",
  description: "Мощные VDS под любые задачи",
};

const fetchProducts = async (): Promise<ProductsType[]> => {
  try {
    const res = await fetch(`http://localhost:5000/product-server?take=8`, {
      cache: "force-cache",
    });

    if (!res.ok) {
      throw new Error(res.status.toString());
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export default async function VpsPage() {
  const products = await fetchProducts();

  return (
    <>
      <Header />
      <VdsBanner />
      <VdsAdvant />
      <Suspense>
        <Servers products={products.slice()} />
      </Suspense>
      <SupportBanner />
      <Footer />
    </>
  );
}
