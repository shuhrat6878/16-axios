import React from "react";
import { Login } from "../components/login";
import { Register } from "../components/register";

export const Auth = () => {
  const [toggle, setToggle] = React.useState(false);
  return (
    <div className="h-screen flex justify-center items-center bg-blue-200">
      <div className="bg-white p-15 rounded-3xl ">
        {toggle ? <Login /> : <Register />}
        <button
          className="w-full py-3 bg-blue-700 rounded-3xl text-white font-bold m-5 "
          onClick={() => setToggle(!toggle)}
        >
          Login / Register
        </button>
      </div>
      
    </div>
  );
};
