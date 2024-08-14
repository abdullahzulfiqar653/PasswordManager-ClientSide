import React from "react";
import { useLocation, Outlet } from "react-router-dom";
import { useAuth } from '../AuthContext';
import Navbar from "../components/Navbar";

import AuthNavbar from "../components/AuthNavbar";
const Layout = () => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();
  const noNavbarRoutes = ["/auth/login", "/auth/register"];
  const showNavbar = !noNavbarRoutes.includes(location.pathname);
  return (
    <React.Fragment>
      {showNavbar && (isAuthenticated ? <AuthNavbar /> : <Navbar />)}
      <main>
        <Outlet />
      </main>
    </React.Fragment>
  );
};

export default Layout;
