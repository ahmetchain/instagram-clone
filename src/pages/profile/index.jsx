import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getUserInfo } from "firebase.js"; // import the getUserInfo function from firebase.js
import Header from "./components/header";
export default function Profile() {
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
        <Header user={user} />
        <nav className=" border-t"></nav>
      </div>
    )
  );
}
