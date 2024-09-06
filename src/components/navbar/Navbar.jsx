import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaHeart } from "react-icons/fa";
import { auth } from "../../firebase/Firebase";

function Navbar({ cart, username }) {
  const [menu, setmenu] = useState(false);
  const handleMenu = () => {
    setmenu(true);
  };
  const handleCross = () => {
    setmenu(false);
  };

  const handlelogout = () => {
    auth
      .signOut()
      .then(() => {
        toast.success("Logout Successfull");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  return (
    <>
      <div className="fixed w-full z-50">
        <header className="bg-white border-b relative">
          <div
            className="mx-auto flex justify-between py-5 px-1 items-center 
          "
          >
            <div>
              <h3 className="font-bold text-2xl cursor-pointer">
                <Link to="/">
                  Ecom<span className="text-red-400">Shop</span>
                </Link>
              </h3>
            </div>

            <div className="hidden md:block">
              <ul className="flex items-center text-lg justify-center text-center font-semibold">
                <li>
                  <NavLink
                    to="/"
                    className="mr-5 hover:text-red-400 cursor-pointer"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="">
                  <NavLink
                    to="/allproducts"
                    className="mr-5 hover:text-red-400 cursor-pointer"
                  >
                    All Products
                  </NavLink>
                </li>

                <li className="mr-5 hover:text-red-400 cursor-pointer">
                  <NavLink to="/mens">Men</NavLink>
                </li>

                <li className="mr-5 hover:text-red-400 cursor-pointer">
                  <NavLink to="/womens">Women</NavLink>
                </li>

                <li className="mr-5 hover:text-red-400 cursor-pointer">
                  <NavLink to="/kitchen">Kitchen</NavLink>
                </li>
              </ul>
            </div>

            {menu && (
              <div className="block md:hidden">
                <ul className="  absolute z-10 flex flex-col left-0 h-screen w-full bg-red-400 top-[72px] items-center text-2xl justify-center font-semibold gap-5">
                  <NavLink to="/">
                    <li
                      className="mt-5 hover:text-white cursor-pointer active:border-red-400"
                      onClick={handleCross}
                    >
                      Home
                    </li>
                  </NavLink>
                  <NavLink to="/allproducts">
                    <li
                      className="mt-5 hover:text-white cursor-pointer active:border-red-400"
                      onClick={handleCross}
                    >
                      All Products
                    </li>
                  </NavLink>
                  <NavLink to="/mens">
                    <li
                      className="mt-5 hover:text-white cursor-pointer"
                      onClick={handleCross}
                    >
                      Men
                    </li>
                  </NavLink>
                  <NavLink to="/womens">
                    <li
                      className="mt-5 hover:text-white cursor-pointer"
                      onClick={handleCross}
                    >
                      Women
                    </li>
                  </NavLink>
                  <NavLink to="/kitchen">
                    <li
                      className="mt-5 hover:text-white cursor-pointer"
                      onClick={handleCross}
                    >
                      Kitchen
                    </li>
                  </NavLink>
                </ul>
                <button className=" absolute top-20 z-10 right-0 cursor-pointer py-2 px-4">
                  <RxCross1 className=" size-10" onClick={handleCross} />
                </button>
              </div>
            )}

            <div className="flex justify-center items-center gap-1">
              {username ? (
                <button
                  className="-mr-4 bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:outline-none hover:bg-gray-200 rounded text-base font-bold "
                  onClick={handlelogout}
                >
                  Logout
                </button>
              ) : (
                <div>
                  <Link to="/login">
                    <button className="-mr-4 bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:outline-none hover:bg-gray-200 rounded text-base font-bold ">
                      Login/Signup
                    </button>
                  </Link>
                </div>
              )}

              <Link to="/favourites">
                <button className="rounded-full w-10 h-10  p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-5 -mr-1">
                  <FaHeart size={25} />
                </button>
              </Link>
              <span>{username}</span>
              <Link to="/cart">
                {/* <p className=" font-bold text-center -mb-2 ">{cart.length}</p> */}
                <p className=" cursor-pointer mr-1">
                  <FaCartArrowDown className=" size-6" />
                </p>
              </Link>
              <button
                className="block md:hidden size-6 text-center"
                onClick={handleMenu}
              >
                <TiThMenu />
              </button>
            </div>
          </div>
        </header>
        <Toaster />
      </div>
    </>
  );
}

export default Navbar;
