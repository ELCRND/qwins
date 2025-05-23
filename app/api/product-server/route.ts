import { NextResponse } from "next/server";
import { getMockServers } from "@/lib/mockServers";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    const filters = {
      isAvailable: searchParams.get("isAvailable") === "false" ? false : true,
      cpuManufacturer: searchParams.get("cpuManufacturer") as
        | "INTEL"
        | "AMD"
        | undefined,
      cpuMinCores: searchParams.get("cpuMinCores")
        ? parseInt(searchParams.get("cpuMinCores")!)
        : undefined,
      cpuMaxCores: searchParams.get("cpuMaxCores")
        ? parseInt(searchParams.get("cpuMaxCores")!)
        : undefined,
      ramMinGb: searchParams.get("ramMinGb")
        ? parseInt(searchParams.get("ramMinGb")!)
        : undefined,
      ramMaxGb: searchParams.get("ramMaxGb")
        ? parseInt(searchParams.get("ramMaxGb")!)
        : undefined,
      diskMinGb: searchParams.get("diskMinGb")
        ? parseInt(searchParams.get("diskMinGb")!)
        : undefined,
      diskMaxGb: searchParams.get("diskMaxGb")
        ? parseInt(searchParams.get("diskMaxGb")!)
        : undefined,
      diskType: searchParams.get("diskType") as
        | "SSD"
        | "HDD"
        | "NVMe"
        | undefined,
      location: searchParams.get("location") as
        | "GERMANY"
        | "FINLAND"
        | "RUSSIA"
        | "NETHERLANDS"
        | "ESTONIA"
        | undefined,
      minPrice: searchParams.get("minPrice")
        ? parseFloat(searchParams.get("minPrice")!)
        : undefined,
      maxPrice: searchParams.get("maxPrice")
        ? parseFloat(searchParams.get("maxPrice")!)
        : undefined,
      sortByPrice: searchParams.get("sortByPrice") as
        | "asc"
        | "desc"
        | undefined,
      take: searchParams.get("take")
        ? parseInt(searchParams.get("take")!)
        : undefined,
    };

    const servers = getMockServers(filters);
    return NextResponse.json(servers);
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
