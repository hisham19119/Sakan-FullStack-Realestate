"use client";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";
import { MobileSidebar } from "./mobile-sidebar";
import NavbarRoutes from "./navbar-routes";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const path = usePathname();
  const isUserPage = path?.includes("user/properties");
  return (
    <div className="w-full h-full flex items-center justify-between p-4 ">
      <div
        className={cn(
          "basis-1/5 ",
          isUserPage && `flex justify-start items-center`
        )}
      >
        {isUserPage ? <Logo /> : <MobileSidebar />}
      </div>
      <div className="basis-4/5 ">
        <NavbarRoutes />
      </div>
    </div>
  );
};

export default Navbar;
