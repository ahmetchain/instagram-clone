import { useEffect, useState, useRef } from "react";
import Logo from "../png/screenshot1.png";
import Logo1 from "../png/screenshot2.png";
import Logo2 from "../png/screenshot3.png";
import Logo3 from "../png/screenshot4.png";
import { AiFillFacebook } from "react-icons/ai";
import Input from "ui/Input";
export default function LoginCom() {
  const inputRef = useRef();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    const img = inputRef.current.querySelectorAll("img");
    let index = 0;
    const interval = setInterval(() => {
      img[index].style.opacity = 0;
      index = (index + 1) % img.length;
      img[index].style.opacity = 1;
    }, 4000);
    return () => clearInterval(interval);
  }, [inputRef]);
  return (
    <div className=" h-screen w-full flex flex-col justify-center items-center ">
      <div className=" flex justify-center items-center gap-x-5 flex-grow ">
        <div
          ref={inputRef}
          className="transition-all relative w-[380px] h-[580px] bg-mobile-login bg-[top_left_-46px] bg-[length:468.32px_634.15px]"
        >
          <img
            className="w-[250px] absolute top-6 right-[18px] duration-[2s]"
            src={Logo}
          />
          <img
            className="w-[250px] absolute top-6 right-[18px] duration-[2s]  opacity-0"
            src={Logo1}
          />
          <img
            className="w-[250px] absolute top-6 right-[18px] duration-[2s]  opacity-0"
            src={Logo2}
          />
          <img
            className="w-[250px] absolute top-6 right-[18px] duration-[2s]  opacity-0"
            src={Logo3}
          />
        </div>
        <div className="w-[350px] grid gap-y-3">
          <div className=" p-[40px] bg-white border border-gray-300 pt-8 pb-2">
            <a className=" flex justify-center">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2880px-Instagram_logo.svg.png" />
            </a>
            <form className=" flex flex-col gap-y-3">
              <Input
                type="text"
                label="Telefon numarası, kullanıcı adı veya e-posta"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
              <Input
                type="password"
                label="Şifre"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className="w-full mt-2 mb-2 bg-disabled rounded-md text-white font-medium pt-1 pb-1">
                Giriş yap
              </button>
              <div className="flex justify-center items-center mb-5">
                <div className="h-px flex-1 bg-gray-300"></div>
                <span className="px-4 font-medium text-gray-500 text-sm">
                  YA DA
                </span>
                <div className="h-px flex-1 bg-gray-300"></div>
              </div>
              <div className="flex justify-center items-center gap-x-2 cursor-pointer">
                <AiFillFacebook size={20} className=" text-facebook" />
                <span className="text-facebook font-medium text-sm">
                  Facebook ile Giriş Yap
                </span>
              </div>
              <p className="text-center text-sm text-gray-600 mb-3 cursor-pointer">
                Şifreni mi unuttun?
              </p>
            </form>
          </div>
          <div className=" bg-white pt-[20px] pb-[20px] text-center border border-gray-300 text-sm">
            Hesabın yok mu?{" "}
            <span className="text-login font-medium cursor-pointer">Kaydol</span>
          </div>
          <p className="text-center text-sm cursor-pointer">Uygulamayı indir.</p>
          <div className="flex gap-x-3 h-[40px] items-center justify-center ">
            <img
              className="w-[134px] h-full cursor-pointer"
              src="https://static.cdninstagram.com/rsrc.php/v3/yp/r/XUCupIzGmzB.png"
            ></img>
            <img
              className="w-[134px] h-full cursor-pointer"
              src="https://static.cdninstagram.com/rsrc.php/v3/yf/r/BFthdeAc5KC.png"
            ></img>
          </div>
        </div>
      </div>
      <footer className=" h-1/6 flex justify-center items-center">
        <nav className="flex flex-col gap-y-5 text-xs text-gray-500 ">
          <ul className="flex gap-x-5 ">
            <li>
              <a href="#">Meta</a>
            </li>{" "}
            <li>
              <a href="#">Hakkında </a>
            </li>
            <li>
              <a href="#">Blog </a>
            </li>
            <li>
              <a href="#">İş Fırsatları </a>
            </li>
            <li>
              <a href="#">Yardım </a>
            </li>
            <li>
              <a href="#">API </a>
            </li>
            <li>
              <a href="#">Gizlilik Koşullar</a>
            </li>
            <li>
              <a href="#"> Instagram Lite </a>
            </li>
            <li>
              <a href="#"> Threads </a>
            </li>
            <li>
              <a href="#"> Kişi Yükleme ve Hesabı Olmayan Kişiler </a>{" "}
            </li>
            <li>
              <a href="#"> Meta Verified </a>{" "}
            </li>
          </ul>
          <ul className="flex gap-x-5 text-center mx-auto">
            <li>
              <a href="#">Türkçe</a>
            </li>
            <li>
              <a href="#">Türkçe © 2024 Instagram from Meta</a>
            </li>
          </ul>
        </nav>
      </footer>
    </div>
  );
}
