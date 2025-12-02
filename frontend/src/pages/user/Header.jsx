import FirstNavbar from "../../components/user/navbars/FirstNavbar";
import SecondNavbar from "../../components/user/navbars/SecondNavbar";
import ThirdNavbar from "../../components/user/navbars/ThirdNavbar";

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
