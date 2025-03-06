"use client";
import ProptectedRoutes from "@/components/auth/protectedRoutes";
import { DataTableDemo } from "@/components/users/table";
const UsersPage = () => {
  return (
    <ProptectedRoutes roles={["المالك"]}>
      <div className="flex flex-col justify-center items-center mx-24  my-12">
        <DataTableDemo />
      </div>
    </ProptectedRoutes>
  );
};

export default UsersPage;
