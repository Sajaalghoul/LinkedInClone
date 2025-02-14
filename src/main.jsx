import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes";
import { Provider } from "react-redux";
import { store } from "./state/store";
import { ToastContainer } from "react-toastify";
// routing
const router = createBrowserRouter(routes);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store()}>
      <ToastContainer />
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
