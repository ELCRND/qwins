"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import Filters from "./filters/Filters";
import Products from "./products/Products";

import { useFilterProducts } from "@/app/hooks/useFilterProducts";
import { ProductsType } from "@/app/types";

import styles from "./servers.module.scss";

const Servers = ({ products }: { products: ProductsType[] }) => {
  const searchParans = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState(products);
  const { isLoading, getProductsByFilter } = useFilterProducts();

  const updateProducts = async (queryString: string) => {
    if (isLoading) return;

    const newData = await getProductsByFilter(queryString);

    setFilteredProducts(newData || products || []);
  };

  useEffect(() => {
    updateProducts(searchParans.toString());
  }, []);

  return (
    <section className={`container ${styles.container}`}>
      <div className={styles.wrap}>
        <Filters applyFilters={updateProducts} isLoading={isLoading} />
        <Products data={filteredProducts} />
      </div>
    </section>
  );
};

export default Servers;
