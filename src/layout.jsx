import React from "react";
import { useLocation, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
const Layout = () => {
  const location = useLocation();
  const noNavbarRoutes = ["/auth/login", "/auth/register"];
  const showNavbar = !noNavbarRoutes.includes(location.pathname);
  return (
    <React.Fragment>
      {showNavbar && <Navbar />}
      <main>
        <Outlet />
      </main>
    </React.Fragment>
  );
};

export default Layout;
