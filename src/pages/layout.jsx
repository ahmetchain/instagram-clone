import Header from "component/Header";
import React from "react";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div>
      <Header />
      <div className="container mx-auto pt-10">
        <Outlet />
      </div>
    </div>
  );
}
