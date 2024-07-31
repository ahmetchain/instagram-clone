import React from "react";
import { Outlet } from "react-router-dom";

export default function InboxLayout() {
  return (
    <div className="flex border border-gray-300   h-[calc(100vh-141px)]">
      <Outlet />
    </div>
  );
}
