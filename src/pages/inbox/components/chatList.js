import React from "react";
import UserPhoto from "Icon/pp.jpg";
import Ilker from "Icon/ilker.jpg";
import Serdar from "Icon/serdar.jpg";
import AhmetGulec from "Icon/ahmetgülec.jpg";
import AhirZaman from "Icon/ahirzaman.jpg";
import FikretCetin from "Icon/fikretcetin.jpg";
import AltayMeric from "Icon/altaymeric.jpg";
import Ronaldo from "Icon/ronaldo.jpg";
import { NavLink } from "react-router-dom";
export default function ChatList() {
  const chatList = [
    {
      id: 1,
      name: "Ahmet Özcan",
      message: "Ahmet bir dosya eki gönderdi",
      time: "7s",
      photo: UserPhoto,
    },
    {
      id: 2,
      name: "İlker",
      message: "Harbiden iyi yapmışlar",
      time: "2g",
      photo: Ilker,
    },
    {
      id: 3,
      name: "Serdar",
      message: "Tamam dostum akşam konuşuruz",
      time: "12s",
      photo: Serdar,
    },
    {
      id: 4,
      name: "Ahmet Güleç",
      message: "Ahmet abi orada mısın?",
      time: "1s",
      photo: AhmetGulec,
    },
    {
      id: 5,
      name: "Ahir Zaman Gencleri",
      message: "Cuma haberleşmek üzere :)",
      time: "10min",
      photo: AhirZaman,
    },
    {
      id: 6,
      name: "Fikret Çetin",
      message: "Sorma güzel kardeşim kendisi tam bir cahil",
      time: "1s",
      photo: FikretCetin,
    },
    {
      id: 7,
      name: "Altay Cem Meric",
      message: "Biz bunları yeterince aşağılamıyoruz",
      time: "3s",
      photo: AltayMeric,
    },
    {
      id: 8,
      name: "Cristiano Ronaldo",
      message: "10 11 akşam maçına yaz beni",
      time: "3s",
      photo: Ronaldo,
    },
  ];
  return (
    <div className="h-[calc(100%-75px)] overflow-auto">
      <header className="flex h-[44px] items-center px-8 justify-between">
        <h1 className="text-xl font-semibold">Mesajlar</h1>
        <a className=" text-[#555252] font-semibold" href="#">
          İstekler
        </a>
      </header>
      {chatList.map((chat) => (
        <NavLink to={`/inbox/${chat.id}`}
          key={chat.id}
          className="h-[72px] hover:bg-gray-100 cursor-pointer flex items-center pl-7"
        >
          <div className="flex items-center">
            <img
              className=" rounded-full"
              width={56}
              height={56}
              src={chat.photo}
            />
            <div className=" pl-3">
              <h1 className="font-semibold text-lg tracking-wide">
                {chat.name}
              </h1>
              <p className="text-sm text-[#555252]">
                {chat.message} · {chat.time}
              </p>
            </div>
          </div>
        </NavLink>
      ))}
    </div>
  );
}
