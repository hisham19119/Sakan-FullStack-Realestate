export const gatAllTypes = async () => {
  const response = await fetch("https://sakan-server.vercel.app/api/types/");
  if (!response.ok) throw new Error("types are not available now");
  return response.json();
};

export const getOneType = async (id: string) => {
  const response = await fetch(
    `https://sakan-server.vercel.app/api/types/${id}`
  );
  if (!response.ok) throw new Error("this type is not available");
  return response.json();
};

export const createType = async (type: string) => {
  const response = await fetch("https://sakan-server.vercel.app/api/types", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ type }),
    credentials: "include",
  });
  if (!response.ok) throw new Error("can't create a type");
  return response.json();
};

export const updateType = async (id: string, type: string) => {
  const response = await fetch(
    `https://sakan-server.vercel.app/api/types/${id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ type }),
    }
  );

  if (!response.ok) throw new Error("Failed to update type");

  return response.json();
};

export const deleteType = async (id: string) => {
  const response = await fetch(
    `https://sakan-server.vercel.app/api/types/${id}`,
    {
      method: "DELETE",
      credentials: "include",
    }
  );

  if (!response.ok) throw new Error("Failed to delete type");
  return response.json();
};
