"use client";
import ProptectedRoutes from "@/components/auth/protectedRoutes";
import { ChartComp } from "@/components/charts/analytics";
import Loader from "@/components/Loader";
import { useProperties } from "@/hooks/useProperties";
import { useUsers } from "@/hooks/userUsers";
import { Home, User } from "lucide-react";
import Link from "next/link";
import React from "react";

function ownerPage() {
  const {
    properties,
    isLoading: loadingProperties,
    error: errorProperties,
  } = useProperties();
  const { users, isLoading: loadingUsers, error: errorUsers } = useUsers();

  if (loadingProperties || loadingUsers) {
    return <Loader />;
  }

  if (errorProperties) {
    console.error(errorProperties);
    return <div>Error loading properties.</div>;
  }

  if (errorUsers) {
    console.error(errorUsers);
    return <div>Error loading users.</div>;
  }

  const propertyData = properties?.data?.properties || [];
  const userData = users?.data?.users || [];

  console.log("proppsss>>: ", propertyData);
  console.log("users>>: ", userData);
  return (
    <ProptectedRoutes roles={["المالك"]}>
      <div className="p-8 w-full flex flex-col justify-start items-center gap-4">
        <div className="flex max-md:flex-col text-[#054457] w-[80%] gap-8">
          <div className="relative wave-animation bg-[#f1f1f2] basis-1/2 flex flex-col justify-between p-6 overflow-hidden h-60 rounded-lg">
            <div className="absolute inset-0 border-4 border-green-500 rounded-lg pointer-events-none"></div>
            {/* <div className="absolute bg-white right-[-16px] top-28 w-10 h-10 rounded-full border-4 border-green-500 "></div> */}
            {/* <div className="absolute bg-white left-[-16px] top-28 w-10 h-10 rounded-full border-4 border-green-500 "></div> */}
            <h1 className="text-2xl text-[#054457]">المستخدمون</h1>
            <h1 className="text-center text-[42px]">{userData.length}</h1>
            <div className="flex justify-between items-center">
              <Link href="owner/users" className="border-b-2 border-black">
                اطلع على المستخدمين
              </Link>
              <User />
            </div>
          </div>
          <div className="relative wave-animation bg-[#f1f1f2] basis-1/2 flex flex-col justify-between p-6 overflow-hidden h-60 rounded-lg">
            <div className="absolute inset-0 border-4 border-green-500 rounded-lg pointer-events-none"></div>
            {/* <div className="absolute bg-white right-[-16px] top-28 w-10 h-10 rounded-full border-4 border-green-500 "></div> */}
            {/* <div className="absolute bg-white left-[-16px] top-28 w-10 h-10 rounded-full border-4 border-green-500 "></div> */}
            <h1 className="text-2xl text-[#054457]">الوحدات</h1>
            <h1 className="text-center text-[42px]">{propertyData.length}</h1>
            <div className="flex justify-between items-center">
              <Link href="owner/properties" className="border-b-2 border-black">
                اطلع على الوحدات
              </Link>
              <Home />
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center w-full mt-8">
          <ChartComp />
        </div>
      </div>
    </ProptectedRoutes>
  );
}

export default ownerPage;
