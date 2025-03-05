export const getAllProperties = async () => {
  const response = await fetch(
    "https://sakan-server.vercel.app/api/properties/?limit=100"
  );
  if (!response.ok) throw new Error("Failed to fetch Properties");
  return response.json();
};
export const getAEmployeeProperties = async (id: string) => {
  const response = await fetch(
    `https://sakan-server.vercel.app/api/users/${id}/properties`
  );
  if (!response.ok) throw new Error("Failed to fetch Properties");
  return response.json();
};

export const getOneProperty = async (id: string) => {
  const response = await fetch(
    `https://sakan-server.vercel.app/api/properties/${id}`
  );
  if (!response.ok) throw new Error("Failed to fetch property");
  return response.json();
};

export const createProperty = async (data: any) => {
  const formData = new FormData();
  Object.keys(data).forEach((key) => {
    if (Array.isArray(data[key])) {
      data[key].forEach((file: File) => formData.append(key, file));
    } else {
      formData.append(key, data[key]);
    }
  });

  const response = await fetch(
    "https://sakan-server.vercel.app/api/properties/",
    {
      method: "POST",
      body: formData,
    }
  );

  if (!response.ok) throw new Error("Failed to create property");
  return response.json();
};

export const updateOneProperty = async (id: string, data: any) => {
  const formData = new FormData();
  Object.keys(data).forEach((key) => {
    if (Array.isArray(data[key])) {
      data[key].forEach((file: File) => formData.append(key, file));
    } else {
      formData.append(key, data[key]);
    }
  });

  const response = await fetch(`/api/Properties/${id}`, {
    method: "PATCH",
    body: formData,
  });

  if (!response.ok) throw new Error("Failed to update property");
  return response.json();
};

export const deleteOneProperty = async (id: string) => {
  const response = await fetch(`/api/Properties/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) throw new Error("Failed to delete property");
  return response.json();
};
