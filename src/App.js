import { useRoutes } from "react-router-dom";
import routes from "routes";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Loader from "component/Loader";
function App() {
  const handleRoutes = useRoutes(routes);
  const user = useSelector((state) => state.auth.user);
  const [redirect, setRedirect] = useState(false);
  useEffect(() => {
    let timeOut = setTimeout(() => {
      setRedirect(true);
    }, 500);
    return () => clearTimeout(timeOut);
  }, []);
  if (!user && !redirect) {
    return <Loader />;
  }
  return (
    <>
      <Toaster position="top-right" />
      {handleRoutes}
    </>
  );
}

export default App;
