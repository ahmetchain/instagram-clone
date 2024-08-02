import React from "react";
import UserProfile from "Icon/pp.jpg";
import Icon from "component/Icon";
import Phone from "Icon/phone.svg";
import FaceTime from "Icon/facetime.svg";
import Exclamation from "Icon/exclamation.svg";
export default function Header() {
  return (
    <div className="h-[75px] border-b border-gray-300 px-5 flex items-center ">
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center gap-x-3">
          <img
            className=" rounded-full"
            width={44}
            height={44}
            src={UserProfile}
          />
          <h2 className=" text-xl font-semibold">Ahmet Özcan</h2>
        </div>
        <div className="flex gap-x-3">
          <Icon name={Phone} size={25} />
          <Icon name={FaceTime} size={25} />
          <Icon name={Exclamation} size={25} />
        </div>
      </div>
    </div>
  );
}
