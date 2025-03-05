"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PropertyCraeteSchema } from "@/schemas";
import { Pencil } from "lucide-react";
import { useProperties } from "@/hooks/useProperties";

const OwnerUpdatePage = () => {
  const { createProperty } = useProperties();
  const form = useForm<z.infer<typeof PropertyCraeteSchema>>({
    resolver: zodResolver(PropertyCraeteSchema),
    defaultValues: {
      title: "",
      description: "",
      price: 0,
      location: "",
      image: undefined,
      images: [],
      rooms: 0,
      area: 0,
      bathrooms: 0,
      garages: 0,
      type: "",
      phone: "",
    },
  });

  const [isEditing, setIsEditing] = useState({
    title: false,
    description: false,
    price: false,
    location: false,
    image: false,
    images: false,
    rooms: false,
    area: false,
    bathrooms: false,
    garages: false,
    type: false,
    phone: false,
  });

  const handleEditToggle = (field: keyof typeof isEditing) => {
    setIsEditing((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const handleSubmit = async (data: any) => {
    createProperty(data, {
      onSuccess: () => {},
      onError: (error) => {
        console.error("Error creating owner:", error);
      },
    });
  };

  return (
    <div className="p-4  h-fit text-[12px]">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="w-full h-full"
        >
          <div className="  flex-col w-full h-full gap-4">
            <div className=" flex  lg:flex-row flex-col  gap-4 ">
              <div className=" basis-1/2 flex flex-col gap-4 p-4  ">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem className="flex bg-[#f1f1f2] flex-col gap-4 rounded-lg p-4">
                      <div className="flex justify-between items-center">
                        <FormLabel>العنوان الرئيسي</FormLabel>
                        <button
                          type="button"
                          onClick={() => handleEditToggle("title")}
                          className="mr-2"
                        >
                          {isEditing.title ? (
                            <button className="py-1 px-4 rounded-md font-expo-light text-white bg-[var(--green)]">
                              حفظ
                            </button>
                          ) : (
                            <span className="flex items-center ">
                              تعديل
                              <Pencil className="h-4 w-4 mr-2" />
                            </span>
                          )}
                        </button>
                      </div>
                      <FormControl className="px-8">
                        {isEditing.title ? (
                          <Input
                            {...field}
                            placeholder="شقة تطل على منظر رائع"
                            type="text"
                          />
                        ) : (
                          <div>{field.value}</div>
                        )}
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="location"
                  render={({ field }) => (
                    <FormItem className="flex bg-[#f1f1f2] flex-col gap-4 rounded-lg p-4">
                      <div className="flex justify-between items-center">
                        <FormLabel>المكان</FormLabel>
                        <button
                          type="button"
                          onClick={() => handleEditToggle("location")}
                          className="mr-2"
                        >
                          {isEditing.location ? (
                            <button className="py-1 px-4 rounded-md font-expo-light text-white bg-[var(--green)]">
                              save
                            </button>
                          ) : (
                            <span className="flex items-center ">
                              تعديل
                              <Pencil className="h-4 w-4 mr-2" />
                            </span>
                          )}
                        </button>
                      </div>
                      <FormControl className="px-8">
                        {isEditing.location ? (
                          <Input {...field} placeholder="المعادي" type="text" />
                        ) : (
                          <div>{field.value}</div>
                        )}
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="type"
                  render={({ field }) => (
                    <FormItem className="flex bg-[#f1f1f2] flex-col gap-4 rounded-lg p-4">
                      <div className="flex justify-between items-center">
                        <FormLabel>النوع</FormLabel>
                        <button
                          type="button"
                          onClick={() => handleEditToggle("type")}
                          className="mr-2"
                        >
                          {isEditing.type ? (
                            <button className="py-1 px-4 rounded-md font-expo-light text-white bg-[var(--green)]">
                              save
                            </button>
                          ) : (
                            <span className="flex items-center ">
                              تعديل
                              <Pencil className="h-4 w-4 mr-2" />
                            </span>
                          )}
                        </button>
                      </div>
                      <FormControl className="px-8">
                        {isEditing.type ? (
                          <Input {...field} placeholder="دوبليكس" type="text" />
                        ) : (
                          <div>{field.value}</div>
                        )}
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem className="flex bg-[#f1f1f2] flex-col gap-4 rounded-lg p-4">
                      <div className="flex justify-between items-center">
                        <FormLabel>وصف الوحدة</FormLabel>
                        <button
                          type="button"
                          onClick={() => handleEditToggle("description")}
                          className="mr-2"
                        >
                          {isEditing.description ? (
                            <button className="py-1 px-4 rounded-md font-expo-light text-white bg-[var(--green)]">
                              save
                            </button>
                          ) : (
                            <span className="flex items-center">
                              تعديل
                              <Pencil className="h-4 w-4 mr-2" />
                            </span>
                          )}
                        </button>
                      </div>
                      <FormControl className="px-8">
                        {isEditing.description ? (
                          <textarea
                            {...field}
                            placeholder="إذا كنت من محبي المساحات الواسعة..."
                            className="h-24 resize-y overflow-auto p-2 border  rounded"
                            rows={4}
                          />
                        ) : (
                          <div
                            className="text-wrap break-words overflow-hidden   max-sm:max-w-[300px]  sm:max-w-[400px] md:max-w-[500px]  m-auto"
                            // style={{ maxHeight: "100px" }}
                          >
                            {field.value}
                          </div>
                        )}
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="image"
                  render={({ field }) => (
                    <FormItem className="flex bg-[#f1f1f2] flex-col gap-4 rounded-lg p-4">
                      <div className="flex justify-between items-center">
                        <FormLabel>صورة الغلاف</FormLabel>
                        <button
                          type="button"
                          onClick={() => handleEditToggle("image")}
                          className="mr-2"
                        >
                          {isEditing.image ? (
                            <button className="py-1 px-4 rounded-md font-expo-light text-white bg-[var(--green)]">
                              save
                            </button>
                          ) : (
                            <span className="flex items-center">
                              تعديل
                              <Pencil className="h-4 w-4 mr-2" />
                            </span>
                          )}
                        </button>
                      </div>
                      <FormControl className="px-8">
                        {isEditing.image ? (
                          <Input
                            type="file"
                            accept="image/*"
                            onChange={(event) => {
                              const file = event.target.files?.[0];
                              field.onChange(file);
                            }}
                          />
                        ) : (
                          <div>
                            {field.value
                              ? "Image uploaded"
                              : "No image uploaded"}
                          </div>
                        )}
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="images"
                  render={({ field }) => (
                    <FormItem className="flex bg-[#f1f1f2] flex-col gap-4 rounded-lg p-4">
                      <div className="flex justify-between items-center">
                        <FormLabel>صور إضافية</FormLabel>
                        <button
                          type="button"
                          onClick={() => handleEditToggle("images")}
                          className="mr-2"
                        >
                          {isEditing.images ? (
                            <button className="py-1 px-4 rounded-md font-expo-light text-white bg-[var(--green)]">
                              save
                            </button>
                          ) : (
                            <span className="flex items-center">
                              تعديل
                              <Pencil className="h-4 w-4 mr-2" />
                            </span>
                          )}
                        </button>
                      </div>
                      <FormControl className="px-8">
                        {isEditing.images ? (
                          <Input
                            type="file"
                            accept="image/*"
                            multiple
                            onChange={(event) => {
                              const files = event.target.files;
                              if (files) {
                                const fileArray = Array.from(files);
                                field.onChange(fileArray);
                              }
                            }}
                          />
                        ) : (
                          <div>
                            {(field.value || []).length > 0
                              ? "Images uploaded"
                              : "No images uploaded"}
                          </div>
                        )}
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem className="flex bg-[#f1f1f2] flex-col gap-4 rounded-lg p-4">
                      <div className="flex justify-between items-center">
                        <FormLabel>رقم الهاتف</FormLabel>
                        <button
                          type="button"
                          onClick={() => handleEditToggle("phone")}
                          className="mr-2"
                        >
                          {isEditing.phone ? (
                            <button className="py-1 px-4 rounded-md font-expo-light text-white bg-[var(--green)]">
                              حفظ
                            </button>
                          ) : (
                            <span className="flex items-center ">
                              تعديل
                              <Pencil className="h-4 w-4 mr-2" />
                            </span>
                          )}
                        </button>
                      </div>
                      <FormControl className="px-8">
                        {isEditing.phone ? (
                          <Input
                            {...field}
                            placeholder="01028858104"
                            type="text"
                          />
                        ) : (
                          <div>{field.value}</div>
                        )}
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="  basis-1/2 flex flex-col gap-4 p-4  ">
                <FormField
                  control={form.control}
                  name="price"
                  render={({ field }) => (
                    <FormItem className="bg-[#f1f1f2] flex flex-col gap-4 rounded-lg p-4">
                      <div className="flex justify-between items-center">
                        <FormLabel>السعر</FormLabel>
                        <button
                          type="button"
                          onClick={() => handleEditToggle("price")}
                          className="mr-2"
                        >
                          {isEditing.price ? (
                            <button className="py-1 px-4 rounded-md font-expo-light text-white bg-[var(--green)]">
                              save
                            </button>
                          ) : (
                            <span className="flex items-center">
                              تعديل
                              <Pencil className="h-4 w-4 mr-2" />
                            </span>
                          )}
                        </button>
                      </div>
                      <FormControl className="px-8">
                        {isEditing.price ? (
                          <Input
                            {...field}
                            placeholder="900000"
                            type="number"
                            onChange={(e) => {
                              const value = e.target.value;
                              field.onChange(value ? parseFloat(value) : 0);
                            }}
                          />
                        ) : (
                          <div>{field.value}</div>
                        )}
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="rooms"
                  render={({ field }) => (
                    <FormItem className="flex bg-[#f1f1f2] flex-col gap-4 rounded-lg p-4">
                      <div className="flex justify-between items-center">
                        <FormLabel>عدد الغرف</FormLabel>
                        <button
                          type="button"
                          onClick={() => handleEditToggle("rooms")}
                          className="mr-2"
                        >
                          {isEditing.rooms ? (
                            <button className="py-1 px-4 rounded-md font-expo-light text-white bg-[var(--green)]">
                              save
                            </button>
                          ) : (
                            <span className="flex items-center">
                              تعديل
                              <Pencil className="h-4 w-4 mr-2" />
                            </span>
                          )}
                        </button>
                      </div>
                      <FormControl className="px-8">
                        {isEditing.rooms ? (
                          <Input
                            {...field}
                            placeholder="3"
                            type="number"
                            onChange={(e) => {
                              const value = e.target.value;
                              field.onChange(value ? parseFloat(value) : 0);
                            }}
                          />
                        ) : (
                          <div>{field.value}</div>
                        )}
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="bathrooms"
                  render={({ field }) => (
                    <FormItem className="flex bg-[#f1f1f2] flex-col gap-4 rounded-lg p-4">
                      <div className="flex justify-between items-center">
                        <FormLabel>الحمامات</FormLabel>
                        <button
                          type="button"
                          onClick={() => handleEditToggle("bathrooms")}
                          className="mr-2"
                        >
                          {isEditing.bathrooms ? (
                            <button className="py-1 px-4 rounded-md font-expo-light text-white bg-[var(--green)]">
                              save
                            </button>
                          ) : (
                            <span className="flex items-center">
                              تعديل
                              <Pencil className="h-4 w-4 mr-2" />
                            </span>
                          )}
                        </button>
                      </div>
                      <FormControl className="px-8">
                        {isEditing.bathrooms ? (
                          <Input
                            {...field}
                            placeholder="2"
                            type="number"
                            onChange={(e) => {
                              const value = e.target.value;
                              field.onChange(value ? parseFloat(value) : 0);
                            }}
                          />
                        ) : (
                          <div>{field.value}</div>
                        )}
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="garages"
                  render={({ field }) => (
                    <FormItem className="flex bg-[#f1f1f2] flex-col gap-4 rounded-lg p-4">
                      <div className="flex justify-between items-center">
                        <FormLabel>عدد أماكن الركن</FormLabel>
                        <button
                          type="button"
                          onClick={() => handleEditToggle("garages")}
                          className="mr-2"
                        >
                          {isEditing.garages ? (
                            <button className="py-1 px-4 rounded-md font-expo-light text-white bg-[var(--green)]">
                              save
                            </button>
                          ) : (
                            <span className="flex items-center">
                              تعديل
                              <Pencil className="h-4 w-4 mr-2" />
                            </span>
                          )}
                        </button>
                      </div>
                      <FormControl className="px-8">
                        {isEditing.garages ? (
                          <Input
                            {...field}
                            placeholder="1"
                            type="number"
                            onChange={(e) => {
                              const value = e.target.value;
                              field.onChange(value ? parseFloat(value) : 0);
                            }}
                          />
                        ) : (
                          <div>{field.value}</div>
                        )}
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="area"
                  render={({ field }) => (
                    <FormItem className="flex bg-[#f1f1f2] flex-col gap-4 rounded-lg p-4">
                      <div className="flex justify-between items-center">
                        <FormLabel>المساحة</FormLabel>
                        <button
                          type="button"
                          onClick={() => handleEditToggle("area")}
                          className="mr-2"
                        >
                          {isEditing.area ? (
                            <button className="py-1 px-4 rounded-md font-expo-light text-white bg-[var(--green)]">
                              save
                            </button>
                          ) : (
                            <span className="flex items-center">
                              تعديل
                              <Pencil className="h-4 w-4 mr-2" />
                            </span>
                          )}
                        </button>
                      </div>
                      <FormControl className="px-8">
                        {isEditing.area ? (
                          <Input
                            {...field}
                            placeholder="144"
                            type="number"
                            onChange={(e) => {
                              const value = e.target.value;
                              field.onChange(value ? parseFloat(value) : 0);
                            }}
                          />
                        ) : (
                          <div>{field.value}</div>
                        )}
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <div className="flex items-center w-full justify-center">
              <button
                type="submit"
                className="mt-4 bg-[var(--green)] w-60 py-2 font-expo-light rounded-lg text-white"
              >
                حفظ
              </button>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default OwnerUpdatePage;
