import { NavWrapper } from "./nav-wrapper";

export const Navbar = () => {
  return (
    <NavWrapper
      logoLabel="سكـــــن"
      logoHref="/"
      routes={[
        {
          routeLabel: "ميزاتنا",
          routePath: "/",
        },

        {
          routeLabel: "الوحدات",
          routePath: "/",
        },
      ]}
    ></NavWrapper>
  );
};
