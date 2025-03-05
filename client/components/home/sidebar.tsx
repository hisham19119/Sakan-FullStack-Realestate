import { Logo } from "../dashboard/logo";
import { SidebarRoutes } from "./sidebar-routes";

export const Sidebar = () => {
  return (
    <div
      dir="rtl"
      className="h-full font-bold border-r flex flex-col pt-4 gap-y-8 bg-[#f1f1f2] "
    >
      <div>
        <Logo />
      </div>
      <SidebarRoutes />
    </div>
  );
};
