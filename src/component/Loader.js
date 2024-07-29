import React from "react";
import { FaInstagram } from "react-icons/fa";
import InstagramLogo from "Icon/instagram-logo.png";
import Meta from "Icon/meta.png";
export default function Loader() {
  return (
    <div className="flex flex-col items-center justify- h-full w-full bg-zinc-50 text-pink-600 fixed top-0  left-0">
      <div className="flex flex-col items-center h-full justify-center">
        <img src={InstagramLogo} className="w-20 h-20 my-auto" />
        <img className="mb-10" src={Meta} width={70}  />
      </div>
    </div>
  );
}
