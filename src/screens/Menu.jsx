import React, { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className=" p-8 h-screen  bg-[#74C69D]">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <img src="/images/newLogo.svg" alt="logo" className="h-[40px]" />
            <p className="text-[35px] text-white ">Start</p>
          </div>
          <img
            src="/images/menu.png"
            alt="menu"
            className="cursor-pointer flex md:hidden"
            onClick={() => setShow((prev) => !prev)}
          />
          <div className="hidden md:flex  text-white gap-10 ">
            <Link to="/" className="cursor-pointer hover:text-green-400">
              Home
            </Link>
            <Link className="cursor-pointer hover:text-green-400" to="/">
              About
            </Link>
            <Link className="cursor-pointer hover:text-green-400" to="/">
              Portfolio
            </Link>
            <Link className="cursor-pointer hover:text-green-400" to="/">
              Contact
            </Link>
          </div>
        </div>

        <div
          className={` ${show ? "flex" : "hidden"} flex-col gap-5 bg-white  mt-5 py-5 px-4 items-center  rounded`}
        >
          <Link to="/" className="cursor-pointer hover:text-green-400">
            Home
          </Link>
          <Link className="cursor-pointer hover:text-green-400" to="/">
            About
          </Link>
          <Link className="cursor-pointer hover:text-green-400" to="/">
            Portfolio
          </Link>
          <Link className="cursor-pointer hover:text-green-400" to="/">
            Contact
          </Link>
        </div>
      </div>
    </>
  );
};

export default Menu;
