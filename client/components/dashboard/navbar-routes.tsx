"use client";
import { LogOutIcon } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "../ui/button";
// import SearchInput from "./search-input";
import React from "react";
import { cn } from "@/lib/utils";
import { useAuth } from "@/context/AuthContext";
import toast from "react-hot-toast";

const NavbarRoutes = () => {
  const { logout, user } = useAuth();

  const pathname = usePathname();
  const router = useRouter();
  const isOwnerPage = pathname?.includes("/owner");
  const isEmployeePage = pathname?.includes("/employee");

  const handleLogout = async () => {
    try {
      await logout();
      toast.success("تم تسجيل خروجك بنجاح !");
      console.log("تم تسجيل خروجك بنجاح !");
      router.push("/");
    } catch (error) {
      console.error("Error:", error);
      toast.error("فشل تسجيل الخروج");
    }
  };
  return (
    <div
      className={cn(
        "ml-auto flex justify-between items-center ",
        !(isEmployeePage || isOwnerPage) && `justify-end`
      )}
    >
      {(isOwnerPage || isEmployeePage) && (
        <div>
          <Link href="/employee/create">
            <Button className="sm flex gap-x-2 text-white max-sm:ml-1 bg-[#49da7d] hover:bg-[#49da7d]">
              إنشاء وحدة جديدة
            </Button>
          </Link>
        </div>
      )}
      <div className="flex gap-2 items-center">
        {/* <Link href="/"> */}

        {user ? (
          <>
            <Button
              className="sm flex gap-x-2 "
              variant="outline"
              onClick={handleLogout}
            >
              <LogOutIcon />
              <p className="hidden md:block ">تسجيل الخروج</p>
            </Button>

            <div className="rounded-full w-[40px] h-[40px] bg-[var(--green)] text-white flex justify-center items-center font-bold">
              {user?.email.slice(0, 2).toUpperCase()}
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default NavbarRoutes;
