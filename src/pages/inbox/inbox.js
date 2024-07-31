import Icon from "component/Icon";
import React from "react";
import InboxMessage from "Icon/inbox.svg";
export default function Inbox() {
  return (
    <div className="flex-1 flex ">
      <div className="w-[400px] border-r border-gray-300  h-full">
        <h1>Messages</h1>
        <h1>Mesaaa</h1>
      </div>
      <div className=" h-full flex-1">
        <div className="flex flex-col items-center justify-center h-full">
          <div>
            <Icon name={InboxMessage} size={110} />
          </div>
          <h2 className="text-xl font-semibold mt-3">Mesajların</h2>
          <p>Bir arkadaşına veya gruba gizli fotoğraflar ve mesajlar gönder</p>
          <div >
            <button className=" px-3.5 bg-[#0095f6] text-white font-semibold rounded-md py-2 mt-3">Mesaj Gönder</button>
          </div>
        </div>
      </div>
    </div>
  );
}
