import React, { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className=" p-8 lg:pt-8 2xl:pt-8 lg:p-20 2xl:p-24 pb-12  bg-[#74C69D]">
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

        <div className="flex flex-col lg:flex-row  mt-10 gap-10 lg:gap-20 lg:items-center lg:justify-between">
          <img src="/images/hero.png" alt="hero" className="w-[50%]" />
          <div className="flex flex-col justify-between text-white gap-5 w-[50%]">
            <h1 className="font-bold text-2xl 2xl:text-3xl">Welcome</h1>
            <h2 className="text-3xl 2xl:text-[40px] font-bold font-serif">
              Lorem ipsum dolor, sit amet consectetur
            </h2>
            <p className="text-lg 2xl:text-2xl ">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
              nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum,
              voluptate culpa nesciunt delectus iste?
            </p>
            <button className="h-[48px] w-[170px] bg-white text-black rounded-md cursor-pointer">
              EXPLORE
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
