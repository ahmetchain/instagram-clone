import { useNavigate, useLocation, Link } from "react-router-dom";
import { RegisterScheama } from "validation";
import Button from "component/Button";
import { registerHandle } from "firebase.js";
import { AiFillFacebook } from "react-icons/ai";
import Input from "ui/Input";
import toast from "react-hot-toast";
import { Formik, Form } from "formik";
import Separator from "component/Separator";
export default function LoginCom() {
  const navigate = useNavigate();
  const location = useLocation();
  const handleSubmit = async (values) => {
    try {
      const response = await registerHandle(values);
      if (response) {
        toast.success("Giriş işlemi başarılı");
        navigate(location.state?.return_url || "/", {
          replace: true,
        });
      }
    } catch (err) {
      toast.error(err.code);
    }
  };
  return (
    <div className=" h-screen w-full flex flex-col justify-center items-center ">
      <div className="w-[350px] grid gap-y-3">
        <div className=" p-[40px] bg-white border border-gray-300 pt-8 pb-2">
          <a className=" flex justify-center">
            <img
              width={175}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2880px-Instagram_logo.svg.png"
            />
          </a>
          <p className="text-[17px] font-semibold text-center text-[#737373] mb-4">
            Arkadaşlarının fotoğraf ve videolarını görmek için kaydol.
          </p>
          <Button>
            <AiFillFacebook size={20} />
            Facebook ile Giriş Yap
          </Button>
          <Separator />
          <Formik
            onSubmit={handleSubmit}
            validationSchema={RegisterScheama}
            initialValues={{
              email: "",
              full_name: "",
              username: "",
              password: "",
            }}
          >
            {({ isSubmitting, isValid, dirty }) => (
              <Form className=" flex flex-col gap-y-1.5">
                <Input
                  type="email"
                  name="email"
                  label="Cep Telefonu Numarası veya E-posta"
                />
                <Input name="full_name" label="Adı Soyadı" />
                <Input name="username" label="Kullanıcı adı" />
                <Input name="password" type="password" label="Şifre" />
                <div className="text-[12px] text-[#737373]  text-center mt-3 mb-3 flex flex-col gap-y-3 ">
                  <p>
                    Hizmetimizi kullanan kişiler senin iletişim bilgilerini
                    Instagram'a yüklemiş olabilir.{" "}
                    <a className="text-login" href="#">
                      Daha Fazla Bilgi Al
                    </a>
                  </p>
                  <p>
                    Kaydolarak, Koşullarımızı, Gizlilik İlkemizi ve Çerezler
                    İlkemizi kabul etmiş olursun.
                  </p>
                </div>
                <Button
                  type="submit"
                  disabled={!isValid || !dirty || isSubmitting}
                >
                  Kaydol
                </Button>
              </Form>
            )}
          </Formik>
        </div>
        <div className=" bg-white pt-[20px] pb-[20px] text-center border border-gray-300 text-sm">
          Hesabın var mı?
          <Link
            to="/auth/login"
            className="text-login font-medium cursor-pointer ml-1"
          >
            Giriş yap
          </Link>
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
