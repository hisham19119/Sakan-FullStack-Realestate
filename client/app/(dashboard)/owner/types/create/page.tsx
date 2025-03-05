"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { useTypes } from "@/hooks/useTypes";
import ProptectedRoutes from "@/components/auth/protectedRoutes";

const AddTypePage = () => {
  const { createType } = useTypes();
  const [typeName, setTypeName] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    createType(typeName, {
      onSuccess: () => {
        setTypeName("");
      },
      onError: (error) => {
        console.error("Error creating type:", error);
      },
    });
  };

  return (
    <ProptectedRoutes roles={["المالك"]}>
      <div className="flex justify-center items-center w-full h-full">
        <div className="bg-[#f1f1f2] w-[300px] rounded-lg sm:w-[450px] md:w-[600px] p-10 flex flex-col items-start justify-center gap-4 shadow-lg shadow-[var(--green)]">
          <h1 className="font-expo-logo text-[var(--darkgreen)]">أضف نوع</h1>
          <form onSubmit={handleSubmit} className="w-full">
            <Input
              placeholder="توين هاوس"
              value={typeName}
              onChange={(e) => setTypeName(e.target.value)}
              className="placeholder:pr-1 placeholder:text-gray-400 border border-gray-400"
            />
            <div className="flex items-center justify-center w-full">
              <button
                type="submit"
                className="mt-4 bg-[var(--green)] w-60 py-2 font-expo-light rounded-lg text-white"
              >
                إنشاء
              </button>
            </div>
          </form>
        </div>
      </div>
    </ProptectedRoutes>
  );
};

export default AddTypePage;
