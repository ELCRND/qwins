import { Metadata } from "next";

import Header from "../components/ui/header/Header";
import Footer from "../components/ui/footer/Footer";
import VdsBanner from "../components/ui/vdsBanner/VdsBanner";
import VdsAdvant from "../components/ui/vdsAdvants/VdsAdvants";
import Servers from "../components/ui/common/servers/Servers";
import SupportBanner from "../components/ui/common/supportBanner/SupportBanner";

import { Suspense } from "react";

export const metadata: Metadata = {
  title: "VDS",
  description: "Мощные VDS под любые задачи",
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
      <VdsBanner />
      <VdsAdvant />
      <Suspense>
        <Servers products={products || []} />
      </Suspense>
      <SupportBanner />
      <Footer />
    </>
  );
}
