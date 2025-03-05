import { useMutation, useQuery } from "@tanstack/react-query";

import {
  gatAllTypes,
  getOneType,
  createType,
  updateType,
  deleteType,
} from "../apis/types";

export const useTypes = () => {
  const {
    data: types,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["types"],
    queryFn: gatAllTypes,
  });
  const getTypeMutation = useMutation({
    mutationFn: getOneType,
  });
  const createTypeMutation = useMutation({
    mutationFn: createType,
  });

  const updateTypeMutation = useMutation({
    mutationFn: ({ id, type }: { id: string; type: string }) =>
      updateType(id, type),
  });

  const deleteTypeMutation = useMutation({
    mutationFn: (id: string) => deleteType(id),
  });

  return {
    types,
    isLoading,
    error,
    createType: createTypeMutation.mutate,
    getOneType: getTypeMutation.mutate,
    updateType: updateTypeMutation.mutate,
    deleteType: deleteTypeMutation.mutate,
  };
};
