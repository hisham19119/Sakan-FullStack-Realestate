import Link from "next/link";
import React from "react";

export default function UnAuthorized() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full font-expo-bold">
      404 | UnAuthorized...
      <hr />
      <Link href="/" className="text-[var(--green)]">
        انتقل إلى الرئيسية
      </Link>
    </div>
  );
}
