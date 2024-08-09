import React from "react";
import ProfilePicture from "Icon/pp.jpg";
export default function SuggestionsList() {
  return (
    <div className=" w-[320px] flex flex-col">
      <header className=" flex items-center w-full mb-5">
        <img width={44} className=" rounded-full" src={ProfilePicture} />
        <div className="flex flex-col ml-3">
          <h2 className="font-semibold">ozcaanahmet</h2>
          <p className="-mt-1 text-gray-600">Ahmet Özcan</p>
        </div>
        <a className=" ml-auto text-blue-500" href="#">
          Geçiş yap
        </a>
      </header>
      <header className="flex justify-between mb-5">
        <h2> Senin için önerilenler</h2>
        <a href="#">Tümünü gör</a>
      </header>
      <main className="flex flex-col gap-y-5 mb-5">
        <div className="flex items-center ">
          <img width={44} className=" rounded-full" src={ProfilePicture} />
          <div className=" ml-3">
            <h2 className=" font-semibold">ozcaanahmet</h2>
            <p className="-mt-1 text-gray-600">Ahmet Özcan</p>
          </div>
          <a className="ml-auto text-blue-500" href="#">
            Takip et
          </a>
        </div>
        <div className="flex items-center ">
          <img width={44} className=" rounded-full" src={ProfilePicture} />
          <div className=" ml-3">
            <h2 className=" font-semibold">ozcaanahmet</h2>
            <p className="-mt-1 text-gray-600">Ahmet Özcan</p>
          </div>
          <a className="ml-auto text-blue-500" href="#">
            Takip et
          </a>
        </div>
        <div className="flex items-center ">
          <img width={44} className=" rounded-full" src={ProfilePicture} />
          <div className=" ml-3">
            <h2 className=" font-semibold">ozcaanahmet</h2>
            <p className="-mt-1 text-gray-600">Ahmet Özcan</p>
          </div>
          <a className="ml-auto text-blue-500" href="#">
            Takip et
          </a>
        </div>
        <div className="flex items-center ">
          <img width={44} className=" rounded-full" src={ProfilePicture} />
          <div className=" ml-3">
            <h2 className=" font-semibold">ozcaanahmet</h2>
            <p className="-mt-1 text-gray-600">Ahmet Özcan</p>
          </div>
          <a className="ml-auto text-blue-500" href="#">
            Takip et
          </a>
        </div>
        <div className="flex items-center ">
          <img width={44} className=" rounded-full" src={ProfilePicture} />
          <div className=" ml-3">
            <h2 className=" font-semibold">ozcaanahmet</h2>
            <p className="-mt-1 text-gray-600">Ahmet Özcan</p>
          </div>
          <a className="ml-auto text-blue-500" href="#">
            Takip et
          </a>
        </div>
      </main>
      <footer className=" flex flex-col text-xs text-gray-500 gap-y-5 mt-5">
        <p>
          Hakkında · Yardım · Basın · API · Kariyer · Gizlilik · Şartlar ·
          Konumlar · Hesaplar · Hashtagler
        </p>
        <p>© 2021 INSTAGRAM FROM FACEBOOK</p>
      </footer>
    </div>
  );
}
