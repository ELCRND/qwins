"use client";

import { useState } from "react";
import { ReadonlyURLSearchParams, useSearchParams } from "next/navigation";

import { RangesDataType } from "../data";

import styles from "./rangeFilter.module.scss";

function getMinValue(min: number, max: number, serchParams: string | null) {
  const query = Number(serchParams);

  if (Number.isNaN(query) || query >= max || query < min) {
    return min;
  }

  return query;
}

function getMaxValue(min: number, max: number, serchParams: string | null) {
  const query = Number(serchParams);

  if (Number.isNaN(query) || query <= min || query > max) {
    return max;
  }

  return query;
}

type Props = RangesDataType & {
  searchParams: ReadonlyURLSearchParams;
};

const RangeFilter = ({
  types,
  title,
  min = 1,
  max = 1000,
  step = 1,
  searchParams,
}: Props) => {
  const [minValue, setMinValue] = useState(
    getMinValue(min, max, searchParams.get(types[0]))
  );
  const [maxValue, setMaxValue] = useState(
    getMaxValue(min, max, searchParams.get(types[1]))
  );
  const [rangeInput, setRangeInput] = useState(`${minValue}-${maxValue}`);

  const handleMinChange = (e: { target: { value: any } }) => {
    const value = Math.min(Number(e.target.value), maxValue - step);
    setMinValue(value);
    setRangeInput(`${value}-${maxValue}`);
  };

  const handleMaxChange = (e: { target: { value: any } }) => {
    const value = Math.max(Number(e.target.value), minValue + step);
    setMaxValue(value);
    setRangeInput(`${minValue}-${value}`);
  };

  const minPos = ((minValue - min) / (max - min)) * 100;
  const maxPos = ((maxValue - min) / (max - min)) * 100;

  return (
    <div className={styles.container}>
      <p className={styles.title}>{title}</p>
      <input
        className={styles.price}
        type="text"
        id={types.toString()}
        value={rangeInput}
        max={max}
        readOnly
      />

      <div className={styles.sliderContainer}>
        <div className={styles.scaleLine}></div>

        <div
          className={styles.selectedRange}
          style={{ left: `${minPos}%`, width: `${maxPos - minPos}%` }}
        ></div>

        <input
          id="min"
          name={types[0]}
          type="range"
          min={min}
          max={max}
          step={step}
          value={minValue}
          onChange={handleMinChange}
          className={styles.thumb}
        />
        <input
          id="max"
          name={types[1]}
          type="range"
          min={min}
          max={max}
          step={step}
          value={maxValue}
          onChange={handleMaxChange}
          className={styles.thumb}
        />
      </div>
    </div>
  );
};

export default RangeFilter;
