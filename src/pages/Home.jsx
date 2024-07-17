import React from "react";
import { signOut } from "firebase/auth";
import { logoutHandle } from "firebase.js";
export default function Home() {
  return (
    <>
      Home page
      <button onClick={() => logoutHandle()} className="w-20 h-10 border-2 m-3">
        Logout
      </button>
    </>
  );
}
