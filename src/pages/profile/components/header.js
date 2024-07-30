import React from "react";
import ProfilePicture from "Icon/pp.jpg";
import Plus from "Icon/plus.svg";
import Settings from "Icon/settings.svg";
import Icon from "component/Icon";

export default function Header({ user }) {
  return (
    <header className="flex flex-col gap-y-10 mb-16">
      <>
        <div className="flex gap-x-28">
          <img
            className="rounded-full w-[150px] h-[150px]"
            src={ProfilePicture}
          />
          <div className="flex flex-col gap-y-6">
            <div className="flex gap-x-5">
              <h1 className=" font-normal text-2xl ">{user.username}</h1>
              <div className="flex items-center gap-x-3">
                <a
                  href="#"
                  className=" inline-flex items-center rounded-lg bg-[#737373] text-white h-9 px-4 font-semibold"
                >
                  Profili düzenle
                </a>
                <a
                  href="#"
                  className="inline-flex items-center rounded-lg bg-[#737373] text-white h-9 px-4 font-semibold"
                >
                  Arşivi gör
                </a>
                <Icon name={Settings} size={24} />
              </div>
            </div>
            <nav className="flex items-center gap-x-10 text-lg">
              <div>
                <span className="font-semibold mr-2">{user.posts}</span>
                gönderi
              </div>
              <div>
                <span className="font-semibold mr-2">
                  {user.followers.length}
                </span>
                takipçi
              </div>
              <div>
                <span className="font-semibold mr-2">
                  {user.following.length}
                </span>
                takip
              </div>
            </nav>
            <div className="flex flex-col">
              <a href="#">{user.website}</a>
              <h2>{user.full_name}</h2>
              <p>{user.bio}</p>
            </div>
          </div>
        </div>
        <div className="flex gap-x-12">
          <div className="flex flex-col gap-y-2">
            <div className="w-[84px] h-[84px] border border-black rounded-full flex items-center justify-center">
              <div className="w-[78px] h-[78px] bg-[#363636] rounded-full flex items-center justify-center">
                <img
                  src={ProfilePicture}
                  className="w-full h-full rounded-full"
                />
              </div>
            </div>
            <p className=" font-semibold text-sm">Öne Çıkanlar</p>
          </div>
          <div className="flex flex-col gap-y-2">
            <div className="w-[84px] h-[84px] border border-black rounded-full flex items-center justify-center">
              <div className="w-[78px] h-[78px] bg-[#363636] rounded-full flex items-center justify-center">
                <img
                  src={ProfilePicture}
                  className="w-full h-full rounded-full"
                />
              </div>
            </div>
            <p className=" font-semibold text-sm">Öne Çıkanlar</p>
          </div>
          <div className="flex flex-col gap-y-2">
            <div className="w-[84px] h-[84px] border border-black rounded-full flex items-center justify-center">
              <div className="w-[78px] h-[78px] bg-[#363636] rounded-full flex items-center justify-center">
                <Icon className="text-[#737373]" name={Plus} size={48} />
              </div>
            </div>
            <p className=" font-semibold text-sm">Öne Çıkanlar</p>
          </div>
        </div>
      </>
    </header>
  );
}
