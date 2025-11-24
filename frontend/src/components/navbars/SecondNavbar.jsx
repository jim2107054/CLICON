import { useState } from "react";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useAppContext } from "../../context/AppContext";

const SecondNavbar = () => {
  const navigate = useNavigate();
  const [logOut, setLogOut] = useState(false);
  const [localSearch, setLocalSearch] = useState("");

  const { cart, user, logout, setSearchQuery } = useAppContext();

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchQuery(localSearch);
    navigate("/shop");
  };

  const handleLogout = () => {
    logout();
    setLogOut(true);
    navigate("/");
  };
  return (
    <div>
      <div className="bg-secondary hidden lg:grid grid-cols-[1fr_3fr_1fr] gap-10 px-24 py-2 items-center">
        {/*----------logo-----------*/}
        <div
          onClick={() => navigate("/")}
          className="flex justify-center cursor-pointer"
        >
          <img className="h-10" src={assets.logo} alt="logo" />
        </div>
        {/*----------Search Bar-----------*/}
        <div>
          <form onSubmit={handleSearch} className="flex justify-center relative w-full">
            <input
              className="h-9 w-2/3 px-5 pr-10 text-base rounded-sm"
              type="text"
              placeholder="Search for anything..."
              value={localSearch}
              onChange={(e) => setLocalSearch(e.target.value)}
            />
            <button
              type="submit"
              className="absolute right-[17%] top-1/2 transform -translate-y-1/2 cursor-pointer"
            >
              <img
                className="w-5 h-5"
                src={assets.search}
                alt="search"
              />
            </button>
          </form>
        </div>
        {/*----------Right side-----------*/}
        <div
          className={`flex justify-center items-center gap-5 right-0 ${
            logOut ? "hidden" : "flex"
          }`}
        >
          <div className="">
            <button
              onClick={() => navigate("/shoping-card")}
              className="text-3xl items-center justify-center relative text-white cursor-pointer"
            >
              <FaShoppingCart className="text-3xl" />
              {cart.length > 0 && (
                <span className="absolute -top-1  -right-1 bg-btnColor text-white text-xs font-medium px-1 py-0.5 rounded-full">
                  {cart.reduce((sum, item) => sum + item.quantity, 0)}
                </span>
              )}
            </button>
          </div>
          <div>
            <img
              onClick={() => navigate("/wish-list")}
              className="h-7 cursor-pointer"
              src={assets.hert}
              alt="hertIcon"
            />
          </div>
          <div className="cursor-pointer relative group rounded-full p-1 bg-gray-400">
            <img className="h-7" src={assets.user} alt="userIcon" />
            <div className="absolute flex-col w-40 z-50 bg-blue-100 top-0 mt-7 left-0 text-white rounded-sm pr-4 pl-2 py-1 hidden group-hover:block">
              <p 
                onClick={() => navigate("/my-account")}
                className="text-base text-gray-800 flex font-light hover:font-medium my-0.5 mx-5 cursor-pointer hover:text-btnColor transition-colors"
              >
                My Account
              </p>
              <p
                onClick={() => navigate("/track-order")}
                className="text-base text-gray-800 flex font-light hover:font-medium my-0.5 mx-5 cursor-pointer hover:text-btnColor transition-colors"
              >
                Purchase
              </p>
              <p
                onClick={() => navigate("/shop")}
                className="text-base text-gray-800 flex font-light hover:font-medium my-0.5 mx-5 cursor-pointer hover:text-btnColor transition-colors"
              >
                Shop Now
              </p>
              <p 
                onClick={() => navigate("/settings")}
                className="text-base text-gray-800 flex font-light hover:font-medium my-0.5 mx-5 cursor-pointer hover:text-btnColor transition-colors"
              >
                Settings
              </p>
              <p
                onClick={handleLogout}
                className="text-base hover:scale-105 transition-all duration-300 border font-bold justify-center items-center py-0.5 text-center rounded bg-btnColor mx-5 my-2 cursor-pointer"
              >
                Logout
              </p>
            </div>
          </div>
        </div>
        <div
          className={`flex justify-center items-center gap-5 right-0 ${
            logOut ? "flex" : "hidden"
          }`}
        >
          <div className="flex gap-5">
            <button
              onClick={() => {
                navigate("/login");
              }}
              className="border-none hover:scale-105 duration-300 transition-all rounded-md bg-blueButton px-5 py-1.5 text-white font-medium"
            >
              Login
            </button>
            <button
              onClick={() => navigate("/signup")}
              className="border-none hover:scale-105 duration-300 transition-all rounded-md bg-blueButton px-5 py-1.5 text-white font-medium"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondNavbar;
