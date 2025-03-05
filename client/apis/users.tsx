export const getAllUsers = async () => {
  const response = await fetch("http://localhost:4000/api/users/?limit=1000", {
    method: "GET",
    credentials: "include",
  });
  console.log("responseresponseresponse", response);
  if (!response.ok) throw new Error("users are not available now");
  return response.json();
};

export const getOneUser = async (id: string) => {
  const response = await fetch(`http://localhost:4000/api/users/${id}`);
  if (!response.ok) throw new Error("this user is not available");
  return response.json();
};

export const createUser = async (userData: {
  name: string;
  email: string;
  password: string;
  role: string;
}) => {
  const response = await fetch("http://localhost:4000/api/users/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(userData),
  });
  if (!response.ok) throw new Error("can't create a user");
  return response.json();
};

export const updateUser = async (
  id: string,
  updatedData: {
    name?: string;
    email?: string;
    password?: string;
    role?: string;
  }
) => {
  const response = await fetch(`http://localhost:4000/api/users/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedData),
    credentials: "include",
  });

  if (!response.ok) throw new Error("Failed to update user");

  return response.json();
};

export const deleteUser = async (id: string) => {
  const response = await fetch(`http://localhost:4000/api/users/${id}`, {
    method: "DELETE",
    credentials: "include",
  });

  if (!response.ok) throw new Error("Failed to delete user");
  return response.json();
};
