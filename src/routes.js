import Home from "pages/Home";
import Login from "pages/Login";
import AuthLayout from "pages/auth";
import PrivateRoutes from "ui/PrivateRoutes";
const routes = [
  {
    path: "/",
    element: <Home />,
    auth: true,
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
];

const AuthCheck = (routes) =>
  routes.map((route) => {
    if (route?.auth) {
      route.element = <PrivateRoutes>{route.element}</PrivateRoutes>;
    }
    if (route.children) {
      route.children = AuthCheck(route.children);
    }
    return route;
  });
export default AuthCheck(routes);
