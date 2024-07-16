import { useRoutes } from "react-router-dom";
import routes from "routes";
import { Toaster } from "react-hot-toast";
function App() {
  const handleRoutes = useRoutes(routes); 
  return (
    <>
    <Toaster  position="top-right" />
    {handleRoutes}
    </>
  )
}

export default App;
