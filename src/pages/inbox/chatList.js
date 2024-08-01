import React from "react";
import UserPhoto from "Icon/pp.jpg"
export default function ChatList() {
  return (
    <div className="h-[calc(100%-75px)] overflow-auto">
      <header className="flex h-[44px] items-center px-8 justify-between">
        <h1 className="text-xl font-semibold">Mesajlar</h1>
        <a className=" text-[#555252] font-semibold" href="#">
          İstekler
        </a>
      </header>
      <div className="h-[72px] border-b border-t flex items-center pl-7">
        <div className="flex items-center">
          <img className=" rounded-full" width={56} height={56} src={UserPhoto} />
          <div className=" pl-3">
            <h1 className="font-semibold text-lg tracking-wide">Ahmet Özcan</h1>
            <p className="text-sm text-[#555252]">Ahmet bir dosya eki gönderdi 7s</p>
          </div>
        </div>
      </div>
    </div>
  );
}
