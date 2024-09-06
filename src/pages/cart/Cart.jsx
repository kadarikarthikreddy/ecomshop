import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import ModelSection from "../../components/models/ModelSection";

function Cart({ cart, handleInc, handleDec, handleRemove, getTotalprice }) {
  const [promocode, setpromocode] = useState("");
  const [discount, setdiscount] = useState(0);
  const [msg, setmsg] = useState("");
  const [falsee, setfalsee] = useState("");
  const updateDis = () => {
    if (promocode === "DISCOUNT10") {
      setdiscount(Math.round(getTotalprice() * 83) * 0.1);
      setmsg("Discount Added");
      setfalsee("");
    } else {
      setmsg("");
      setfalsee("Not a Valid Promo Code");
    }
  };
  return (
    <div className="pt-[80px] justify-center">
      <div className="w-[90%] mx-auto">
        <div className="container mx-auto mt-10">
          <div className="lg:flex lg:flex-row shadow-md my-10 flex-col">
            <div className="lg:w-3/4 bg-white lg:px-10 py-10 w-full px-3">
              <div className="flex justify-between border-b pb-8">
                <h1 className="font-semibold text-2xl">Shopping Cart</h1>
                <h2 className="font-semibold text-2xl">{cart.length} Items</h2>
              </div>
              <div className="flex justify-between pt-10 pb-5 items-center text-center -mx-8 px-1">
                <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
                  Product Details
                </h3>
                <h3 className="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">
                  Quantity
                </h3>
                <h3 className="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">
                  Price
                </h3>
                <h3 className="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">
                  Total
                </h3>
              </div>
              {cart ? (
                <div>
                  {cart.map((item, i) => (
                    <div className="flex lg:justify-center justify-between items-center lg:hover:bg-gray-100 px-1 -mx-8 lg:px-6 py-5">
                      <div className="flex w-2/5" key={i}>
                        <div className="w-20">
                          <img className="h-24" src={item.thumbnail} alt="" />
                        </div>
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
                            onClick={() => handleRemove(item.id)}
                          >
                            Remove
                          </a>
                        </div>
                      </div>
                      <div className="flex justify-center w-1/5 cursor-pointer">
                        <button
                          className=" border px-2 py-1"
                          onClick={() => handleDec(item.id)}
                        >
                          -
                        </button>
                        <button className="px-2">{item.quantity}</button>
                        {item.stock > item.quantity && (
                          <button
                            className=" border px-2 py-1"
                            onClick={() => handleInc(item.id)}
                          >
                            +
                          </button>
                        )}
                      </div>
                      <span className="text-center w-1/5 font-semibold text-sm">
                        ₹{`${Math.round(item.price * 83)}`}
                      </span>
                      <span className="text-center w-1/5 font-semibold text-sm">
                        ₹{`${Math.round(item.price * 83) * item.quantity}`}
                      </span>
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

            <div id="summary" className="lg:w-1/4 px-8 py-10 w-full">
              <h1 className="font-semibold text-2xl border-b pb-8">
                Order Summary
              </h1>
              <div className="flex justify-between mt-10 mb-5">
                <span className="font-semibold text-sm uppercase">
                  Items {cart.length}
                </span>
                <span className="font-semibold text-sm">
                  Rs: {Math.round(getTotalprice() * 83)}
                </span>
              </div>
              <div>
                <p className="font-medium inline-block mb-3 text-sm uppercase">
                  Shipping
                </p>
                <select className="block p-2 text-gray-600 w-full text-sm">
                  <option>Standard packing - ₹100.00</option>
                </select>
              </div>
              <div className="pt-10 pb-5">
                <p className="font-semibold inline-block mb-3 text-sm uppercase">
                  Promo Code
                </p>
                <input
                  type="text"
                  id="promo"
                  placeholder="Enter your code"
                  className="p-2 text-sm w-full border"
                  value={promocode}
                  onChange={(e) => setpromocode(e.target.value)}
                />
                {promocode === "DISCOUNT10" ? (
                  <p className=" text-red-400">{msg}</p>
                ) : (
                  ""
                )}
                {promocode != "DISCOUNT10" && promocode.length > 0 ? (
                  <p className="text-red-700">{falsee}</p>
                ) : (
                  ""
                )}
              </div>
              <button
                className="bg-red-400 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase"
                onClick={updateDis}
              >
                Apply
              </button>
              <div className="border-t mt-8">
                <div className="flex font-semibold justify-between py-6 text-sm ">
                  <span>Total Cost</span>
                  <span>
                    {cart.length > 0 && (
                      <span>Rs: {Math.round(getTotalprice() * 83) + 100}</span>
                    )}
                  </span>
                </div>
                {discount ? (
                  <div className="flex font-semibold justify-between pb-6 pt-2 text-sm ">
                    <span>Discount Cost</span>
                    <span>
                      {promocode === "DISCOUNT10" ? (
                        <p>
                          Rs:{" "}
                          {Math.round(getTotalprice() * 83 - discount) + 100}
                        </p>
                      ) : (
                        "Rs: --"
                      )}
                    </span>
                  </div>
                ) : (
                  ""
                )}

                <ModelSection />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
