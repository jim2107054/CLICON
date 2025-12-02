import React, { useState } from "react";
import { assets } from "../../assets/assets";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";

const SignUp = () => {
  const navigate = useNavigate();
  const { register } = useAppContext();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value
    });
    // Clear error when user starts typing
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: ""
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name) {
      newErrors.name = "Name is required";
    }
    
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
    
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    
    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = "You must agree to the terms and conditions";
    }
    
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length === 0) {
      const userData = {
        name: formData.name,
        email: formData.email,
        id: Date.now()
      };
      register(userData);
      alert("Registration successful! Welcome to Clicon!");
      navigate("/");
    } else {
      setErrors(newErrors);
    }
  };
  return (
    <div>
      <div className="flex flex-col justify-center items-center my-20">
        <div className="flex flex-col border border-b-4 justify-center px-5 md:px-12 py-7 w-full md:w-1/2 lg:w-1/3 rounded-lg shadow-2xl">
          <h1 className="text-2xl font-medium">Sign Up</h1>
          <p className="text-base font-light mb-5">
            Create your clicon account
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <div className="flex flex-col gap-1">
              <label className="text-base font-medium" htmlFor="name">
                Name
              </label>
              <input
                className="h-10 px-5 border border-b-2 rounded-md"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Jahid Hasan Jim"
              />
              {errors.name && (
                <span className="text-red-500 text-sm">{errors.name}</span>
              )}
            </div>
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
            <div className="flex flex-col gap-1 group">
              <label className="text-base font-medium" htmlFor="confirmPassword">
                Confirm Password
              </label>
              <div className="relative flex items-center">
                <input
                  className="h-10 w-full px-5 border border-b-2 rounded-md"
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder=""
                />
                <img
                  className="h-5 w-5 absolute right-3 cursor-pointer"
                  src={assets.eye}
                  alt="toggle password"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                />
              </div>
              {errors.confirmPassword && (
                <span className="text-red-500 text-sm">{errors.confirmPassword}</span>
              )}
            </div>
            {/*--------Check Box------*/}
            <label className="mt-2 items-center justify-center" htmlFor="agreeToTerms">
              <input 
                className="gap-5 text-btnColor mr-3" 
                type="checkbox"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleChange}
              />
              Are you agree to Clicon <span className="text-blue-400">Terms of Conditions</span> and <span className="text-blue-400">Privacy Policy</span>
            </label>
            {errors.agreeToTerms && (
              <span className="text-red-500 text-sm">{errors.agreeToTerms}</span>
            )}
            <button 
              type="submit"
              className="bg-[#FA8232] flex items-center justify-center gap-3 h-11 rounded-md text-white font-medium mt-5 hover:bg-orange-600 transition-colors"
            >
              SIGN UP{" "}
              <span className="items-center justify-center">
                {" "}
                <FaArrowRight />{" "}
              </span>
            </button>
          </form>
          <p className="text-base font-light my-2 text-center">
            Already have an account{" "}
            <span onClick={()=>navigate('/login')} className="text-base cursor-pointer text-blue-500 font-medium ml-2">
              Sign In
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
