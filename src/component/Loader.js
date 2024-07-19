import React from "react";
import { FaInstagram } from "react-icons/fa";
export default function Loader() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-zinc-50 text-pink-600 fixed top-0  left-0">
     <FaInstagram size={100} />
     <div className="text-2xl font-semibold">Instagram</div>
    </div>
  );
}
