import React from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

interface ProtectedRoutesProps {
  children: React.ReactNode;
  roles: string[];
}

const ProptectedRoutes = ({ children, roles }: ProtectedRoutesProps) => {
  const { user } = useAuth();
  const router = useRouter();

  if (!user || !user.role) {
    console.log("useeeeeeeerr", user);
    router.push("/unauthorized");
    return null;
  }
  return <>{children}</>;
};

export default ProptectedRoutes;
