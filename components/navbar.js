import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav className="bg-white px-2 sm:px-4 py-2.5 mb-10 md:mb-20">
      <div className="container max-w-6xl flex flex-wrap justify-between items-center mx-auto">
        <Link href="/">
          <a className="flex items-center">
            <span className="mr-2">👋</span>
            <span className="self-center text-xl font-semibold whitespace-nowrap hidden sm:block">
              Kevin Mitermite.
            </span>
            <span className="self-center text-xl font-semibold whitespace-nowrap sm:hidden">
              KM.
            </span>
          </a>
        </Link>
        <button
          className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          type="button"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            aria-hidden="true"
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              fillRule="evenodd"
            ></path>
          </svg>
        </button>
        <div
          className={
            isNavExpanded
              ? "justify-between items-center w-full md:flex md:w-auto md:order-1"
              : "hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
          }
        >
          <ul className="flex flex-col p-2 mt-2 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
            <li>
              <Link href="/">
                <a className="block py-2 pr-4 pl-3 bg-gray-50 text-gray-700 rounded hover:bg-gray-100 md:bg-transparent md:hover:bg-transparent md:hover:text-gray-900 md:p-0">
                  Home
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
