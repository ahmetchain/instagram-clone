import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/sidebar"; 
export default function InboxLayout() {
  return (
    <div className="flex border border-gray-300   h-[calc(100vh-141px)]">
      <Sidebar />
      <Outlet />
    </div>
  );
}
