import { useEffect, useState } from "react";
import { useParams, useNavigate, NavLink, Outlet } from "react-router-dom";
import { getUserInfo } from "firebase.js"; // import the getUserInfo function from firebase.js
import Header from "./components/header";
import Grill from "Icon/grill.svg";
import Save from "Icon/save.svg";
import Icon from "component/Icon";
import classNames from "classnames";
export default function ProfileLayout() {
  const { username } = useParams();
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getUserInfo(username)
      .then((user) => {
        setUser(user);
      })
      .catch((err) => {
        navigate("/", { replace: true });
      });
  }, []);
  return (
    user && (
      <div>
        <div className="flex items-center justify-center">
          <Header user={user} />
        </div>
        <nav className=" border-t flex gap-x-20 items-center justify-center">
          <NavLink
            className={({ isActive }) =>
              classNames({
                "font-semibold flex items-center gap-x-1.5 p-3": true,
                "text-[#a8a8a8] ": !isActive,
                "text-black border-t border-black -mt-0.5": isActive,
              })
            }
            to={`/${username}`}
            end
          >
            <Icon name={Grill} />
            GÖNDERİLER
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              classNames({
                "font-semibold flex items-center gap-x-1.5 p-3": true,
                "text-[#a8a8a8]": !isActive,
                "text-black border-t border-black -mt-0.5": isActive,
              })
            }
            to={`/${username}/saved`}
            end
          >
            <Icon name={Save} />
            KAYDEDİLENLER
          </NavLink>
        </nav>
        <Outlet />
      </div>
    )
  );
}
