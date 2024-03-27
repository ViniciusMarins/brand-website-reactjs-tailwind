import { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";

function Navbar() {
  const [nav, setNav] = useState(false);

  function handleToggleMobileMenu() {
    setNav((prev) => !prev);
  }

  return (
    <div className="w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold mr-4 sm:text-4xl">BRAND.</h1>
          <ul className="hidden md:flex">
            <li className="m-4 hover:text-indigo-500 cursor-pointer">Home</li>
            <li className="m-4 hover:text-indigo-500 cursor-pointer">About</li>
            <li className="m-4 hover:text-indigo-500 cursor-pointer">
              Support
            </li>
            <li className="m-4 hover:text-indigo-500 cursor-pointer">
              Platforms
            </li>
            <li className="m-4 hover:text-indigo-500 cursor-pointer">
              Pricing
            </li>
          </ul>
        </div>
        <div className="hidden md:flex pr-4">
          <button className="border-none bg-transparent text-black mr-4">
            Sign In
          </button>
          <button className="px-8 py-3">Sign Up</button>
        </div>
        <div
          className="md:hidden cursor-pointer mr-4"
          onClick={handleToggleMobileMenu}
        >
          {!nav ? (
            <IoMenu className="text-3xl" />
          ) : (
            <IoClose className="text-3xl" />
          )}
        </div>
      </div>

      <ul className={nav ? "absolute bg-zinc-200 w-full px-8" : "hidden"}>
        <li className="border-b-2 border-zinc-300 w-full m-4">Home</li>
        <li className="border-b-2 border-zinc-300 w-full m-4">About</li>
        <li className="border-b-2 border-zinc-300 w-full m-4">Support</li>
        <li className="border-b-2 border-zinc-300 w-full m-4">Platforms</li>
        <li className="border-b-2 border-zinc-300 w-full m-4">Pricing</li>
        <div className="flex flex-col my-4">
          <button className="bg-transparent text-indigo-600 px-8 py-3 mb-4">
            Sign In
          </button>
          <button className="px-8 py-3 ">Sign Up</button>
        </div>
      </ul>
    </div>
  );
}

export default Navbar;
