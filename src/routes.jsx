import Login from "./components/Login/Login";
import App from "./App";
import Home from "./components/Home/Home";
import User from "./components/User/User";

const routes = [
  {
    index: true,
    path: "/",
    element: <Login />,
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
