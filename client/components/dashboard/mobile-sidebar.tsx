import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "../ui/sheet";
import { SidebarRoutes } from "./sidebar-routes";
import { Sidebar } from "./sidebar";

export const MobileSidebar = () => {
  return (
    <div className="md:hidden ">
      <Sheet>
        <SheetTrigger className="md:hidden pl-4 hover:opacity-75 transition ">
          <Menu />
        </SheetTrigger>
        <SheetContent side="right" className="p-0">
          <Sidebar />
        </SheetContent>
      </Sheet>
    </div>
  );
};
