import { BsFillCartFill, BsFillSearchHeartFill, BsFillInfoCircleFill } from "react-icons/bs";
import { AiFillHome, AiFillMail, AiOutlineMenu } from "react-icons/ai";
import market_mate_logo from "./image/market_mate_logo.png";
import { GiCarrot, GiFrozenOrb, GiFruitBowl, GiMeat, GiPaperBagOpen, GiSlicedBread } from "react-icons/gi";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header aria-label="Site Header" className=" bg-white w-100">
      <div>
        <div className="flex h-20 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <a className="block" href="/">
              <img src={market_mate_logo} className="w-40" alt="Logo" />
            </a>
          </div>

          <div className="hidden md:block">
            <nav aria-label="Site Nav">
              <ul className="flex items-center gap-6 text-md">
                <li>
                  <Link to="/">
                    <AiFillHome className="text-green-500 xl:inline-block mx-2.5 lg:block w-5 h-5" />
                    Home
                  </Link>
                </li>

                <li>
                  <Link to="products">
                    <GiPaperBagOpen className="text-green-500 xl:inline-block mx-2.5 lg:block w-5 h-5" />
                    All 
                    {/* Products */}
                  </Link>
                </li>

                <li>
                  <Link to="Vegetables">
                    <GiCarrot className="text-green-500 xl:inline-block mx-2.5 lg:block w-5 h-5" />
                    Vegetables
                  </Link>
                </li>
                <li>
                  <Link to= "Fruits">
                    <GiFruitBowl className="text-green-500 xl:inline-block mx-2.5 lg:block w-5 h-5" />
                    Fruits
                  </Link>
                </li>

                <li>
                  <Link to= "Meats">
                    <GiMeat className="text-green-500 xl:inline-block mx-2.5 lg:block w-5 h-5" />
                    Meats
                  </Link>
                </li>

                <li>
                  <Link to='Bakery'>
                    <GiSlicedBread className="text-green-500 xl:inline-block mx-2.5 lg:block w-5 h-5" />
                    Bakery
                    </Link>
                </li>

                <li>
                <Link to='Frozen'>
                    <GiFrozenOrb className="text-green-500 xl:inline-block mx-2.5 lg:block w-5 h-5" />
                    Frozen
                  </Link>
                </li>

                <li>
                <Link to='Search'>
                    <BsFillSearchHeartFill className="text-green-500 xl:inline-block mx-2.5 lg:block w-5 h-5" />
                    Search
                  </Link>
                </li>

                <li>
                  <Link to="About">
                    <BsFillInfoCircleFill className="text-green-500 xl:inline-block mx-2.5 lg:block w-5 h-5" />
                    About
                  </Link>
                </li>

                <li>
                  <Link to="Contact">
                    <AiFillMail className="text-green-500 xl:inline-block mx-2.5 lg:block w-5 h-5" />
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <Link to='LoginPage'
                className="rounded-md bg-black px-5 py-2.5 text-sm font-medium text-white shadow"
              >
                Login
              </Link>

              <div className="hidden sm:flex">
                <Link to="CartPage" className="px-2 py-2.5 text-green-500"
                  href="/">
                  <BsFillCartFill className="w-6 h-6" />
                </Link>
              </div>
            </div>

            <div className="block md:hidden">
              <button className="rounded bg-gray-100 p-2 mr-2 text-gray-600">
                <AiOutlineMenu/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
