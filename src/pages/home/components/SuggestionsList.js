import React from "react";
import ProfilePicture from "Icon/pp.jpg";
export default function SuggestionsList() {
  return (
    <div className=" w-[320px] flex flex-col">
      <header className=" flex items-center w-full">
        <img width={44} className=" rounded-full" src={ProfilePicture} />
        <div className="flex flex-col ml-3">
          <h2 className="font-semibold">ozcaanahmet</h2>
          <p className="-mt-1 text-gray-600">Ahmet Özcan</p>
        </div>
        <a className=" mx-auto text-blue-500" href="#">Geçiş yap</a>
      </header>
      <main>
        <header>
          <h2> Senin için önerilenler</h2>
          <a href="#">Tümünü gör</a>
        </header>
        <div>
          <img src={ProfilePicture} />
          <div>
            <h2>ozcaanahmet</h2>
            <p>Ahmet Özcan</p>
          </div>
          <a href="#">Takip et</a>
        </div>
        <div>
          <img src={ProfilePicture} />
          <div>
            <h2>ozcaanahmet</h2>
            <p>Ahmet Özcan</p>
          </div>
          <a href="#">Takip et</a>
        </div>
        <div>
          <img src={ProfilePicture} />
          <div>
            <h2>ozcaanahmet</h2>
            <p>Ahmet Özcan</p>
          </div>
          <a href="#">Takip et</a>
        </div>
        <div>
          <img src={ProfilePicture} />
          <div>
            <h2>ozcaanahmet</h2>
            <p>Ahmet Özcan</p>
          </div>
          <a href="#">Takip et</a>
        </div>
        <div>
          <img src={ProfilePicture} />
          <div>
            <h2>ozcaanahmet</h2>
            <p>Ahmet Özcan</p>
          </div>
          <a href="#">Takip et</a>
        </div>
      </main>
      <footer>
        <p>
          Hakkında · Yardım · Basın · API · Kariyer · Gizlilik · Şartlar ·
          Konumlar · Hesaplar · Hashtagler
        </p>
        <p>© 2021 INSTAGRAM FROM FACEBOOK</p>
      </footer>
    </div>
  );
}
