import React from "react";
import SearchIcon from "Icon/search.svg";
import Icon from "./Icon";
import { IoCloseCircle } from "react-icons/io5";
import  useClickOutside  from "customHook/useClickOutside.js";
import classNames from "classnames";
import { useState } from "react";
export default function Search() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  const inputRef = useClickOutside(() => {
    setOpen(false);
  });
  return (
    <div className=" w-[268px] relative" ref={inputRef}>
      <span
        className={classNames({
          " absolute left-0 top-0 pointer-events-none flex cursor-pointer items-center justify-center h-full w-9 text-[#8e8e8e] ": true,
          " !hidden": open,
        })}
      >
        <Icon name={SearchIcon} />
      </span>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onFocus={() => setOpen(true)}
        type="text "
        placeholder="Search"
        className={classNames({
          "h-9 w-full bg-[#efefef] rounded pl-9 outline-none": true,
          "!pl-3": open,
        })}
      />
      <button
        onClick={() => {
          console.log("button clicked");
          setSearch("");
          setOpen(false);
        }}
        className={classNames({
          " absolute right-0 top-0 hidden items-center justify-center h-full w-9 text-[#c7c7c7]": true,
          "!flex": open,
        })}
      >
        <IoCloseCircle size={16} />
      </button>
    </div>
  );
}
