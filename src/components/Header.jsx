import { useContext } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

const Header = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  return (
    <div className=" z-10 relative px-[150px] text-white h-[100px] flex items-center justify-between">
      <div className="logo">
        <img src="/images/logo.svg" alt="logo" />
      </div>
      <nav>
        <ul className="flex gap-[70px] ">
          <li className="hover:text-red-400  cursor-pointer">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-red-400 cursor-pointer">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:text-red-400 cursor-pointer">
            <Link to="/menu">Menu</Link>
          </li>
          <li className="hover:text-red-400 cursor-pointer">Contact Us</li>
        </ul>
      </nav>
      <div>
        <a href="#" className="underline mr-[40px]">
          Sign In
        </a>
        <Button text="Signup" />
        <button
          className="px-4 py-2 bg-white text-black dark:bg-black dark:text-white"
          onClick={() => setDarkMode((prev) => !prev)}
        >
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>
      </div>
    </div>
  );
};

export default Header;
