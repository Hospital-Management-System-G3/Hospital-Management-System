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
    <div className="bg-gray-200 min-h-screen flex items-center justify-center py-6 px-4 lg:px-0">
      <div className="w-full max-w-screen-md mx-auto bg-white shadow-lg flex flex-col lg:flex-row rounded-lg overflow-hidden">
        <div className="w-full lg:w-1/2 p-8 flex flex-col items-center">
          <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">Login</h2>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          {success && <p className="text-green-500 mb-4">{success}</p>}
          <form onSubmit={handleLogin} className="mt-4 w-full flex flex-col gap-6">
            <label className="block text-sm font-medium text-gray-700">
              Email
              <input
                className="mt-1 w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 placeholder-gray-500 text-sm focus:outline-none focus:border-blue-500"
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>
            <label className="block text-sm font-medium text-gray-700">
              Password
              <input
                className="mt-1 w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 placeholder-gray-500 text-sm focus:outline-none focus:border-blue-500"
                type="password"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </label>
            <button
              type="submit"
              className="mt-4 tracking-wide font-semibold bg-blue-600 text-white w-full py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 ease-in-out"
            >
              Log In
            </button>
            <p className="mt-4 text-xs text-gray-600 text-center">
              Don't have an account?{" "}
              <a href="/register" className="text-blue-600 font-semibold">
                Register Now
              </a>
            </p>
          </form>
        </div>
        <div className="w-full lg:w-1/2">
          <img src={loginImage} className="w-full h-full object-cover" alt="Login" />
        </div>
      </div>
    </div>
  );
};

export default Login;
