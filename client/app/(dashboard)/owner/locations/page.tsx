"use client";
import ProptectedRoutes from "@/components/auth/protectedRoutes";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useLocations } from "@/hooks/useLocations";
import { useParams, useRouter } from "next/navigation";
import React, { useState } from "react";

const page = () => {
  const router = useRouter();
  const [isDeleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [currentLocationId, setCurrentLocationId] = useState<string | null>(
    null
  );
  const handleAddRedirect = () => {
    router.push("/owner/locations/create");
  };
  const params = useParams();
  let { locations, isLoading, error } = useLocations();
  const locationId = params?.id as string;
  const { deleteLocation } = useLocations();
  console.log("locations", locations);
  locations = locations?.data?.locations;
  if (isLoading) return <div>Loading...</div>;

  const handleDelete = async () => {
    if (currentLocationId) {
      await deleteLocation(currentLocationId);
      setCurrentLocationId(null);
      setDeleteDialogOpen(false);
      window.location.reload();
    }
  };
  return (
    <ProptectedRoutes roles={["المالك"]}>
      <div className=" m-auto p-4">
        <div className="flex flex-col items-start gap-2">
          <div>
            <Button
              onClick={handleAddRedirect}
              className="text-white hover:text-white bg-[var(--green)] hover:bg-[var(--green)] font-expo-light"
            >
              إضافة مكان جديد
            </Button>
          </div>
          <div>الأماكن المتاحة:</div>
        </div>
        {Array.isArray(locations) &&
          locations.map((location, index) => (
            <div
              className="flex  w-[300px] sm:w-[470px] justify-between  items-center"
              key={index}
            >
              <div className="">{location.location}</div>
              <div className=" flex justify-end text-[var(--textpur)]">
                <div className="  flex justify-start items-start gap-2 p-2 rounded-lg  ">
                  <Button className="text-white hover:text-white bg-[var(--green)] hover:bg-[var(--green)] font-expo-light">
                    تعديل
                  </Button>

                  <Dialog
                    open={isDeleteDialogOpen}
                    onOpenChange={setDeleteDialogOpen}
                  >
                    <DialogTrigger asChild>
                      <Button
                        onClick={() => {
                          setCurrentLocationId(location._id);
                          setDeleteDialogOpen(true);
                        }}
                        className="text-white hover:text-white bg-[var(--green)] hover:bg-[var(--green)] font-expo-light"
                      >
                        حذف
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader
                        dir="rtl"
                        className=" flex flex-col items-start "
                      >
                        <DialogTitle dir="rtl">حذف المكان</DialogTitle>
                        <DialogDescription>
                          هل أنت متأكد من حذف هذاالمكان ولا يمكنك استرجاعه ؟
                        </DialogDescription>
                      </DialogHeader>
                      <DialogFooter>
                        <Button
                          className="text-white hover:text-white bg-[var(--green)] hover:bg-[var(--green)] font-expo-light"
                          onClick={() => {
                            handleDelete();
                          }}
                        >
                          حذف
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </div>
          ))}
      </div>
    </ProptectedRoutes>
  );
};

export default page;
