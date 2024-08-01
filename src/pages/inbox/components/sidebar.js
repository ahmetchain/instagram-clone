import React from "react";
import { useSelector } from "react-redux";
import Pencil from "Icon/pencil.svg";
import ArrowDown from "Icon/arrowDown.svg";
import Icon from "component/Icon";
import ChatList from "./chatList";
export default function Sidebar() {
  const user = useSelector((state) => state.auth.user);

  return (
    <aside className="w-[400px] border-r border-gray-300  h-full">
      <header className="flex h-[75px] border-b items-center justify-between px-8">
        <div className="flex items-center gap-x-2 z-10">
          <h1 className=" text-2xl font-semibold">{user.username}</h1>
          <Icon className="mt-1" name={ArrowDown} size={15} />
        </div>
        <Icon name={Pencil} size={25} />
      </header>
      <ChatList />
    </aside>
  );
}
