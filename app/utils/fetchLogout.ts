export const logout = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/auth/logout`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }
    );

    console.log(res);

    if (!res.ok) {
      const errorData = await res.json();

      throw new Error(errorData.message);
    }

    return await res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};
