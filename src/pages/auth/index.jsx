import React from "react";
import { Outlet } from "react-router-dom";
export default function AuthLayout() {
  return (
    <div className=" h-screen w-full flex flex-col justify-center items-center ">
      <Outlet />
    </div>
  );
}
