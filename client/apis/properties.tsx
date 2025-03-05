export const getAllProperties = async () => {
  const response = await fetch(
    "http://localhost:4000/api/properties/?limit=100"
  );
  if (!response.ok) throw new Error("Failed to fetch Properties");
  return response.json();
};
export const getAEmployeeProperties = async (id: string) => {
  const response = await fetch(
    `http://localhost:4000/api/users/${id}/properties`,
    {
      method: "GET",
      credentials: "include",
    }
  );
  if (!response.ok) throw new Error("Failed to fetch Employee Properties");
  return response.json();
};

export const getOneProperty = async (id: string) => {
  const response = await fetch(`http://localhost:4000/api/properties/${id}`);
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

  const response = await fetch("http://localhost:4000/api/properties/", {
    method: "POST",
    body: formData,
    credentials: "include",
  });

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

  const response = await fetch(`http://localhost:4000/api/properties/${id}`, {
    method: "PATCH",
    body: formData,
    credentials: "include",
  });

  if (!response.ok) throw new Error("Failed to update property");
  return response.json();
};

export const deleteOneProperty = async (id: string) => {
  const response = await fetch(`http://localhost:4000/api/properties/${id}`, {
    method: "DELETE",
    credentials: "include",
  });

  if (!response.ok) throw new Error("Failed to delete property");
  return response.json();
};
