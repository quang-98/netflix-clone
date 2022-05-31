import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout, selectUser } from "../features/userSlice";

const Navbar = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

  console.log(user);

  return (
    <div className="flex items-center justify-between p-4 z-[100] w-full absolute">
      <Link to="/">
        <h1 className="text-red-600 text-4xl font-bold cursor-pointer">
          NETFLIX FAKE
        </h1>
      </Link>
      <div>
        {!user ? (
          <Link
            to="/login"
            className="bg-red-600 text-white px-6 py-2 rounded cursor-pointer"
          >
            Sign In
          </Link>
        ) : (
          <>
            <Link to="/login" className=" text-white px-6 py-2  cursor-pointer">
              {user.email}
            </Link>
            <button
              onClick={(e) => handleLogout(e)}
              className="bg-red-600 text-white px-6 py-2 rounded cursor-pointer"
            >
              Log Out
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
