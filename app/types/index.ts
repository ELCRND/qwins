export type UserType = {
  id: string;
  email: string;
  username?: string;
  reviews?: UserReviews[];
  orders?: UserOrders[];
  Favorite: UserFavorites[];
};

export type UserFavorites = {
  servers: {
    id: string;
    name: string;
  }[];
};

export type UserReviews = {
  id: string;
  comment: string;
  rating: number;
  serverId: string;
};

export type UserOrders = {
  id: string;
  serverId: string;
  status: string;
  totalPrice: number;
};

export type ProductsType = {
  id: string;
  name: string;
  description: string;
  isAvailable: boolean;
  cpuManufacturer: keyof typeof CpuManufacturer;
  cpuModel: keyof typeof CpuModels;
  cpuCores?: number;
  ramGb: number;
  diskGb: number;
  diskType: keyof typeof DiskType;
  location: keyof typeof LocationsType;
  pricePerMonth: number;
};

enum CpuModels {
  "Xeon E5-2678",
  "Core i9-13900K",
  "Xeon Platinum 8380",
  "Core i7-13700K",
  "Xeon Gold 6348",
  "EPYC 7763",
  "Ryzen 9 7950X",
  "EPYC 9654",
  "Ryzen 7 7800X",
  "EPYC 7773X",
}

export const CpuManufacturer = {
  INTEL: "INTEL",
  AMD: "AMD",
} as const;

export const DiskType = {
  SSD: "SSD",
  HDD: "HDD",
  NVMe: "NVMe",
} as const;

export enum LocationsType {
  GERMANY = "GERMANY",
  FINLAND = "FINLAND",
  RUSSIA = "RUSSIA",
  NETHERLANDS = "NETHERLANDS",
  ESTONIA = "ESTONIA",
}

export type AuthRequestType = {
  name?: string;
  email: string;
  password: string;
  passwordRepeat?: string;
};

export type OrdersCreateRequestType = {
  userId: string;
  serverId: string;
  serverName: string;
  totalPrice: number;
};

export type OrdersReviewRequestType = {
  orderId: string;
  rating: number;
  comment?: string;
};
