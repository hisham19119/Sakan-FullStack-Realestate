import { useMutation, useQuery } from "@tanstack/react-query";
import {
  getAllUsers,
  getOneUser,
  createUser,
  updateUser,
  deleteUser,
} from "../apis/users";

export const useUsers = () => {
  const {
    data: users,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["users"],
    queryFn: getAllUsers,
  });

  const createUserMutation = useMutation({
    mutationFn: createUser,
  });

  const updateUserMutation = useMutation({
    mutationFn: ({ id, data }: { id: string; data: any }) =>
      updateUser(id, data),
  });

  const deleteUserMutation = useMutation({
    mutationFn: deleteUser,
  });

  const getOneUserQuery = useMutation({
    mutationFn: getOneUser,
  });

  return {
    users,
    isLoading,
    error,
    createUser: createUserMutation.mutate,
    updateUser: updateUserMutation.mutate,
    deleteUser: deleteUserMutation.mutate,
    getOneUser: getOneUserQuery.mutate,
  };
};
