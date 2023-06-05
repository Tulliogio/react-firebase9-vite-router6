import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserProvider";

const AccessContainer = () => {
  const { user } = useContext(UserContext);
  if (user) {
    return <Navigate to="/" />;
  }

  return (
    <div className="max-w-sm mx-auto mt-10">
      <Outlet />
    </div>
  );
};

export default AccessContainer;
