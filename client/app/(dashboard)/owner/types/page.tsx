"use client";
import ProptectedRoutes from "@/components/auth/protectedRoutes";
import Loader from "@/components/Loader";
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
import { useTypes } from "@/hooks/useTypes";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const TypesPage = () => {
  const router = useRouter();
  const [isDeleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [currentTypeId, setCurrentTypeId] = useState<string | null>(null); // Store the ID of the type to delete
  const { deleteType } = useTypes();

  const handleAddRedirect = () => {
    router.push("/owner/types/create");
  };

  let { types, isLoading, error } = useTypes();
  types = types?.data?.types;
  if (isLoading) return <Loader />;

  const handleDelete = async () => {
    if (currentTypeId) {
      await deleteType(currentTypeId);
      setCurrentTypeId(null);
      setDeleteDialogOpen(false);
      window.location.reload();
    }
  };

  return (
    <ProptectedRoutes roles={["المالك"]}>
      <div className="m-auto p-4">
        <div className="flex flex-col items-start gap-2">
          <div>
            <Button
              onClick={handleAddRedirect}
              className="text-white hover:text-white bg-[var(--green)] hover:bg-[var(--green)] font-expo-light"
            >
              إضافة نوع جديد
            </Button>
          </div>
          <div>أنواع الوحدات المتاحة:</div>
        </div>
        {Array.isArray(types) &&
          types.map((type, index) => (
            <div
              className="flex w-[300px] sm:w-[470px] justify-between items-center"
              key={index}
            >
              <div>{type.type}</div>
              <div className="flex justify-end text-[var(--textpur)]">
                <div className="flex justify-start items-start gap-2 p-2 rounded-lg">
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
                          setCurrentTypeId(type._id);
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
                        className="flex flex-col items-start"
                      >
                        <DialogTitle dir="rtl">حذف النوع</DialogTitle>
                        <DialogDescription>
                          هل أنت متأكد من حذف هذا النوع ولا يمكنك استرجاعه؟
                        </DialogDescription>
                      </DialogHeader>
                      <DialogFooter>
                        <Button
                          className="text-white hover:text-white bg-[var(--green)] hover:bg-[var(--green)] font-expo-light"
                          onClick={handleDelete}
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

export default TypesPage;
