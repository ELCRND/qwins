import ServerCard from "@/app/components/ui/common/servers/serverCard/ServerCard";
import { ProductsType } from "@/app/types";

const fetchProduct = async (id: string): Promise<ProductsType | null> => {
  try {
    const res = await fetch(`http://localhost:5000/product-server/${id}`, {
      cache: "force-cache",
    });

    if (!res.ok) {
      throw new Error(res.status.toString());
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const ProducPage = async ({ params }: { params: { id: string } }) => {
  const data = await fetchProduct((await params).id);

  if (data) {
    return (
      <div
        style={{
          maxWidth: "400px",
          margin: "10% auto",
          position: "relative",
        }}
      >
        <ServerCard {...data} type="" />
      </div>
    );
  } else {
    return <div>Product page</div>;
  }
};

export default ProducPage;
