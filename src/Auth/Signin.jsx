import React, { useState } from "react";
import app from "../firebase/firebase.init";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { Link } from "react-router-dom";
const Signin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  //provider
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const [user, setUser] = useState(null);
  const handleSigninButtonGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        setUser(loggedInUser);
      })
      .catch((error) => {
        console.log("error:", error.message);
      });
  };

  const handleSigninButtonGithub = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        setUser(loggedInUser);
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };
  const handleSignOutButton = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
        alert("Signing out successfull.");
      })
      .catch((error) => {
        alert("didn't signed out.", error.message);
      });
  };
  const handleSubmitLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const loggedInUserByManual = result.user;
        console.log(loggedInUserByManual);
        setUser(loggedInUserByManual);
      })
      .catch((error) => {
        console.log(error.message);
      });

    alert("happening");
  };
  return (
    <div className="flex flex-col justify-center items-center mt-2">
      <section className="">
        {user ? (
          <button
            onClick={handleSignOutButton}
            className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Sign out
          </button>
        ) : (
          <>
            <div className="my-2 p-8">
              <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-3 text-center text-xl uppercase font-bold leading-9 tracking-wide font-sans  text-gray-900">
                  Sign In Here
                </h2>
              </div>
              <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form onSubmit={handleSubmitLogin} className="space-y-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between">
                      <label
                        htmlFor="password"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Password
                      </label>
                      <div className="text-sm">
                        <a
                          href=""
                          className="font-semibold text-indigo-600 hover:text-indigo-500"
                        >
                          Forgot password?
                        </a>
                      </div>
                    </div>
                    <div className="mt-2 relative">
                      <input
                        id="password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        autoComplete="current-password"
                        required
                        className="block ps-1 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                      <button
                        type="button"
                        className="absolute inset-y-0 right-0 px-3 flex items-center focus:outline-none"
                        onClick={togglePasswordVisibility}
                      >
                        {showPassword ? (
                          <EyeSlashIcon className="h-5 w-5 text-gray-500" />
                        ) : (
                          <EyeIcon className="h-5 w-5 text-gray-500" />
                        )}
                      </button>
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="flex ps-1 w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Sign In
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div>
              <button
                onClick={handleSigninButtonGoogle}
                className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Sign in with google
              </button>
              <button
                onClick={handleSigninButtonGithub}
                className="ms-2 bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Sign in with github
              </button>
            </div>
            <div className="mt-5">
              <h3 className="font-bold tracking-wide ">
                Haven't an Account ?
                <button className="ms-2 bg-gradient-to-r from-blue-400 to-green-800 hover:from-blue-600 hover:to-teal-600 text-white font-bold py-2 px-2 rounded focus:outline-none focus:shadow-outline">
                  <Link to="/register"> Register Now ! </Link>
                </button>
              </h3>
            </div>
          </>
        )}
      </section>
      <section className="md:pb-32 mt-4">
        {user && (
          <div className="md:mb-32 flex flex-col items-center md:p-10 p-3 rounded gap-3  bg-yellow-100">
            <h3 className="flex justify-center font-bold text-lg tracking-wider mb-4 underline">
              User Info
            </h3>
            <div className="flex justify-center items-center w-20 h-auto">
              <img
                className="flex justify-center rounded text-center mx-auto"
                src={user.photoURL}
                alt=""
              />
            </div>
            <h2 className="flex justify-center font-bold text-lg tracking-wider mb-1">
              {user.displayName}
            </h2>
            <h2 className="flex justify-center font-bold text-lg tracking-wider mb-4">
              {user.email}
            </h2>
          </div>
        )}
      </section>
    </div>
  );
};

export default Signin;
