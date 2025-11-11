import { Link, Outlet } from "react-router-dom";
import Cookies from "js-cookie";

export const MainLayout = () => {
  const token = Cookies.get("token");
  if(!token){
    return <Link to={"/"}></Link>
  }
  return (
    <>
      <header className="p-5 bg-amber-100 gap-5 flex justify-center">
        <Link to={"/box"} className="border p-2 rounded-2xl  bg-amber-500 font-bold hover:bg-amber-300">Home</Link>
        
        <Link to={"/box/profile"} className="border p-2 rounded-2xl bg-amber-500 hover:bg-amber-300 font-bold">Profile</Link>
        
        <Link to={"/"} className="border p-2 rounded-2xl bg-amber-500 hover:bg-amber-300 font-bold">Sign Up</Link>
        
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="bg-indigo-600 flex justify-center items-center text-4xl font-bold  text-white p-3">Footer</footer>
    </>
  );
};
