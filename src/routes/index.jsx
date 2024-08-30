import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";
import Dashboard from "../pages/dashboard";
import PasswordFolder from "../pages/dashboard/PasswordFolder";
import AddPassword from "../pages/dashboard/AddPassword";
import FoldersList from "../pages/dashboard/FoldersList";
import { useAuth } from "../AuthContext";
import useVerifyToken from "../hooks/useVerifyToken";

const AppRoutes = () => {
  const { isDesktop,login } = useAuth();
  const {mutate}=useVerifyToken(login);
 useEffect(()=>{
    mutate(localStorage.getItem("access_token"))
 },[])
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route
          path="/auth/login"
          element={<PublicRoute element={<Login />} />}
        />
        <Route
          path="/auth/register"
          element={<PublicRoute element={<Register />} />}
        />
        <Route
          path="/dashboard/add"
          element={<ProtectedRoute element={<AddPassword />} />}
        />
        {isDesktop ? (
          <Route
            path="/dashboard/folders"
            element={<ProtectedRoute element={<Dashboard />} />}
          >
            <Route
              path=":folderId"
              element={<ProtectedRoute element={<PasswordFolder />} />}
            />
          </Route>
        ) : (
          <>
            <Route
              path="/dashboard/folders"
              element={<ProtectedRoute element={<FoldersList />} />}
            />
            <Route
              path="/dashboard/folders/:folderId"
              element={
                <section className="container">
                  <PasswordFolder />
                </section>
              }
            />
          </>
        )}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
