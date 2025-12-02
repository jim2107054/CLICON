import { assets } from "../../../assets/assets"
const FirstNavbar = () => {
  return (
    <div>
        <div className="bg-secondary hidden lg:flex flex-col gap-52 md:flex-row py-1 justify-around items-center">
        {/*------Left Part-------*/}
        <div>
            <p className="text-white font-base">Welcome to Clicon online eCommerce store. </p>
        </div>
        {/*------Right Part-------*/}
            <div className="flex gap-2 items-center justify-center">
                <div className="flex gap-3 items-center">
                <p className="text-white">Follow us: </p>
                <img className="w-4 h-4 cursor-pointer" src={assets.twitter} alt="twitter" />
                <img className="w-4 h-4" src={assets.fackbook} alt="fackbook" />
                <img className="w-4 h-4" src={assets.pinterest} alt="pinterest" />
                <img className="w-4 h-4" src={assets.rebbit} alt="rebbit" />
                <img className="w-4 h-4" src={assets.youtube} alt="youtube" />
                <img className="w-4 h-4" src={assets.instagram} alt="instagram" />
                </div>
                {/* Vertical line */}
                <div className="w-px h-6 bg-white mx-2"></div>
                <div className="flex gap-2 ">
                <select className="bg-secondary text-white" name="language" id="language">
                    <option value="english">English</option>
                    <option value="bangla">বাংলা</option>
                    <option value="italian">Italian</option>
                    <option value="german">German</option>
                </select>
                <select className="bg-secondary text-white" name="currency" id="currency">
                    <option value="usd">USD</option>
                    <option value="bdt">BDT</option>
                    <option value="euro">EURO</option>
                    <option value="pound">POUND</option>
                </select>
                </div>
            </div>
            {/*----------horizontal line*/}
        {/* <hr className="h-0.5 w-full bg-purple-500"/> */}
    </div>
    </div>
  )
}

export default FirstNavbar