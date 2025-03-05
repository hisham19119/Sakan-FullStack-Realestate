"use client";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import { useProperties, useProperty } from "@/hooks/useProperties";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Loader from "@/components/Loader";
const PropertyIdpage = () => {
  const router = useRouter();
  const params = useParams();
  console.log("Params:", params);

  const id = params?.propertyId as string;
  console.log("Property ID:", id);
  let { data: property, isLoading, error } = useProperty(id);
  const { deleteProperty } = useProperties();
  const [isDeleteDialogOpen, setDeleteDialogOpen] = useState(false);
  if (isLoading) return <Loader />;

  if (error)
    return <p className="text-center text-red-500">Error loading property</p>;

  if (!property)
    return <p className="text-center text-gray-500">Property not found</p>;

  console.log(property);
  property = property.data.property;
  console.log("property >><<<", property);

  const handleUpdate = (propertyId: string) => {
    router.push(`/owner/properties/${propertyId}/update/${propertyId}`);
    console.log("routing to there");
  };

  const handleDelete = async (id: string) => {
    await deleteProperty(id);
    router.push("/owner/properties/");
    console.log("deleting", id);
    setDeleteDialogOpen(false);
  };

  return (
    <div className=" py-5 px-5 md:px-20 flex flex-col items-center gap-6 h-fit">
      <div className="w-4/5  flex justify-center items-center basis-4/5 ">
        <Carousel
          opts={{
            loop: true,
            align: "center",
          }}
          className="sm:w-[450px] md:w-[700px] sm:h-[300px] md:h-[500px] rounded-lg border-[var(--green)] border-[1px]"
        >
          <CarouselContent className="flex">
            {Array.isArray(property.images) &&
              property.images.map((image: any, index: any) => (
                <CarouselItem key={index} className=" flex justify-center">
                  <img
                    src={image}
                    alt={property.title}
                    className="object-cover  sm:w-[450px] md:w-[700px] sm:h-[300px] md:h-[500px] rounded-lg"
                    loading="lazy"
                  />
                </CarouselItem>
              ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:block absolute  top-1/2 -translate-y-1/2 fill-black bg-[var(--green)] hover:bg-[var(--green)] text-white hover:text-white" />
          <CarouselNext className="hidden sm:block absolute  top-1/2 -translate-y-1/2 fill-black bg-[var(--green)] hover:bg-[var(--green)] text-white hover:text-white" />
        </Carousel>
      </div>
      <div className="bg-[#f1f1f2] w-full flex flex-col justify-start items-start gap-y-2 rounded-lg ">
        <div className="w-full flex justify-start items-start text-[var(--textpur)] text-lg font-bold">
          <h1 className="text-[var(--green)] font-expo-logo p-2 rounded-lg ">
            {property.title}
          </h1>
        </div>
        <div className="w-full flex justify-start text-[var(--textpur)]">
          <p className="  p-2 rounded-lg text-sm text-[var(--darkgreen)] font-expo-light ">
            <span className="text-md text-[var(--textpur)] font-expo-light pl-2">
              وصف:
            </span>
            {property.description}
          </p>
        </div>
        <div className="w-full flex justify-start text-[var(--textpur)]">
          <p className="  p-2 rounded-lg text-sm text-[var(--darkgreen)] font-expo-light">
            <span className="text-md text-[var(--textpur)] font-expo-light pl-2">
              النوع :
            </span>
            {property.type.type}
          </p>
        </div>
        <div className="w-full flex justify-start text-[var(--textpur)]">
          <p className="  p-2 rounded-lg text-sm text-[var(--darkgreen)] font-expo-light">
            <span className="text-md text-[var(--textpur)] font-expo-light pl-2">
              السعر:
            </span>
            {property.price} جنيه
          </p>
        </div>
        <div className="w-full flex justify-start text-[var(--textpur)]">
          <p className="  p-2 rounded-lg text-sm text-[var(--darkgreen)] font-expo-light">
            <span className="text-md text-[var(--textpur)] font-expo-light pl-2">
              الموقع:
            </span>
            {property.location.location}
          </p>
        </div>
        <div className="w-full flex justify-start text-[var(--textpur)]">
          <p className="  p-2 rounded-lg text-sm text-[var(--darkgreen)] font-expo-light">
            <span className="text-md text-[var(--textpur)] font-expo-light pl-2">
              عدد الغرف:
            </span>
            {property.rooms}
          </p>
        </div>
        <div className="w-full flex justify-start text-[var(--textpur)]">
          <p className="  p-2 rounded-lg text-sm text-[var(--darkgreen)] font-expo-light">
            <span className="text-md text-[var(--textpur)] font-expo-light pl-2">
              المساحة:
            </span>
            {property.area} م<sup>2</sup>
          </p>
        </div>
        <div className="w-full flex justify-start text-[var(--textpur)]">
          <p className="  p-2 rounded-lg text-sm text-[var(--darkgreen)] font-expo-light">
            <span className="text-md text-[var(--textpur)] font-expo-light pl-2">
              عدد الحمامات:
            </span>
            {property.bathrooms}
          </p>
        </div>

        <div className="w-full flex justify-start text-[var(--textpur)]">
          <p className="  p-2 rounded-lg text-sm text-[var(--darkgreen)] font-expo-light">
            <span className="text-md text-[var(--textpur)] font-expo-light pl-2">
              أماكن لركن السيارة:
            </span>
            {property.garages}
          </p>
        </div>
        <div className="w-full flex justify-start text-[var(--textpur)]">
          <p className="  p-2 rounded-lg text-sm text-[var(--darkgreen)] font-expo-light">
            <span className="text-md text-[var(--textpur)] font-expo-light pl-2">
              للتواصل :
            </span>
            {property.phone}
          </p>
        </div>

        <div className="w-full flex justify-start text-[var(--textpur)]">
          <div className=" w-full flex justify-start items-start gap-2 p-2 rounded-lg  ">
            <Button
              onClick={() => {
                handleUpdate(property._id);
              }}
              className="text-white hover:text-white bg-[var(--green)] hover:bg-[var(--green)] font-expo-light"
            >
              تعديل
            </Button>

            <Dialog
              open={isDeleteDialogOpen}
              onOpenChange={setDeleteDialogOpen}
            >
              <DialogTrigger asChild>
                <Button
                  onClick={() => setDeleteDialogOpen(true)}
                  className="text-white hover:text-white bg-[var(--green)] hover:bg-[var(--green)] font-expo-light"
                >
                  حذف
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader dir="rtl" className=" flex flex-col items-start ">
                  <DialogTitle dir="rtl">حذف الوحدة</DialogTitle>
                  <DialogDescription>
                    هل أنت متأكد من حذف هذه الوحدة ولا يمكنك استرجاعها ؟
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <Button
                    className="text-white hover:text-white bg-[var(--green)] hover:bg-[var(--green)] font-expo-light"
                    onClick={() => {
                      handleDelete(property._id);
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
    </div>
  );
};

export default PropertyIdpage;
