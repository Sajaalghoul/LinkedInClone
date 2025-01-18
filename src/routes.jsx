import Login from "./components/Login/Login";
import App from "./App";
import Home from "./components/Home/Home";
import User from "./components/User/User";
import SignIn from "./components/SignIn/SignIn";
import JoinNow from "./components/JoinNow/JoinNow";

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
    path:"joinNow", 
    element:<JoinNow/>
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
      },
    ],
  },
];

export default routes;
