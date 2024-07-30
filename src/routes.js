import Home from "pages/Home";
import Login from "pages/auth/Login";
import AuthLayout from "pages/auth";
import MainLayout from "pages/layout";
import Profile from "pages/profile";
import Register from "pages/auth/Register";
import PrivateRoutes from "ui/PrivateRoutes";
const routes = [
  {
    path: "/",
    element: <MainLayout />,
    auth: true,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: ":username",
        element: <Profile />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
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
