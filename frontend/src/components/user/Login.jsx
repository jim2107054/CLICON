import React, { useState } from "react";
import { assets } from "../../assets/assets";
import {FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";
import { authService } from "../../services/authService";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAppContext();
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear error when user starts typing
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: ""
      });
    }
    if (serverError) {
      setServerError("");
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length === 0) {
      setLoading(true);
      setServerError("");
      
      try {
        const response = await authService.login(formData);
        
        if (response.success && response.user) {
          login(response.user);
          navigate("/");
        }
      } catch (error) {
        console.error('Login error:', error);
        setServerError(error.message || 'Login failed. Please try again.');
      } finally {
        setLoading(false);
      }
    } else {
      setErrors(newErrors);
    }
  };
  return (
    <div>
      <div className="flex flex-col justify-center items-center my-20">
        <div className="flex flex-col border border-b-2 justify-center px-5 md:px-12 py-7 w-full md:w-1/2 lg:w-1/3 rounded-lg shadow-2xl">
          <h1 className="text-2xl font-medium">Sign In</h1>
          <p className="text-base font-light mb-5">
            To explore clicon please login
          </p>
          {serverError && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              {serverError}
            </div>
          )}
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <div className="flex flex-col gap-1">
              <label className="text-base font-medium" htmlFor="email">
                Email Address
              </label>
              <input
                className="h-10 px-5 border border-b-2 rounded-md"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="clicon@gmail.com"
                disabled={loading}
              />
              {errors.email && (
                <span className="text-red-500 text-sm">{errors.email}</span>
              )}
            </div>
            <div className="flex flex-col gap-1 group">
              <label className="text-base font-medium" htmlFor="password">
                Password
              </label>
              <div className="relative flex items-center">
                <input
                className="h-10 w-full px-5 border border-b-2 rounded-md"
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="minimum six digit"
                disabled={loading}
              />
              <img 
                className="h-5 w-5 absolute right-3 cursor-pointer" 
                src={assets.eye} 
                alt="toggle password"
                onClick={() => setShowPassword(!showPassword)}
              />
              </div>
              {errors.password && (
                <span className="text-red-500 text-sm">{errors.password}</span>
              )}
            </div>
            <p 
              onClick={() => navigate('/password')}
              className="text-base text-blue-500 text-center cursor-pointer hover:underline"
            >
              Forget Password
            </p>
            <button
              type="submit"
              disabled={loading}
              className={`bg-[#FA8232] flex items-center justify-center gap-3 h-11 rounded-md text-white font-medium mt-5 hover:bg-orange-600 transition-colors ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {loading ? 'SIGNING IN...' : 'SIGN IN'} <span className="items-center justify-center"> <FaArrowRight/> </span>
            </button>
          </form>
          <p className="text-base font-light my-2 text-center">Create a new account <span onClick={()=>navigate('/signup')} className="text-base cursor-pointer text-blue-500 font-medium ml-2">Sign Up</span></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
