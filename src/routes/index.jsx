import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout";
import ProtectedRoute from "./ProtectedRoute";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";
import Dashboard from "../pages/dashboard";
import PasswordFolder from "../pages/dashboard/PasswordFolder";
import AddPassword from "../pages/dashboard/AddPassword";
import FoldersList from "../pages/dashboard/FoldersList";
import { useAuth } from "../AuthContext";

const AppRoutes = () => {
  const { isDesktop } = useAuth();
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
        <Route
          path="/dashboard/add"
          element={<ProtectedRoute element={<AddPassword />} />}
        />
        {isDesktop ? (
          <Route
            path="/dashboard/folders"
            element={<ProtectedRoute element={<Dashboard />} />}
          >
            <Route path=":folderId" element={<PasswordFolder />} />
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
