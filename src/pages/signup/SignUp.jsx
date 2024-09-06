import React from "react";
import { useState } from "react";
import { MdEmail } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { MdVerified } from "react-icons/md";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase/Firebase";
import toast, { Toaster } from "react-hot-toast";

function SignUp() {
  const navi = useNavigate();
  const [user, setuser] = useState({
    names: "",
    mobile: "",
    email: "",
    password: "",
    confim: "",
  });

  const [error, seterror] = useState({});
  const handleChange = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    const newerror = {};

    if (user.names == "") {
      // seterror({ username: "*please enter username" });
      newerror.names = "*please enter name";
    } else if (user.names.length < 6) {
      newerror.names = "*atleast 6 letters";
    } else {
      newerror.names = "";
    }

    if (user.email == "") {
      // seterror({ email: "*please enter email" });
      newerror.email = "*please enter email";
    } else if (user.email.indexOf("@") < 6) {
      newerror.email = "*not a valid email";
    } else if (
      user.email.charAt(user.email.length - 4) != "." &&
      user.email.charAt(user.email.length - 3) != "."
    ) {
      newerror.email = "*doesn't exist";
    } else {
      newerror.email = "";
    }

    if (user.mobile == "") {
      // seterror({ mobile: "*please enter mobile number" });
      newerror.mobile = "*please enter mobile number";
    } else if (isNaN(user.mobile)) {
      newerror.mobile = "*enter only digits";
    } else if (user.mobile.length != 10) {
      newerror.mobile = "*enter 10 digits only";
    } else {
      newerror.mobile = "";
    }

    if (user.password == "") {
      // seterror({ password: "*please enter password" });
      newerror.password = "*please enter password";
    } else if (user.password.length < 6) {
      newerror.password = "*atleast 6 letters";
    } else {
      newerror.password = "";
    }

    if (user.confim == "") {
      // seterror({ confirm: "*password not matched" });
      newerror.confim = "*password enter confim password";
    } else if (user.password != user.confim) {
      newerror.confim = "*password not matched";
    } else {
      newerror.confim = "";
    }
    seterror(newerror);
    if (
      !user.names ||
      !user.mobile ||
      !user.email ||
      !user.password ||
      !user.confim
    ) {
      return toast.error("All fields are required");
    } else {
      createUserWithEmailAndPassword(
        auth,
        user.email,
        user.password,
        user.confim
      )
        .then(async (res) => {
          const users = res.user;
          await updateProfile(users, {
            displayName: user.names,
          });
          navi("/");
          toast.success(`SignUp Successfull @${user.names}`);
        })
        .catch((err) => toast.error(err.message));
    }
  };

  return (
    <div>
      <div className="pt-[60px]">
        <section className=" dark:bg-gray-900">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto my-10 lg:py-0">
            {/* <div>
              <h3 className="font-bold text-4xl cursor-pointer mb-5">
                Ecom<span className="text-red-400">Shop</span>
              </h3>
            </div> */}

            <div className="w-full bg-red-400 rounded-lg shadow dark:border md:mt-0 mx-auto xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold text-center leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign up to your account
                </h1>
                <form className="space-y-4 md:space-y-6" action="#">
                  <div className="grid sm:grid-cols-2 gap-5 grid-cols-1">
                    <div>
                      <label className="block mb-2 text-xl font-medium text-gray-900 dark:text-white ">
                        Name
                      </label>
                      <input
                        // autoComplete="off"
                        value={user.names}
                        onChange={handleChange}
                        type="text"
                        name="names"
                        id="name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="enter your name"
                        required=""
                      />
                      <p className="text-red-700">{error.names}</p>
                    </div>
                    <div>
                      <label className="block mb-2 text-xl font-medium text-gray-900 dark:text-white ">
                        Mobile Number
                      </label>
                      <input
                        value={user.mobile}
                        onChange={handleChange}
                        type="text"
                        name="mobile"
                        id="address"
                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="enter valid mobile number"
                        required=""
                      />
                      <p className="text-red-700">{error.mobile}</p>
                    </div>
                    <div>
                      <label
                        for="email"
                        className="flex mb-2 text-xl font-medium text-gray-900 dark:text-white items-center gap-2"
                      >
                        Email
                        <MdEmail />
                      </label>
                      <input
                        value={user.email}
                        onChange={handleChange}
                        type="text"
                        name="email"
                        id="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="name@company.com"
                        required=""
                      />
                      <p className="text-red-700">{error.email}</p>
                    </div>
                    <div>
                      <label
                        for="password"
                        className="block mb-2 text-xl font-medium text-gray-900 dark:text-white"
                      >
                        Password
                      </label>
                      <input
                        value={user.password}
                        onChange={handleChange}
                        type="text"
                        name="password"
                        id="password"
                        placeholder="••••••••"
                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required=""
                      />
                      <p className="text-red-700">{error.password}</p>
                    </div>
                    <div>
                      <label className="block mb-2 text-xl font-medium text-gray-900 dark:text-white">
                        Confim Password
                      </label>
                      <input
                        value={user.confim}
                        onChange={handleChange}
                        type="text"
                        name="confim"
                        id="conform"
                        placeholder="••••••••"
                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required=""
                      />
                      <p className="text-red-700">{error.confim}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="remember"
                          aria-describedby="remember"
                          type="checkbox"
                          className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                          required=""
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label
                          for="remember"
                          className="text-black dark:text-gray-300 font-medium"
                        >
                          Remember me
                        </label>
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full text-white bg-blue-400 hover:bg-primary-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 mt-3"
                    onClick={handlesubmit}
                  >
                    {/* {error.names === "" &&
                    error.mobile === "" &&
                    error.email === "" &&
                    error.password === "" &&
                    error.confim === "" ? (
                      <Link to="/">Sign Up</Link>
                    ) : (
                      "Sign Up"
                    )} */}
                    Sign Up
                  </button>

                  <p className="text-sm text-center font-light text-black dark:text-gray-400">
                    Already have an account yet?{" "}
                    <Link to="/login">
                      <a
                        href="#"
                        className="font-bold text-white text-primary-600 hover:underline dark:text-primary-500"
                      >
                        Log in
                      </a>
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Toaster />
    </div>
  );
}

export default SignUp;
