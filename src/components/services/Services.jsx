import React from "react";
import { MdLocalShipping, MdVerified } from "react-icons/md";
import { PiKeyReturnFill } from "react-icons/pi";
import { RiSecurePaymentFill } from "react-icons/ri";

function Services() {
  return (
    <>
      <div className=" container flex justify-center items-center gap-10 flex-wrap mx-auto pb-7 pt-14">
        <div className="bg-red-400 px-5 py-3 flex flex-col justify-center gap-2 items-center rounded-md w-[220px] hover:scale-110 transition duration-500 cursor-pointer">
          <MdLocalShipping />
          <p>FREE SHIPPING</p>
        </div>

        <div className="bg-red-400 px-5 py-3 flex flex-col justify-center gap-2 items-center rounded-md w-[220px] hover:scale-110 transition duration-500 cursor-pointer ">
          <MdVerified />
          <p>AUTHENTIC PRODUCTS</p>
        </div>

        <div className="bg-red-400 px-5 py-3 flex flex-col justify-center gap-2 items-center rounded-md  w-[220px] hover:scale-110 transition duration-500 cursor-pointer">
          <PiKeyReturnFill />
          <p>EASY RETURN</p>
        </div>

        <div className="bg-red-400 px-5 py-3 flex flex-col justify-center gap-2 items-center rounded-md w-[220px] hover:scale-110 transition duration-500 cursor-pointer">
          <RiSecurePaymentFill />
          <p>SECURE PAYMENT</p>
        </div>
      </div>
    </>
  );
}

export default Services;
