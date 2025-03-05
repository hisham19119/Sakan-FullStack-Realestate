export const getAllLocations = async () => {
  const response = await fetch("http://localhost:4000/api/locations/");
  if (!response.ok) throw new Error("locations are not available now");
  return response.json();
};

export const getOneLocation = async (id: string) => {
  const response = await fetch(`http://localhost:4000/api/locations/${id}`);
  if (!response.ok) throw new Error("this location is not available");
  return response.json();
};

export const createLocation = async (location: string) => {
  const response = await fetch("http://localhost:4000/api/locations", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ location }),
    credentials: "include",
  });
  if (!response.ok) throw new Error("can't create a location");
  return response.json();
};

export const updateLocation = async (id: string, location: string) => {
  const response = await fetch(`http://localhost:4000/api/locations/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ location }),
    credentials: "include",
  });

  if (!response.ok) throw new Error("Failed to update location");

  return response.json();
};

export const deleteLocation = async (id: string) => {
  const response = await fetch(`http://localhost:4000/api/locations/${id}`, {
    method: "DELETE",
    credentials: "include",
  });

  if (!response.ok) throw new Error("Failed to delete location");
  return response.json();
};
