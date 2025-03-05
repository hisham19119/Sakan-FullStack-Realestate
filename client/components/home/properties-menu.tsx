"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface propertyDropMenuItems {
  labels: string[];
}

export function PropertyDropdownMenuDemo({ labels }: propertyDropMenuItems) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">شقة</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="max-h-52 overflow-y-auto">
        <DropdownMenuGroup className="[&>*]:flex [&>*]:justify-center">
          {labels.map((item, index) => (
            <DropdownMenuItem key={index}>{item}</DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
