import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

interface sidebarItemProps {
  icon: LucideIcon;
  label: String;
  href: string;
}

const SidebarItem = ({ icon: Icon, label, href }: sidebarItemProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const isActive = (pathname === "/" && href === "/") || pathname === href;
  const handleOnClick = () => {
    router.push(href);
  };

  return (
    <button
      type="button"
      onClick={handleOnClick}
      className={cn(
        "flex pr-2 items-center gap-x-2 text-[#054457] text-sm font-[500]   transition-all hover:text-[#054457] relative ",
        isActive &&
          `text-slate-950 bg-[#b5e9d7] hover:bg-[#b5e9d7] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-[#49da7d]`
      )}
    >
      <div
        className={cn("flex items-center gap-x-2 w-full py-4 ", isActive && "")}
      >
        <Icon
          size={22}
          className={cn(
            "",
            isActive && `text-[var(--textpur)] bg-[var(--item)]`
          )}
        />
        {label}
      </div>
      {/* <div
        className={cn(
          "border-2 ",
          isActive && `border-[var(--textpur)] h-full `
        )}
      /> */}
    </button>
  );
};

export default SidebarItem;
