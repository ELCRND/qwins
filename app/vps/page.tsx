import { Metadata } from "next";

import Header from "../components/ui/header/Header";
import Footer from "../components/ui/footer/Footer";
import VpsBanner from "../components/ui/vpsBanner/VpsBanner";
import VpsAdvant from "../components/ui/vpsAdvants/VpsAdvants";
import SupportBanner from "../components/ui/common/supportBanner/SupportBanner";
import Servers from "../components/ui/common/servers/Servers";

import { Suspense } from "react";

export const metadata: Metadata = {
  title: "VPS",
  description: "Мощные VPS под любые задачи",
};

async function fetchProducts() {
  try {
    const response = await fetch(`${process.env.SITE_URL}/api/product-server`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
}

export default async function VpsPage() {
  const products = await fetchProducts();

  return (
    <>
      <Header />
      <VpsBanner />
      <VpsAdvant />
      <Suspense>
        <Servers products={products || []} />
      </Suspense>
      <SupportBanner />
      <Footer />
    </>
  );
}
