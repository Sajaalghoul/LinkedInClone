import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import "./App.css";
import Header from "./components/common/Header/Header";
import withAuth from "./HOC/withAuth";
import { useDispatch } from "react-redux";
import { setUser } from "./state/uer/userSlice";
function App() {
  const dispatch = useDispatch();
  const userDate = JSON.parse(localStorage.getItem("currentuser"));
  useEffect(() => {
    dispatch(setUser(userDate));
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
}

export default withAuth(App);
