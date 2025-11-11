import React from "react";
import { request } from "../config/request";
import { Link } from "react-router-dom";

export const Profile = () => {
  React.useEffect(() => {
    request.get("/messages").then((res) => {
      console.log(res.data);
    });
  }, []);
  return (
    <div className="h-[900px] bg-green-300 flex items-center justify-center text-4xl font-bold gap-4">
      <div >
        Profile 
      </div>
      <div className="border p-3 rounded-2xl bg-blue-700">
        <Link to={"/box/profile/contact"}> Contact</Link>
      </div>
    </div>
  )};
