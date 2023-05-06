import { BsFillCartFill } from "react-icons/bs";
import market_mate_logo from './image/market_mate_logo.png'
import grocery from './image/grocery.png'
import Vector from './image/Vector.png'
import information from './image/information.png'
import letter from './image/letter.png'
function Header() {
    return (
            <header aria-label="Site Header" className="bg-white">
                <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-40 items-center justify-between">
                        <div className="md:flex md:items-center md:gap-12">
                            <a className="block text-teal-600" href="/">
                            <img src={market_mate_logo} alt="Logo"/>
                            </a>
                        </div>

                        <div className="hidden md:block mt-28">
                            <nav aria-label="Site Nav">
                                <ul className="flex items-center gap-6 text-sm">
                                    <li>
                                        <a className="text-black transition hover:text-gray-500/75" href="/">
                                        <img className="xl:inline-block mx-2.5 lg:block" src={Vector} alt="grocery"/>
                                            Home
                                        </a>
                                    </li>

                                    <li>
                                        <a className="text-black transition hover:text-gray-500/75" href="/">
                                        <img className="xl:inline-block mx-2.5 lg:block" src={grocery} alt="grocery"/>
                                            Products
                                        </a>
                                    </li>

                                    <li>
                                        <a className="text-black transition hover:text-gray-500/75" href="/">
                                        <img className="xl:inline-block mx-2.5 lg:block" src={letter} alt="grocery"/>
                                        contact
                                        </a>
                                    </li>

                                    <li>
                                        <a className="text-black transition hover:text-gray-500/75" href="/">
                                        <img className="xl:inline-block mx-2.5 lg:block" src={information} alt="grocery"/>
                                            About
                                        </a>
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
                                    <a className="rounded-md px-2 py-2.5 text-sm font-medium text-teal-600" href="/">
                                        <BsFillCartFill />
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
                                            d="M4 6h16M4 12h16M4 18h16"/>
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