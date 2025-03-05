import { cn } from "@/lib/utils";
import { Logo } from "../dashboard/logo";
import { SidebarRoutes } from "./sidebar-routes";
import { usePathname } from "next/navigation";

export const Sidebar = () => {
  const path = usePathname();
  const isUserPage = path.includes("user/properties");
  return (
    <div
      dir="rtl"
      className={cn(
        "h-full font-bold border-r flex flex-col pt-4 gap-y-8 bg-[#f1f1f2]",
        isUserPage && `hidden`
      )}
    >
      <div>
        <Logo />
      </div>
      <SidebarRoutes />
    </div>
  );
};
