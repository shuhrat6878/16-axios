import { useForm } from "react-hook-form";
import { request } from "../config/request";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const { handleSubmit, register, reset } = useForm();
  const navigate = useNavigate();

  const submit = (data) => {
    request.post("/register", data).then((res) => {
      if (res?.data?.accessToken) {
        Cookies.set("token", res?.data?.accessToken);
        navigate("/box");
      }
    });
    reset();
  };

  return (
    <>
      <h2 className="text-3xl p-3 w-full font-bold">Register</h2>
      <form onSubmit={handleSubmit(submit)}>
        <div>
          <input
            className="p-2 mb-[5px] border rounded-2xl"
            {...register("username")}
            type="text" placeholder="username..."
          />
        </div>
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
