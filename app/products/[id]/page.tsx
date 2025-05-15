import ServerCard from "@/app/components/ui/common/servers/serverCard/ServerCard";

const fetchProduct = async (id: string) => {
  try {
    const res = await fetch(`http://localhost:5000/product-server/${id}`, {
      cache: "force-cache",
    });

    if (!res.ok) throw new Error(res.status.toString());
    return await res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

type Props = {
  params: { id: string };
  searchParams?: Record<string, string | string[] | undefined>;
};

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const data = await fetchProduct(id);

  if (!data) return <div>Product page</div>;

  return (
    <div
      style={{ maxWidth: "400px", margin: "10% auto", position: "relative" }}
    >
      <ServerCard {...data} type="" isAuth={false} isFavorite={false} />
    </div>
  );
}
