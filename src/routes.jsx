import Login from "./components/Login/Login";
import App from "./App";
import Home from "./components/Home/Home";

const routes = [
  {
    index: true,
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <App />,
    children: [
      {
        index: true,
        path: "/home",
        element: <Home />,
      },
    ],
  },
];

export default routes;
