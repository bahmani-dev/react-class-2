import React, { useState } from "react";

const Button = ({ text, style }) => {
  const [coffee, setCoffee] = useState("late");
  const [isVisible, setIsVisibble] = useState(true);

  console.log(text);

  function buttonClick() {
    console.log("something was clicked");
  }

  return (
    <>
      <button
        onClick={buttonClick}
        className={`px-5  font-bold h-12 bg-[#F9C06A] cursor-pointer  rounded-3xl text-black  ${style}`}
      >
        {text}
      </button>
      <button onClick={() => setIsVisibble(!isVisible)}>Toggle</button>
      {isVisible && "Yeah, I am visible"};
      <input
        value={coffee}
        onChange={function (e) {
          setCoffee(e.target.value);
        }}
        className="border-2 border-white border-solid"
        type="text"
      />
    </>
  );
};

export default Button;
