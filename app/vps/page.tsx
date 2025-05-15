import { Metadata } from "next";

import Header from "../components/ui/header/Header";
import Footer from "../components/ui/footer/Footer";
import VpsBanner from "../components/ui/vpsBanner/VpsBanner";
import VpsAdvant from "../components/ui/vpsAdvants/VpsAdvants";
import SupportBanner from "../components/ui/common/supportBanner/SupportBanner";
import Servers from "../components/ui/common/servers/Servers";

import { ProductsType } from "../types";

export const metadata: Metadata = {
  title: "VPS",
  description: "Мощные VPS под любые задачи",
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
      <VpsBanner />
      <VpsAdvant />
      <Servers products={products.slice()} />
      <SupportBanner />
      <Footer />
    </>
  );
}
