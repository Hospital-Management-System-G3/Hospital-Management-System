import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "./../slices/userSlice";
import { useNavigate } from "react-router-dom";

import loginImage from './../assets/images/login.jpg';


const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error, success } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const result = await dispatch(loginUser(formData)).unwrap();
      const userRole = result.role;

      localStorage.setItem("userRole", userRole);

      if (userRole === "admin") {
        navigate("/admin");
      } else {
        navigate("/");
      }
    } catch (error) {
      console.log("Login failed:", error.message || error);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center py-12 px-6">
      <div className="w-full max-w-screen-lg mx-auto bg-white shadow-xl rounded-lg overflow-hidden lg:flex">
        {/* Left Side - Form */}
        <div className="w-full lg:w-1/2 p-10 flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-8 text-center text-emerald-500">Welcome Back</h2>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          {success && <p className="text-green-500 mb-4">{success}</p>}
          <form onSubmit={handleLogin} className="w-full flex flex-col gap-5">
            <label className="block text-sm font-semibold text-gray-600">
              Email
              <input
                className="mt-2 w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 focus:ring-emerald-500 focus:border-emerald-500"
                type="email"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>
            <label className="block text-sm font-semibold text-gray-600">
              Password
              <input
                className="mt-2 w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 focus:ring-emerald-500 focus:border-emerald-500"
                type="password"
                placeholder="Enter your password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </label>
            <button
              type="submit"
              className="mt-4 tracking-wide font-semibold bg-emerald-500 text-white w-full py-3 rounded-lg hover:bg-emerald-600 transition-all duration-300 ease-in-out shadow-md"
            >
              Log In
            </button>
          <p className="mt-4 text-sm text-gray-500 text-center">
              Don't have an account?{" "}
              <a href="/register" className="text-emerald-500 font-semibold hover:text-emerald-600">
                Register Now
              </a  >
            </p>
          </form>
        </div>

        {/* Right Side - Image */}
        <div className="w-full lg:w-1/2">
          <img src={loginImage} className="w-full h-full object-cover" alt="Login" />
        </div>
      </div>
    </div>
  );
};

export default Login;
