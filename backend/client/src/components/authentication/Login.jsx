import React, { useEffect, useState } from "react";
import Navbar from "../components_lite/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import axios from "axios";
import { USER_API_ENDPOINT } from "@/utils/data";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setUser } from "@/redux/authSlice";
import store from "@/redux/store";
import { Button } from "../ui/button";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, user } = useSelector((store) => store.auth);

  // const [loading, setLoading] = useState(false);

  const [input, setInput] = useState({
    email: "",
    password: "",
    role: "",
  });

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    // console.log(input);
    // setLoading(true);

    try {
      dispatch(setLoading(true));
      const res = await axios.post(`${USER_API_ENDPOINT}/login`, input, {
        withCredentials: true,
      });

      if (res.data.success) {
        dispatch(setUser(res.data.user));
        toast.success(res.data.message);
        navigate("/");
      }
    } catch (error) {
      const message = error.response?.data?.message || "Login failed";
      toast.error(message);
    } finally {
      // setLoading(false);
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form
          onSubmit={submitHandler}
          className="w-1/2 border border-gray-500 rounded-md p-4 my-10"
        >
          <h1 className="font-bold text-xl mb-5 text-center text-shadow-gray-600 text-gray-700">
            <span className="underline underline-offset-2">Login</span>
          </h1>
          <div className="my-4">
            <Label className="mb-1">Email</Label>
            <Input
              type="email"
              value={input.email}
              name="email"
              onChange={changeEventHandler}
              placeholder="Email"
            ></Input>
          </div>
          <div className="my-4">
            <Label className="mb-1">Password</Label>
            <Input
              type="password"
              value={input.password}
              name="password"
              onChange={changeEventHandler}
              placeholder="Password"
            ></Input>
          </div>
          <div className="mb-4">
            <div className="flex gap-6 mt-2">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="role"
                  value="Student"
                  checked={input.role === "Student"}
                  onChange={changeEventHandler}
                />
                Student
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="role"
                  value="Recruiter"
                  checked={input.role === "Recruiter"}
                  onChange={changeEventHandler}
                />
                Recruiter
              </label>
            </div>
          </div>

          {loading ? (
            <div className="flex items-center justify-center my-10">
              <div className="spinner-border text-blue-600" role="status">
                <span className="sr-only">Loasing...</span>
              </div>
            </div>
          ) : (
            <button
              type="submit"
              // disabled={loading}
              className="block w-3/4 mx-auto py-3 my-3 text-white bg-blue-600 hover:bg-blue-800/90 rounded-md cursor-pointer"
            >
              Log in
              {/* {loading ? "Logging in..." : "Login"} */}
            </button>
          )}

          {/* no account then register */}
          <p className="text-sm text-gray-500 mt-5 text-center">
            No account?
            <Link
              to="/register"
              className="ml-2 text-gray-800 font-semibold relative group"
            >
              Register
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gray-600 transition-all group-hover:w-full"></span>
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
