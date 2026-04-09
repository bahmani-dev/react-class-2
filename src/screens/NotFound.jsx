import React from "react";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="h-[100vh] text-black  flex justify-center items-center flex-col ">
      <h1 className="text-3xl mb-8">404 - Oops Not Found! </h1>
      <p className="text-lg">This page was not found</p>
      <Link className="text-red-500 text-lg" to="/">
        Home
      </Link>
    </div>
  );
};
