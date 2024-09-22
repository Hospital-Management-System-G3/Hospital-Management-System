import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "./../slices/userSlice";
import { useNavigate } from "react-router-dom";
import loginImage from './../assets/images/sigin.png'; // تأكد من مسار الصورة


const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error, success } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    username: "",
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

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const resultAction = await dispatch(registerUser(formData));
      if (registerUser.fulfilled.match(resultAction)) {
        const userRole = formData.role; // Assuming role is from the form data
        dispatch(setUserRole(userRole)); // Set user role in Redux state
        localStorage.setItem("userRole", userRole); // S
        navigate("/");
      } else {
        console.error(resultAction.payload);
      }
    } catch (err) {
      console.error("Unexpected error:", err);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center py-6 px-4 lg:px-0">
      <div className="w-full max-w-screen-lg mx-auto bg-white shadow-lg flex flex-col lg:flex-row rounded-lg overflow-hidden">
        <div className="w-full lg:w-1/2 p-4 flex flex-col items-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Create an Account
          </h2>
          {error && <p className="text-red-600 mb-4">{error}</p>}
          {success && <p className="text-green-600 mb-4">{success}</p>}
          <form onSubmit={handleRegister} className="mt-4 w-full max-w-sm flex flex-col gap-2">
            <label htmlFor="username" className="block text-gray-700 font-medium mb-1">
              Username
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </label>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
              Email
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </label>
            <label htmlFor="password" className="block text-gray-700 font-medium mb-1">
              Password
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </label>

            <button
              type="submit"
              className="mt-4 tracking-wide font-semibold bg-emerald-500 text-white w-full py-2 rounded-lg hover:bg-emerald-600 transition-all duration-300 ease-in-out flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Register
            </button>
            <p className="mt-4 text-sm text-gray-500 text-center">
            Already have an account?{" "}
            <a href="/log-in" className="text-emerald-500 font-semibold hover:text-emerald-600">
            Login
              </a>
            </p>
          </form>
        </div>
        <div className="w-full lg:w-1/2">
          <img src={loginImage} className="w-full h-full object-cover" alt="Register" />
        </div>
      </div>
    </div>
  );
};

export default Register;
