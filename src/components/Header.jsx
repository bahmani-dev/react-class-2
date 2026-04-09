import Button from "./Button";
import { Link } from "react-router-dom";

const Header = () => {
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
      <button>
        <a href="#" className="underline mr-[40px]">
          Sign In
        </a>
        <Button text="Signup" />
      </button>
    </div>
  );
};

export default Header;
