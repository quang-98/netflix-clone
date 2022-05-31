import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectUser } from "../features/userSlice";

const Navbar = () => {
  const user = useSelector(selectUser);

  console.log(user);

  return (
    <div className="flex items-center justify-between p-4 z-[100] w-full absolute">
      <Link to="/">
        <h1 className="text-red-600 text-4xl font-bold cursor-pointer">
          NETFLIX CLONE
        </h1>
      </Link>
      <div>
        <Link to="/login">
          <button className="bg-red-600 text-white px-6 py-2 rounded cursor-pointer">
            Sign In
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
