import React from "react";
import { logoutHandle } from "firebase.js";
import { Link, NavLink } from "react-router-dom";
import Search from "./Search";
import Homesvg from "Icon/Home.svg";
import Discoversvg from "Icon/Discover.svg";
import Notification from "Icon/Notifications.svg";
import Message from "Icon/Message.svg";
import Compose from "Icon/Compose.svg";
import Icon from "./Icon";
import ProfilePicture from "Icon/pp.jpg";
import { useSelector } from "react-redux";
export default function Header() {
  const user = useSelector((state) => state.auth.user);
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
        <div className="flex gap-x-6 items-center">
          <NavLink to="/">
            {" "}
            <Icon className="cursor-pointer" name={Homesvg} size={24} />
          </NavLink>
          <NavLink to="/inbox">
            <Icon className="cursor-pointer" name={Message} size={24} />{" "}
          </NavLink>
          <Icon className="cursor-pointer" name={Compose} size={24} />
          <Icon className="cursor-pointer" name={Discoversvg} size={24} />
          <Icon className="cursor-pointer" name={Notification} size={24} />
          <NavLink to={user.username} className="w-6 h-6  cursor-pointer">
            <img
              className="w-full h-full rounded-full"
              src={ProfilePicture}
            ></img>
          </NavLink>
          <button onClick={logoutHandle} className="w-20 h-10 border-2 m-3">
            Logout
          </button>
        </div>
      </div>
    </header>
  );
}
