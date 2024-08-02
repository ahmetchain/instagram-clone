import React from "react";
import Header from "./components/header";
import Refly from "./components/refly";
import Main from "./components/main";
export default function Chat() {
  return (
    <div className="flex-1">
      <Header />
      <Main />
      <Refly />
    </div>
  );
}
