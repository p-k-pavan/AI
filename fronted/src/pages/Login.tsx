import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signInFailure, signInstart, signUpSuccess } from "../redux/user/userSlice";

const Login = () => {
  const [formData, setFormData] = useState({});
  const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInstart());
      const res = await fetch('/api/v1/user/login', {
        method: 'POST',
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(formData),
      })
      const data = await res.json();
      if (data.success == false) {
        const errorMessage = data.errors
          ? data.errors.map((err) => err.msg).join(", ")
          : data.message;
        dispatch(signInFailure(errorMessage));
        return;
      }
      dispatch(signUpSuccess(data));
      navigate("/");
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  }
  return (
    <div className="p-3 max-w-lg mx-auto md:bg-slate-200 mt-10 rounded-lg">
      <h1 className="font-semibold text-2xl text-center my-7">Sign In</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="email"
          name="email"
          id="email"
          className="border-none p-2 rounded-lg"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          id="password"
          className="border-none p-2 rounded-lg "
          onChange={handleChange}
        />
        <button
          disabled={loading}
          className="bg-black text-white uppercase hover:opacity-90 p-3 rounded-lg cursor-pointer"
        >
          {loading ? "Loading..." : "Sign In"}
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Dont Have a account?</p>
        <Link to={"/sign-up"}>
          <span className="text-red-500 ">sign-up</span>
        </Link>
      </div>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};
export default Login;
