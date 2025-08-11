import FirstNavbar from "../components/navbars/FirstNavbar";
import SecondNavbar from "../components/navbars/SecondNavbar";
import ThirdNavbar from "../components/navbars/ThirdNavbar";

const Header = () => {
  return (
    <div>
      <FirstNavbar />
      <hr className="border-0 border-t border-green-700 m-0" />
      <SecondNavbar />
      <ThirdNavbar />
    </div>
  );
};

export default Header;
