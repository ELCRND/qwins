import { UserType } from "../types";

export const getProfile = async (cookies?: any): Promise<UserType | null> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/auth/profile`,
      {
        headers: {
          "Content-Type": "application/json",
          Cookie: cookies,
        },
        credentials: "include",
      }
    );

    if (!res.ok) {
      const errorData = await res.json();

      throw new Error(errorData.message);
    }

    const resCookies = res.headers.get("set-cookie");
    if (cookies) {
      console.log(resCookies);
    }

    return await res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};
