import React from "react";
const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen w-full bg-black/50 ">
      <div className="w-16 h-16 border-4 border-[var(--green)] border-t-transparent rounded-full animate-spin "></div>
    </div>
  );
};
export default Loader;
