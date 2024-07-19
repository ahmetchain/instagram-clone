import React from "react";
import { logoutHandle } from "firebase.js";
import { Link } from "react-router-dom";
import Search from "./Search";

export default function Header() {
  return (
    <header className="  border-b ">
      <div className="h-[60px] flex items-center justify-between w-full container mx-auto">
        <Link to="/">
          <img
            width={120}
            height={29}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2880px-Instagram_logo.svg.png"
          />
        </Link>
        <Search />
        <button onClick={logoutHandle} className="w-20 h-10 border-2 m-3">
          Logout
        </button>
      </div>
    </header>
  );
}
