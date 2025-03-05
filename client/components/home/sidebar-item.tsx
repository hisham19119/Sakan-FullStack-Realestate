import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

interface sidebarItemProps {
  label: String;
}

const SidebarItem = ({ label }: sidebarItemProps) => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <button
      type="button"
      className={cn(
        "flex pr-2 items-center gap-x-2 text-[#054457] text-sm font-[500]   transition-all hover:text-[#054457] relative ",
        `text-slate-950  hover:bg-[#b5e9d7] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 hover:before:bg-[#49da7d]`
      )}
    >
      <div className={cn("flex items-center gap-x-2 w-full py-4 ")}>
        {label}
      </div>
    </button>
  );
};

export default SidebarItem;
