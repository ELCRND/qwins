import { ReadonlyURLSearchParams, useSearchParams } from "next/navigation";
import { CheckboxesDataType } from "../data";

import styles from "./checkboxFilter.module.scss";

type Props = CheckboxesDataType & {
  searchParams: ReadonlyURLSearchParams;
};

const CheckboxFilter = ({ title, type, checkboxes, searchParams }: Props) => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>{title}</p>
      {checkboxes.map((c) => (
        <div className={styles.item} key={type + c.legend}>
          <input
            id={type + c.legend}
            type="checkbox"
            name={type}
            value={c.value}
            defaultChecked={Boolean(
              searchParams.getAll(type).find((ch) => ch === c.value)
            )}
          />
          <label htmlFor={type + c.legend}>{c.legend}</label>
        </div>
      ))}
    </div>
  );
};

export default CheckboxFilter;
