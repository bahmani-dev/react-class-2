import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <div className="h-[100vh] w-[100%] bg-slate-700">
      <Header />
      <Outlet />

      <div className="bg-black ">Copyright &copy; 2018</div>
    </div>
  );
};
