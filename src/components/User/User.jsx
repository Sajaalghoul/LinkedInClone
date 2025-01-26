import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCurrentUser } from "../../APIS/FireStoreApi";
const User = () => {
  const dispatch=useDispatch();
  useEffect(() => {
    getCurrentUser(dispatch);
  }, [dispatch]);
  return (
    <div className="h-full pb-52">
      <Outlet />;
    </div>
  );
};

export default User;
