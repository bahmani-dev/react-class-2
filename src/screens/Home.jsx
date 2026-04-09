import React from "react";
import Header from "../components/Header";
import Button from "../components/Button";

export const Home = () => {
  return (
    <div className="relative w-[100%] h-[900px] bg-no-repeat bg-cover bg-[url('/images/coffee_image.png')] ">
      <Header />

      <img
        src="/images/overlay.png"
        alt="overlay"
        id="overlay"
        className="w-[100%] h-[100%] absolute top-0 left-0"
      />

      <div className="w-[50%] h-[100%] mt-[150px] ml-[150px] relative z-10 text-white ">
        <p className="text-[22px] font-medium">
          We have got your morning covered with
        </p>
        <img src="/images/Coffee.svg" alt="coffee" className="mt-13 mb-6" />
        <p className="text-5">
          It is best to start your day with a cup of coffee. Discover the <br />{" "}
          best flavours coffee you will ever have. We provide the best <br />{" "}
          for our customers.
        </p>

        <Button text="Order Now" style="mt-4" />
      </div>
    </div>
  );
};
