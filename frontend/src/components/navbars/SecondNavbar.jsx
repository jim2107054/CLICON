import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";
const SecondNavbar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="bg-secondary grid grid-cols-[1fr_3fr_1fr] gap-10 px-24 py-2 items-center">
        {/*----------logo-----------*/}
        <div
          onClick={() => navigate("/")}
          className="flex justify-center cursor-pointer"
        >
          <img className="h-10" src={assets.logo} alt="logo" />
        </div>
        {/*----------Search Bar-----------*/}
        <div>
          <div className="flex justify-center relative w-full">
            <input
              className="h-9 w-2/3 px-5 pr-10 text-base rounded-sm"
              type="text"
              placeholder="Search for anything..."
            />
            <img
              className="w-5 h-5 absolute right-[17%] top-1/2 transform -translate-y-1/2"
              src={assets.search}
              alt="search"
            />
          </div>
        </div>
        {/*----------Right side-----------*/}
        <div className="flex gap-5 right-0">
          <img className="h-7" src={assets.cart} alt="cart" />
          <img className="h-7" src={assets.hert} alt="hertIcon" />
          <img className="h-7" src={assets.user} alt="userIcon" />
        </div>
      </div>
    </div>
  );
};

export default SecondNavbar;
