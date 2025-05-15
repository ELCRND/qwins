// import { toast } from "sonner";
// import { ProductsType } from "../types";

// export const getProductsByFilter = async (
//   queryString: string
// ): Promise<ProductsType[] | null> => {
//   try {
//     const res = await fetch(
//       `${process.env.NEXT_PUBLIC_SERVER_URL}/product-server?${queryString}`
//     );

//     if (!res.ok) {
//       const errorData = await res.json();
//       const errorMessages: string[] = Array.isArray(errorData.message)
//         ? errorData.message
//         : [errorData.message || "Произошла ошибка при загрузке данных"];

//       errorMessages.forEach((msg) => toast.error(msg));

//       throw new Error(errorMessages.join("\n"));
//     }

//     return await res.json();
//   } catch (error) {
//     console.error(error);
//     return null;
//   }
// };
