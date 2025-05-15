"use client";
import { useRouter, useSearchParams } from "next/navigation";

import RangeFilter from "./rangeFilter/RangeFilter";
import CheckboxFilter from "./checkboxFilter/CheckboxFilter";

import { rangesData, checkboxesData } from "./data";

import styles from "./filters.module.scss";

type Props = {
  isLoading: boolean;
  applyFilters: (v: string) => void;
};

const Filters = ({ isLoading, applyFilters }: Props) => {
  const searchParams = useSearchParams();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    if (isLoading) return;

    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const params = new URLSearchParams();

    for (const [key, value] of formData.entries()) {
      params.append(key, value.toString());
    }

    const queryString = params.toString();

    window.history.replaceState(null, "", `/vps?${queryString}`);

    applyFilters(queryString);
  }

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <div className={styles.rangesFilters}>
        {rangesData.map((r) => (
          <RangeFilter
            key={r.types[0]}
            types={r.types}
            title={r.title}
            min={r.min}
            max={r.max}
            step={r.step}
            searchParams={searchParams}
          />
        ))}
      </div>

      <div className={styles.checkboxesInputs}>
        {checkboxesData.map((c) => (
          <CheckboxFilter
            key={c.type}
            type={c.type}
            title={c.title}
            checkboxes={c.checkboxes}
            searchParams={searchParams}
          />
        ))}
      </div>

      <button
        disabled={isLoading}
        className={`regular-button ${styles.searchBtn}`}
      >
        Поиск
      </button>
    </form>
  );
};

export default Filters;
