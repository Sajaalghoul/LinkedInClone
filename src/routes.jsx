import Login from "./components/Authentication/Login/Login";
import App from "./App";
import Home from "./components/Home/Home";
import User from "./components/User/User";
import SignIn from "./components/Authentication/SignIn/SignIn";
import JoinNow from "./components/Authentication/JoinNow/JoinNow";
import UserProfile from "./components/User/UserProfile/UserProfile";
import UserFormEdit from "./components/User/UserFormEdit/UserFormEdit";

const routes = [
  {
    index: true,
    path: "/",
    element: <Login />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "joinNow",
    element: <JoinNow />,
  },
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        path: "/home",
        element: <Home />,
      },
      {
        path: "/user",
        element: <User />,
        children: [
          { path: "/user", element: <UserProfile /> },
          { path: "/user/useredit", element: <UserFormEdit /> },
        ],
      },
    ],
  },
];

export default routes;
