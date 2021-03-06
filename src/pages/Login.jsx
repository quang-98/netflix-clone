import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login, selectUser } from "../features/userSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const regEx = /.*\S.*/;

    if (regEx.test(email) && regEx.test(password)) {
      dispatch(
        login({
          email: email,
          password: password,
          loggedIn: true,
        })
      );
      navigate("/");
    } else {
      alert("Please input Email or password again !");
    }
  };

  return (
    <div className="w-full h-screen">
      <img
        className="hidden sm:block absolute w-full h-full object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
        alt="/"
      />
      <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
      <div className="fixed w-full px-4 py-24 z-50">
        <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
          <div className="max-w-[320px] mx-auto py-16">
            <h1 className="text-3xl font-bold">Sign In</h1>
            {error ? <p className="p-3 bg-red-400 my-2">{error}</p> : null}
            {user ? (
              <>
                <h1 className="text-3xl font-bold">Please Logout</h1>
              </>
            ) : (
              <>
                <form
                  onSubmit={(e) => handleSubmit(e)}
                  className="w-full flex flex-col py-4"
                >
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    className="p-3 my-2 bg-gray-700 rouded"
                    type="email"
                    placeholder="Email"
                    autoComplete="email"
                  />
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    className="p-3 my-2 bg-gray-700 rouded"
                    type="password"
                    placeholder="Password"
                    autoComplete="current-password"
                  />
                  <button
                    type="submit"
                    className="bg-red-600 py-3 my-6 rounded font-bold"
                  >
                    Sign In
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
