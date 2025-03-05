"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
interface LocationDropdownMenuItems {
  labels: string[];
  onSelect: (location: string) => void;
}

export function LocationDropdownMenuDemo({
  labels,
  onSelect,
}: LocationDropdownMenuItems) {
  const [selected, setSelected] = useState(labels[0]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">{selected}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="max-h-52 overflow-y-auto">
        <DropdownMenuGroup className="[&>*]:flex [&>*]:justify-center">
          {labels.map((item, index) => (
            <DropdownMenuItem
              key={index}
              onSelect={() => {
                setSelected(item);
                onSelect(item);
              }}
            >
              {item}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
