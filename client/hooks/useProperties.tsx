import { useMutation, useQuery } from "@tanstack/react-query";
import {
  createProperty,
  getAllProperties,
  getOneProperty,
  updateOneProperty,
  deleteOneProperty,
  getAEmployeeProperties,
} from "../apis/properties";
import { useAuth } from "@/context/AuthContext";

export const useProperties = () => {
  const {
    data: properties,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["properties"],
    queryFn: getAllProperties,
  });

  const createPropertyMutation = useMutation({ mutationFn: createProperty });
  const updatePropertyMutation = useMutation({
    mutationFn: ({ id, data }: { id: string; data: any }) =>
      updateOneProperty(id, data),
  });
  const deletePropertyMutation = useMutation({
    mutationFn: (id: string) => deleteOneProperty(id),
  });

  return {
    properties,
    isLoading,
    error,
    createProperty: createPropertyMutation.mutate,
    updateProperty: updatePropertyMutation.mutate,
    deleteProperty: deletePropertyMutation.mutate,
  };
};

export const useProperty = (id: string) => {
  return useQuery({
    queryKey: ["property", id],
    queryFn: () => getOneProperty(id),
  });
};

export const useEmployeeProperties = () => {
  const { user } = useAuth(); // Get the user from Auth context

  return useQuery({
    queryKey: ["employeeProperties", user?.id],
    queryFn: () => {
      if (!user?.id) {
        return Promise.reject(new Error("User ID is not available"));
      }
      return getAEmployeeProperties(user.id);
    },
    enabled: !!user?.id, // Only run the query if user ID is available
  });
};
