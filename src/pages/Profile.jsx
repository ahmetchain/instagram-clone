import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getUserInfo } from "firebase.js"; // import the getUserInfo function from firebase.js
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
    <div>
      {user && "EVET VAR"}
      Profile page = {username}
    </div>
  );
}
