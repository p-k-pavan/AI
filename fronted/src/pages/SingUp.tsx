import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  signUpFailure,
  signUpstart,
  signUpSuccess,
} from "../redux/user/userSlice";

const SingUp = () => {
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
      dispatch(signUpstart());
      const res = await fetch("/api/v1/user/sign-up", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success === false) {
        const errorMessage = data.errors
          ? data.errors.map((err) => err.msg).join(", ")
          : data.message;
        dispatch(signUpFailure(errorMessage));
        return;
      }

      dispatch(signUpSuccess(data));
      navigate("/sign-in");
    } catch (error) {
      dispatch(signUpFailure(error.message));
    }
  };

  return (
    <div className="p-3 max-w-lg mx-auto md:bg-slate-200 mt-10 rounded-lg">
      <h1 className="font-semibold text-2xl text-center my-7">Sign Up</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="username"
          name="name"
          id="name"
          className="border-none p-2 rounded-lg outline-black"
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="email"
          name="email"
          id="email"
          className="border-none p-2 rounded-lg outline-black"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          id="password"
          className="border-none p-2 rounded-lg outline-black"
          onChange={handleChange}
        />
        <button
          disabled={loading}
          className="bg-black text-white uppercase hover:opacity-90 p-3 rounded-lg cursor-pointer"
        >
          {loading ? "Loading..." : "Sign-UP"}
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Have an account?</p>
        <Link to={"/sign-in"}>
          <span className="text-red-500">sign-in</span>
        </Link>
      </div>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default SingUp;
