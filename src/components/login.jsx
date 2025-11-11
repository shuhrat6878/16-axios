import { useForm } from "react-hook-form";
import { request } from "../config/request";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export const Login = () => {
  const { handleSubmit, register, reset } = useForm();

  const navigate = useNavigate();

  const submit = (data) => {
    request.post("/login", data).then((res) => {
      if (res?.data?.accessToken) {
        Cookies.set("token", res?.data?.accessToken);
        navigate("/box");
      }
    });
    reset();
  };

  return (
    <>
      <h2 className="text-3xl m-2 pl-15 font-bold">Login</h2>
      <form onSubmit={handleSubmit(submit)} className="">
        <div>
          <input
            className="p-2 mb-[5px] border rounded-2xl"
            {...register("email")}
            type="email" placeholder="email..."
          />
        </div>
        <div>
          <input
            className="p-2 mb-[5px] border rounded-2xl"
            {...register("password")}
            type="password" placeholder="password..."
          />
        </div>
        <button className="bg-green-500 cursor-pointer w-full p-3 rounded-2xl " type="submit">
          Send
        </button>
      </form>
    </>
  );
};
