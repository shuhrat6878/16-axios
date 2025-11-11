import { Navigate, Outlet } from "react-router-dom";
import Cookies from "js-cookie";

export const ProfileLayout = () => {
  const token = Cookies.get("token");
  if (!token) {
    return <Navigate to={"/"} />;
  }
  return (
    <>
      <main>
        <Outlet />
      </main>
    </>
  );
};
