import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";

function Favourite({ fav, handleRemovee, Addtocart }) {
  const notify = (items) => {
    Addtocart(items);

    toast.success(<p className=" font-bold text-black">Added to Cart</p>);
  };
  return (
    <div className="pt-[80px] justify-center">
      <div className="w-[90%] mx-auto">
        <div className="container mx-auto mt-10">
          <div className="lg:flex lg:flex-row shadow-md my-10 flex-col">
            <div className=" bg-white lg:px-10 py-10 w-full px-3">
              <div className="flex justify-between border-b pb-8">
                <h1 className="flex items-center gap-1 font-semibold text-2xl">
                  Favourites <FaHeart />
                </h1>
                <h2 className="font-semibold text-2xl">{fav.length} Items</h2>
              </div>
              <div className="flex justify-around pt-10 pb-5 items-center text-center -mx-8 px-1">
                <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
                  Product Details
                </h3>
                {/* <h3 className="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">
                  Quantity
                </h3> */}
                <h3 className="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">
                  Price
                </h3>
                {/* <h3 className="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">
                  Total
                </h3> */}
              </div>
              {fav ? (
                <div>
                  {fav.map((item, i) => (
                    <div className="flex  justify-around items-center lg:hover:bg-gray-100 px-1 -mx-8 lg:px-6 py-5">
                      <div className="flex w-2/5" key={i}>
                        <Link to={`/productdetails/${item.id}`}>
                          <div className="w-28 cursor-pointer">
                            <img className="h-28" src={item.thumbnail} alt="" />
                          </div>
                        </Link>
                        <div className="flex flex-col justify-between lg:ml-4 lg:flex-grow">
                          <span className="font-bold text-sm">
                            {item.title}
                          </span>
                          <span className="text-red-500 text-xs">
                            {item.category}
                          </span>
                          <a
                            href="#"
                            className="font-semibold hover:text-red-500 text-gray-500 text-xs"
                            onClick={() => handleRemovee(item.id)}
                          >
                            Remove
                          </a>
                          <p
                            className=" hover:text-blue-800 cursor-pointer text-blue-500"
                            onClick={() => notify(item)}
                          >
                            Add to Cart
                          </p>
                        </div>
                      </div>
                      {/* <div className="flex justify-center w-1/5 cursor-pointer">
                        <button
                          className=" border px-2 py-1"
                          onClick={() => handleDecc(item.id)}
                        >
                          -
                        </button>
                        <button className="px-2">{item.quantity}</button>
                        <button
                          className=" border px-2 py-1"
                          onClick={() => handleIncc(item.id)}
                        >
                          +
                        </button>
                      </div> */}
                      <span className="text-center w-1/5 font-semibold text-sm">
                        ₹{`${Math.round(item.price * 83)}`}
                      </span>
                      {/* <span className="text-center w-1/5 font-semibold text-sm">
                        ₹{`${Math.round(item.price * 83) * item.quantity}`}
                      </span> */}
                    </div>
                  ))}
                </div>
              ) : (
                ""
              )}

              <div
                href="#"
                className="flex font-semibold text-indigo-600 text-sm mt-10 pl-2"
              >
                <svg
                  className="fill-current mr-2 text-indigo-600 w-4"
                  viewBox="0 0 448 512"
                >
                  <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
                </svg>
                <Link to="/allproducts"> Continue Shopping </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
}

export default Favourite;
