import { faker } from "@faker-js/faker";

type CpuManufacturer = "INTEL" | "AMD";
type DiskType = "SSD" | "HDD" | "NVMe";
type LocationsType =
  | "GERMANY"
  | "FINLAND"
  | "RUSSIA"
  | "NETHERLANDS"
  | "ESTONIA";

export interface Server {
  id: string;
  name: string;
  description: string;
  cpuManufacturer: CpuManufacturer;
  cpuModel: string;
  cpuCores: number;
  ramGb: number;
  diskGb: number;
  diskType: DiskType;
  pricePerMonth: number;
  isAvailable: boolean;
  location: LocationsType;
}

const CPU_MODELS = {
  INTEL: [
    "Xeon E5-2678",
    "Core i9-13900K",
    "Xeon Platinum 8380",
    "Core i7-13700K",
    "Xeon Gold 6348",
  ],
  AMD: [
    "EPYC 7763",
    "Ryzen 9 7950X",
    "EPYC 9654",
    "Ryzen 7 7800X",
    "EPYC 7773X",
  ],
};

export function generateMockServers(count: number = 100): Server[] {
  return Array.from({ length: count }, (_, i) => {
    const cpuManufacturer = faker.helpers.arrayElement(
      Object.keys(CPU_MODELS)
    ) as CpuManufacturer;

    return {
      id: `server-${i + 1}`,
      name: `SRV-${faker.string.alphanumeric(6).toUpperCase()}`,
      description: faker.lorem.sentence(),
      cpuManufacturer,
      cpuModel: faker.helpers.arrayElement(CPU_MODELS[cpuManufacturer]),
      cpuCores: faker.helpers.arrayElement([4, 8, 16, 32, 64]),
      ramGb: faker.helpers.arrayElement([4, 8, 16, 32, 64, 128, 256]),
      diskGb: faker.helpers.arrayElement([
        100, 250, 500, 1000, 2000, 4000, 8000,
      ]),
      diskType: faker.helpers.arrayElement([
        "SSD",
        "HDD",
        "NVMe",
      ] as DiskType[]),
      pricePerMonth: faker.number.float({ min: 5, max: 500, multipleOf: 1 }),
      isAvailable: faker.datatype.boolean(0.85),
      location: faker.helpers.arrayElement([
        "GERMANY",
        "FINLAND",
        "RUSSIA",
        "NETHERLANDS",
        "ESTONIA",
      ] as LocationsType[]),
    };
  });
}

// Generate mock data once and cache it
const mockServers = generateMockServers(100);

export function getMockServers(filter?: {
  isAvailable?: boolean;
  cpuManufacturer?: CpuManufacturer | CpuManufacturer[];
  cpuMinCores?: number;
  cpuMaxCores?: number;
  ramMinGb?: number;
  ramMaxGb?: number;
  diskMinGb?: number;
  diskMaxGb?: number;
  diskType?: DiskType | DiskType[];
  location?: LocationsType | LocationsType[];
  minPrice?: number;
  maxPrice?: number;
  sortByPrice?: "asc" | "desc";
  take?: number;
}): Server[] {
  let servers = [...mockServers];

  // Apply filters
  if (filter?.isAvailable !== undefined) {
    servers = servers.filter(
      (server) => server.isAvailable === filter.isAvailable
    );
  }

  if (filter?.cpuManufacturer) {
    const manufacturers = Array.isArray(filter.cpuManufacturer)
      ? filter.cpuManufacturer
      : [filter.cpuManufacturer];
    servers = servers.filter((server) =>
      manufacturers.includes(server.cpuManufacturer)
    );
  }

  if (filter?.cpuMinCores !== undefined) {
    servers = servers.filter(
      (server) => server.cpuCores >= filter.cpuMinCores!
    );
  }

  if (filter?.cpuMaxCores !== undefined) {
    servers = servers.filter(
      (server) => server.cpuCores <= filter.cpuMaxCores!
    );
  }

  if (filter?.ramMinGb !== undefined) {
    servers = servers.filter((server) => server.ramGb >= filter.ramMinGb!);
  }

  if (filter?.ramMaxGb !== undefined) {
    servers = servers.filter((server) => server.ramGb <= filter.ramMaxGb!);
  }

  if (filter?.diskMinGb !== undefined) {
    servers = servers.filter((server) => server.diskGb >= filter.diskMinGb!);
  }

  if (filter?.diskMaxGb !== undefined) {
    servers = servers.filter((server) => server.diskGb <= filter.diskMaxGb!);
  }

  if (filter?.diskType) {
    const diskTypes = Array.isArray(filter.diskType)
      ? filter.diskType
      : [filter.diskType];
    servers = servers.filter((server) => diskTypes.includes(server.diskType));
  }

  if (filter?.location) {
    const locations = Array.isArray(filter.location)
      ? filter.location
      : [filter.location];
    servers = servers.filter((server) => locations.includes(server.location));
  }

  if (filter?.minPrice !== undefined) {
    servers = servers.filter(
      (server) => server.pricePerMonth >= filter.minPrice!
    );
  }

  if (filter?.maxPrice !== undefined) {
    servers = servers.filter(
      (server) => server.pricePerMonth <= filter.maxPrice!
    );
  }

  // Apply sorting
  if (filter?.sortByPrice) {
    servers.sort((a, b) => {
      return filter.sortByPrice === "asc"
        ? a.pricePerMonth - b.pricePerMonth
        : b.pricePerMonth - a.pricePerMonth;
    });
  } else {
    // Default sort by price ascending
    servers.sort((a, b) => a.pricePerMonth - b.pricePerMonth);
  }

  // Apply limit
  if (filter?.take !== undefined) {
    servers = servers.slice(0, filter.take);
  }

  return servers;
}

export function getMockServerById(id: string): Server | null {
  return mockServers.find((server) => server.id === id) || null;
}
