import { CpuManufacturer, DiskType, LocationsType } from "@/app/types";

export type RangesDataType = {
  types: string[];
  title: string;
  min: number;
  max: number;
  step: number;
};

export const rangesData: RangesDataType[] = [
  {
    types: ["minPrice", "maxPrice"],
    title: "Цена за месяц, в $",
    min: 5,
    max: 500,
    step: 1,
  },
  {
    types: ["cpuMinCores", "cpuMaxCores"],
    title: "Количество CPU, ядер",
    min: 4,
    max: 64,
    step: 4,
  },
  {
    types: ["diskMinGb", "diskMaxGb"],
    title: "Объeм диска, ГБ",
    min: 100,
    max: 8000,
    step: 100,
  },
  {
    types: ["ramMinGb", "ramMaxGb"],
    title: "Объeм RAM, ГБ",
    min: 4,
    max: 256,
    step: 4,
  },
];

export type CheckboxesDataType = {
  title: string;
  type: string;
  checkboxes: {
    value: string;
    legend: string;
  }[];
};

export const checkboxesData: CheckboxesDataType[] = [
  {
    title: "Локация",
    type: "location",
    checkboxes: [
      {
        value: LocationsType.GERMANY,
        legend: "Германия",
      },
      {
        value: LocationsType.FINLAND,
        legend: "Финляндия",
      },
      {
        value: LocationsType.RUSSIA,
        legend: "Россия",
      },
      {
        value: LocationsType.NETHERLANDS,
        legend: "Нидерланды",
      },
      {
        value: LocationsType.ESTONIA,
        legend: "Эстония",
      },
    ],
  },
  {
    title: "Тип CPU",
    type: "cpuManufacturer",
    checkboxes: [
      {
        value: CpuManufacturer.INTEL,
        legend: "Intel",
      },
      {
        value: CpuManufacturer.AMD,
        legend: "AMD",
      },
    ],
  },
  {
    title: "Тип диска",
    type: "diskType",
    checkboxes: [
      {
        value: DiskType.HDD,
        legend: "HDD",
      },
      {
        value: DiskType.SSD,
        legend: "SSD",
      },
      {
        value: DiskType.NVMe,
        legend: "NVME",
      },
    ],
  },

  {
    title: "Доступность",
    type: "isAvailable",
    checkboxes: [
      {
        value: "true",
        legend: "В наличии",
      },
      {
        value: "false",
        legend: "Отсутствует",
      },
    ],
  },
];
