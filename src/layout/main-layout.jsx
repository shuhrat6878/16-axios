import { Link, Outlet } from "react-router-dom";
import Cookies from "js-cookie";

export const MainLayout = () => {
  const token = Cookies.get("token");
  return (
    <>
      <header className="p-5 bg-amber-400 gap-5 flex justify-center">
        <Link to={"/"}>Home</Link>
        {token ? (
          <Link to={"/profile"}>Profile</Link>
        ) : (
          <Link to={"/auth"}>Sign Up</Link>
        )}
      </header>
      <main>
        <Outlet />
      </main>
      <footer>Footer</footer>
    </>
  );
};
