"use client";
import Navbar from "@/components/dashboard/navbar";
import { Sidebar } from "@/components/dashboard/sidebar";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export default function dashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const path = usePathname();
  const isUserPage = path?.includes("user/properties");
  return (
    <div className="h-screen  " dir="rtl">
      <div
        className={cn(
          "w-full h-[80px] bg-[#f1f1f2]  fixed inset-y-0 md:pr-20 z-20",
          isUserPage && `w-full p-4`
        )}
      >
        <Navbar />
      </div>
      <div
        className={cn(
          " max-md:hidden fixed inset-y-0 w-56   h-full z-30 ",
          isUserPage && `hidden`
        )}
      >
        <Sidebar />
      </div>
      <main
        dir="rtl"
        className={cn(
          "md:pr-56 pt-[80px] h-full  ",
          isUserPage && `p-x-4 p-y-[80px]  md:pr-0  `
        )}
      >
        {children}
      </main>
    </div>
  );
}
