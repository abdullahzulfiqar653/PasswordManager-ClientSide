import React from "react";
import { useLocation, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import AuthNavbar from "../components/AuthNavbar";
const Layout = () => {
  const location = useLocation();
  const isAuth = true;
  const noNavbarRoutes = ["/auth/login", "/auth/register"];
  const showNavbar = !noNavbarRoutes.includes(location.pathname);
  return (
    <React.Fragment>
      {showNavbar && (isAuth ? <AuthNavbar /> : <Navbar />)}
      <main>
        <Outlet />
      </main>
    </React.Fragment>
  );
};

export default Layout;
