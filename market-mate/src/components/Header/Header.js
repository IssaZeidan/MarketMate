import { BsFillCartFill } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { AiFillMail } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import market_mate_logo from './image/market_mate_logo.png'
import { GiPaperBagOpen } from "react-icons/gi";
import { Link } from "react-router-dom";
function Header() {
    return (
        <header aria-label="Site Header" className=" bg-white w-100 shadow-md">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    <div className="md:flex md:items-center md:gap-12">
                        <a className="block text-teal-600" href="/">
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
                                    <Link to="Products">
                                        <GiPaperBagOpen className="text-green-500 xl:inline-block mx-2.5 lg:block w-5 h-5" />
                                        Products
                                    </Link>
                                </li>
                                <li>
                                    <Link to="Contact">
                                        <AiFillMail className="text-green-500 xl:inline-block mx-2.5 lg:block w-5 h-5" />
                                        Contact
                                    </Link>
                                </li>


                                <li>
                                    <Link to="About">
                                        <BsFillInfoCircleFill className="text-green-500 xl:inline-block mx-2.5 lg:block w-5 h-5" />
                                        About
                                    </Link>
                                </li>



                            </ul>
                        </nav>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="sm:flex sm:gap-4">
                            <a className="rounded-md bg-black px-5 py-2.5 text-sm font-medium text-white shadow" href="/">
                                Login
                            </a>

                            <div className="hidden sm:flex">
                                <a className="rounded-md px-2 py-2.5 text-sm font-medium text-green-500" href="/">
                                    <BsFillCartFill className="w-6 h-6" />
                                </a>
                            </div>
                        </div>

                        <div className="block md:hidden">
                            <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>

    );
}

export default Header;