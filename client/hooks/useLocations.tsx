import { useMutation, useQuery } from "@tanstack/react-query";

import {
  getAllLocations,
  getOneLocation,
  createLocation,
  updateLocation,
  deleteLocation,
} from "../apis/locations";

export const useLocations = () => {
  const {
    data: locations,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["locations"],
    queryFn: getAllLocations,
  });
  const getLocationMutation = useMutation({
    mutationFn: getOneLocation,
  });
  const createLocationMutation = useMutation({
    mutationFn: createLocation,
  });

  const updateLocationMutation = useMutation({
    mutationFn: ({ id, location }: { id: string; location: string }) =>
      updateLocation(id, location),
  });

  const deleteLocationMutation = useMutation({
    mutationFn:(id:string)=> deleteLocation(id),
  });

  return {
    locations,
    isLoading,
    error,
    createLocation: createLocationMutation.mutate,
    getOneLocation: getLocationMutation.mutate,
    updateLocation: updateLocationMutation.mutate,
    deleteLocation: deleteLocationMutation.mutate,
  };
};
