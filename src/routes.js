import Home from "pages/Home";
import Login from "pages/auth/Login";
import AuthLayout from "pages/auth";
import MainLayout from "pages/layout";
import ProfileLayout from "pages/profile";
import Register from "pages/auth/Register";
import PrivateRoutes from "ui/PrivateRoutes";
import ProfilePosts from "pages/profile/posts";
import ProfileSaves from "pages/profile/saves";
import InboxLayout from "pages/inbox";
import Inbox from "pages/inbox/inbox";
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
        element: <ProfileLayout />,
        children: [
          {
            index: true,
            element: <ProfilePosts />,
          },
          {
            path: "saved",
            element: <ProfileSaves />,
          },
        ],
      },
      {
        path: "inbox",
        element: <InboxLayout />,
        children: [
          {
            index: true,
            element: <Inbox />,
          },
        ],
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
