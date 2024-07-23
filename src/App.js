import { useRoutes } from "react-router-dom";
import routes from "routes";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import Loader from "component/Loader";
function App() {
  const handleRoutes = useRoutes(routes);
  const user = useSelector((state) => state.auth.user);
  if (user === null) {
    return <Loader />;
  }
  return (
    <>
      <pre>{JSON.stringify(user)}</pre>
      <Toaster position="top-right" />
      {handleRoutes}
    </>
  );
}

export default App;
